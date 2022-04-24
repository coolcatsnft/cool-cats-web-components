/// <reference types="react" />
import { IPetThumbnail } from "../../utils";
import '../../utils/scss/globals.scss';
import '../CatThumbnail/CatThumbnail.scss';
export declare function PetThumbnail({ id, stats, src, onClick, href, children, phase, element, selected, staked, hideStats, hideBadge }: IPetThumbnail): JSX.Element;
export default PetThumbnail;
