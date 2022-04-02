import React from "react";
import './Alert.scss';
import '../BooleanVisibilityContainer/BooleanVisibilityContainer.scss';
export declare function AlertText({ children }: {
    children?: React.ReactNode;
}): JSX.Element;
export declare function Alert({ visible, fixed, type, className, children }: {
    visible?: boolean;
    fixed?: boolean;
    type?: string;
    className?: string;
    children?: React.ReactNode;
}): JSX.Element;
export default Alert;
