import { FC, ReactNode } from 'react';
export interface MyButtonProps {
    color?: string;
    children: ReactNode;
}
declare const MyButton: FC<MyButtonProps>;
export default MyButton;
