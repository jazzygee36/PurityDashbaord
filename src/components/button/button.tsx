import { FC } from 'react';

interface Props {
  className: string;
  title: string;
}

const Button: FC<Props> = ({ title, className }) => {
  return <button className={`${className} h-[40px]`}>{title}</button>;
};

export default Button;
