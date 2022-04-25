/// <reference types="react" />
import { IButtonProps, IIncrement } from "../../utils";
import './ButtonIncrement.scss';
export declare function ButtonIncrement({ size, colour, disabled, allowZero, buttonProps, incrementProps }: {
    size?: string;
    colour?: string;
    disabled?: boolean;
    allowZero?: boolean;
    buttonProps: IButtonProps;
    incrementProps: IIncrement;
}): JSX.Element;
export default ButtonIncrement;
