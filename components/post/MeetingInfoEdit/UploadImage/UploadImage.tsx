import { useFormikContext } from 'formik';
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import Styled from './UploadImage.styled';
import Camera from './camera.svg';
import Typography from '@components/common/Typography';
import theme from '@styles/theme';
import image from '@lib/api/image';

const UploadImage = () => {
  const { setFieldValue } = useFormikContext();
  const dragRef = useRef<HTMLInputElement | null>(null);

  const handleDragIn = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();
    console.log('handleDragIn');
  }, []);

  const handleDragOut = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();
    if (dragRef.current) {
      dragRef.current.style.border = `2px dashed ${theme.color.gray600}`;
      console.log('handleDragOut');
    }
  }, []);

  const handleDragOver = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();
    console.log('handleDragOver');
    if (dragRef.current) {
      dragRef.current.style.border = '2px #0168fa dashed';
      dragRef.current.style.background = '#ddeafc';
    }
  }, []);

  const onChangeFiles = useCallback(async (e: ChangeEvent<HTMLInputElement> | any): void => {
    if (e.type === 'drop') {
      const selectedFile = e.dataTransfer.files[0];
      const data = new FormData();
      data.append('selectedFile', selectedFile);
      const res = await image.upload(data);
      console.log('res', res);
    }
  }, []);

  const handleDrop = useCallback(
    (e: DragEvent): void => {
      e.preventDefault();
      e.stopPropagation();
      console.log('handleDrop');
      if (dragRef.current) {
        dragRef.current.style.border = `2px dashed ${theme.color.gray600}`;
        dragRef.current.style.background = `${theme.color.gray200}`;
        onChangeFiles(e);
      }
    },
    [onChangeFiles],
  );

  const initDragEvents = useCallback((): void => {
    console.log('initDragEvents', dragRef.current);
    if (dragRef.current) {
      dragRef.current.addEventListener('dragenter', handleDragIn);
      dragRef.current.addEventListener('dragleave', handleDragOut);
      dragRef.current.addEventListener('dragover', handleDragOver);
      dragRef.current.addEventListener('drop', handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  const resetDragEvents = useCallback((): void => {
    console.log('resetDragEvents');
    if (dragRef.current) {
      dragRef.current.removeEventListener('dragenter', handleDragIn);
      dragRef.current.removeEventListener('dragleave', handleDragOut);
      dragRef.current.removeEventListener('dragover', handleDragOver);
      dragRef.current.removeEventListener('drop', handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  useEffect(() => {
    initDragEvents();
    return () => resetDragEvents();
  }, [initDragEvents, resetDragEvents]);

  return (
    <Styled.container ref={dragRef}>
      <input id={'imageUrl'} name={'imageUrl'} type={'file'} hidden />
      <Styled.labelContainer htmlFor={'imageUrl'}>
        <Camera />
        <Typography size={'sm'} color={'darkgray'}>
          원하는 사진을 드래그 앤 드롭해주세요!
        </Typography>
      </Styled.labelContainer>
    </Styled.container>
  );
};

export default UploadImage;
