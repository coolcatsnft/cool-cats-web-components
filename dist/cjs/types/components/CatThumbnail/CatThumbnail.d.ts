import React from "react";
import { ICatThumbnail } from "../../utils";
import '../../utils/scss/globals.scss';
import './CatThumbnail.scss';
export declare function CatThumbnailImage({ src, srcAlt, children }: {
    src?: string | React.ReactNode;
    srcAlt?: string;
    children?: React.ReactNode;
}): JSX.Element;
export declare function CatThumbnail({ id, stats, src, onClick, href, children, selected, claimable }: ICatThumbnail): JSX.Element;
export default CatThumbnail;
