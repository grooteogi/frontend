import Image from 'next/image';
import theme from '../../../styles/theme';
import { StyledTitle, STitleProps } from './style';

export interface TitleProps extends STitleProps {
  icon?: string | StaticImageData;
  alt?: string;
  children: string;
}

const cal_px = (rem_size: string) => {
  const f_num = parseFloat(rem_size.replace('rem', ''));
  return f_num * 16 + 'px';
};

const Title = ({ children, icon, alt, size, ...props }: TitleProps) => {
  const StyledHeader = StyledTitle.withComponent(size);
  const img_size = cal_px(theme.style.title.sizes[size].fontSize);
  return icon ? (
    <>
      <StyledHeader size={size} {...props}>
        <Image src={icon} alt={alt} width={img_size} height={img_size} quality="100" />
        {children}
      </StyledHeader>
    </>
  ) : (
    <StyledHeader size={size} {...props}>
      {children}
    </StyledHeader>
  );
};

export default Title;
