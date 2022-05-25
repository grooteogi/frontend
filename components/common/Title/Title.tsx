import Image from 'next/image';
import { StyledTitle, STitleProps, sizes } from './Title.styled';

export interface TitleProps extends STitleProps {
  icon?: string | StaticImageData;
  alt?: string;
  children: string;
}

const remToPixel = (rem_size: string) => {
  const num = parseFloat(rem_size.replace('rem', ''));
  return num * 16 + 'px';
};

const Title = ({ children, icon, alt, size, ...props }: TitleProps) => {
  const StyledHeader = StyledTitle.withComponent(size);
  const imgPixel = remToPixel(sizes[size].fontSize);
  return (
    <>
      <StyledHeader size={size} {...props}>
        {icon ? <Image src={icon} alt={alt} width={imgPixel} height={imgPixel} quality="100" /> : <></>}
        {children}
      </StyledHeader>
    </>
  );
};

export default Title;
