import { TextType } from '../../styles';

export interface StyledTextProps {
  type: TextType;
  bold?: boolean;
  children: any;
}

export interface TextProps extends StyledTextProps {}
