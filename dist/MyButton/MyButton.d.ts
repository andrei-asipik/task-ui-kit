import { FC, ReactNode } from 'react';
export interface MyButtonProps {
    color?: string;
    big?: boolean;
    children: ReactNode;
}
export declare const MyButton: FC<MyButtonProps>;
export default MyButton;
