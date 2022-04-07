/// <reference types="react" />
interface ILogo {
    x?: number;
    y?: number;
    stroke?: string;
    fill?: string;
    eyes?: string;
    pupil?: string;
    whiskersLeft?: string;
    whiskersRight?: string;
    mouth?: string;
}
export declare function Logo({ logo }: {
    logo?: ILogo;
}): JSX.Element;
export declare function LogoMotion(): JSX.Element;
export declare function SiteLogo(): JSX.Element;
export declare function SiteLogoMotion(): JSX.Element;
export declare function WhiteOutlineLogo(): JSX.Element;
export declare function WhiteOutlineLogoMotion(): JSX.Element;
export default Logo;
