/// <reference types="react" />
import { IFormElement } from "../../utils";
import '../../utils/scss/globals.scss';
import './Form.scss';
export declare function Element({ type, label, disabled, error, size, htmlFor, required, children }: IFormElement): JSX.Element;
export default Element;
