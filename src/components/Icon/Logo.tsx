import React from "react";
import useEyes from "../../hooks/useEyes";

interface ILogo {
  x?: number,
  y?: number,
  stroke?: string,
  fill?: string,
  eyes?: string,
  pupil?: string,
  whiskersLeft?: string,
  whiskersRight?: string,
  mouth?: string
}

export function Logo({ logo }: { logo?: ILogo }) {
  const eyesProps = {} as any;
  let strokeColour = '#000000';
  let fillColour = '#90cff1';
  let eyesColour = '#FFFFFF';
  let pupilColour = '#FFFFFF';
  let mouthColour = '#FFFFFF';

  if (logo && logo.x && logo.y) {
    eyesProps.style = {}
    eyesProps.style.transform = `translate(${logo.x}px, ${logo.y}px)`;
  }

  if (logo && logo.stroke) {
    strokeColour = logo.stroke;
  }

  let whiskersLeft = strokeColour;
  let whiskersRight = strokeColour;

  if (logo && logo.fill) {
    fillColour = logo.fill;
  }

  if (logo && logo.eyes) {
    eyesColour = logo.eyes;
  }

  if (logo && logo.mouth) {
    mouthColour = logo.mouth;
  }

  if (logo && logo.pupil) {
    pupilColour = logo.pupil;
  }

  if (logo && logo.whiskersLeft) {
    whiskersLeft = logo.whiskersLeft;
  }

  if (logo && logo.whiskersRight) {
    whiskersRight = logo.whiskersRight;
  }

  return (
    <svg viewBox="0 0 105 96" width="105" height="96" xmlns="http://www.w3.org/2000/svg">
      <g transform="matrix(0.1, 0, 0, -0.1, 0, 96)">
        <path d="M 724.889 909.105 C 692.809 891.875 690.518 888.43 651.565 783.902 L 626.36 717.28 L 563.348 712.686 L 500.336 708.091 L 457.945 775.862 C 409.826 856.267 364 891.875 304.423 899.916 C 215.061 911.403 164.651 820.659 164.651 650.659 C 164.651 601.266 160.068 547.28 153.194 528.901 C 147.465 510.523 137.154 473.766 130.281 446.198 C 121.115 410.59 111.95 396.807 98.202 399.104 C 30.606 404.847 15.711 381.874 78.724 370.387 C 127.989 361.198 130.281 345.117 84.452 334.779 C 64.976 330.184 50.082 319.846 50.082 309.508 C 50.082 296.873 58.102 294.576 83.308 300.319 C 110.804 306.062 116.532 303.765 123.406 278.495 C 134.863 231.4 215.061 141.805 280.366 102.751 C 369.727 49.913 470.548 25.791 583.97 33.831 C 753.531 44.17 933.404 153.292 994.125 283.089 C 1031.932 364.644 1027.349 496.739 979.23 656.402 C 935.695 805.727 893.304 880.389 837.166 906.808 C 789.047 929.781 763.842 930.93 724.889 909.105 Z" stroke={strokeColour} fill={fillColour} />
        <path className="whisker whisker--left" fill={whiskersLeft} d="M713 921 c-20 -20 -40 -58 -58 -110 l-26 -78 -67 -6 c-52 -4 -69 -2 -75 9 -34 60 -99 143 -126 161 -79 53 -158 36 -192 -42 -29 -65 -46 -196 -30 -231 18 -41 33 -16 36 60 6 148 43 214 114 202 19 -3 45 -16 59 -28 24 -23 102 -135 102 -148 0 -3 -16 -14 -35 -23 -19 -9 -35 -21 -35 -27 0 -19 28 -22 52 -6 26 17 130 46 166 46 16 0 22 -5 20 -17 -2 -12 3 -18 16 -18 16 0 25 17 46 91 41 145 78 183 144 151 59 -27 100 -103 136 -244 12 -47 40 -60 40 -19 0 36 -39 156 -66 201 -41 71 -77 98 -137 103 -49 4 -56 2 -84 -27z" />
        <path className="whisker whisker--left" fill={whiskersLeft} d="M997 473 c4 -94 2 -116 -16 -165 -31 -81 -107 -154 -218 -209 -84 -42 -92 -44 -194 -47 -113 -4 -182 9 -263 50 -52 27 -140 111 -161 153 -22 47 -20 145 4 230 19 66 16 95 -8 81 -10 -7 -19 -33 -41 -123 -10 -40 -13 -42 -50 -45 -50 -4 -53 -21 -5 -28 20 -3 36 -8 35 -12 0 -5 0 -12 0 -17 0 -5 -16 -12 -36 -15 -47 -9 -39 -32 10 -28 29 2 36 0 36 -16 0 -10 13 -38 29 -63 85 -132 241 -209 423 -209 178 0 367 97 455 233 36 57 53 150 42 242 -9 82 -13 95 -33 95 -11 0 -13 -23 -9 -107z" />
        
        <g {...eyesProps}>
          <path className="whisker whisker--right" d="M854 319 c-10 -16 15 -29 59 -29 43 0 49 16 11 30 -34 13 -61 13 -70 -1z" fill={whiskersRight} />
          <path className="whisker whisker--right" d="M868 393 c-10 -2 -18 -11 -18 -19 0 -16 75 -20 99 -5 34 22 -24 39 -81 24z" fill={whiskersRight} />
          <path className="eye eye--left eye--black" fill={strokeColour} d="M 185.592 416.408 C 177.592 407.408 171.592 377.408 171.592 346.408 C 171.592 303.408 175.592 288.408 190.592 277.408 C 217.592 258.408 242.592 259.408 266.592 283.408 C 293.592 310.408 294.592 393.408 268.592 416.408 C 244.592 438.408 202.592 438.408 185.592 416.408 Z M 244.592 341.408 C 242.592 324.408 236.592 308.408 229.592 306.408 C 211.592 300.408 203.592 344.408 216.592 378.408 C 226.592 405.408 229.592 406.408 237.592 390.408 C 243.592 381.408 246.592 358.408 244.592 341.408 Z"/>
          <path className="eye eye--right eye--black" fill={strokeColour} d="M 640.592 425.408 C 603.592 400.408 594.592 315.408 626.592 283.408 C 681.592 228.408 753.592 292.408 732.592 377.408 C 721.592 423.408 674.592 448.408 640.592 425.408 Z M 692.592 369.408 C 700.592 335.408 688.592 301.408 668.592 305.408 C 649.592 309.408 642.592 334.408 650.592 369.408 C 658.592 400.408 684.592 400.408 692.592 369.408 Z"/>
          <ellipse className="eye eye--left eye--inner" fill={pupilColour} transform="matrix(0.999942, 0.010757, 0.010757, -0.999942, 3.844191, -2.417524)" cx="226.651" cy="-356.165" rx="22.154" ry="49.42" />
          <ellipse className="eye eye--right eye--inner" fill={pupilColour} transform="matrix(0.999942, 0.01076, 0.01076, -0.999942, 448.070696, -10.388535)" cx="226.651" cy="-356.165" rx="26.173" ry="44.235" />
          <path className="mouth mouth--black" fill={strokeColour} d="M 351.689 353.793 C 325.689 340.793 321.689 332.793 321.689 299.793 C 321.689 249.793 355.689 222.793 425.689 215.793 C 488.689 209.793 516.689 216.793 549.689 247.793 C 583.689 278.793 584.689 316.793 551.689 349.793 C 529.689 371.793 520.689 373.793 454.689 371.793 C 414.689 369.793 368.689 361.793 351.689 353.793 Z M 438.035 304.479 C 501.757 340.582 535.652 340.582 539.719 304.479 C 543.786 268.377 511.926 250.326 444.137 250.326 C 376.348 250.326 374.314 268.377 438.035 304.479 Z"/>
          <path className="mouth mouth--white" fill={mouthColour} d="M 437.938 -304.094 Q 533.521 -358.248 539.622 -304.094 L 539.622 -304.094 Q 545.723 -249.941 444.04 -249.941 L 444.04 -249.941 Q 342.356 -249.941 437.938 -304.094 Z" transform="matrix(1, 0, 0, -1, 0, 0)" />
        </g>
      </g>
    </svg>
  )
}

export function LogoMotion() {
  const { xPos, yPos } = useEyes();

  return (
    <Logo logo={{ x: xPos, y: yPos }} />
  )
}

export function SiteLogo() {
  return (
    <Logo logo={{ eyes: 'white', fill: 'white', pupil: 'white', stroke: '#14396d', mouth: 'white', whiskersLeft: 'white' }} />
  )
}

export function SiteLogoMotion() {
  const { xPos, yPos } = useEyes();

  return (
    <Logo logo={{ x: xPos, y: yPos, eyes: 'white', fill: 'white', pupil: 'white', stroke: '#14396d', mouth: 'white', whiskersLeft: 'white' }} />
  )
}

export function WhiteOutlineLogo() {
  return (
    <Logo logo={{ eyes: 'transparent', fill: 'transparent', stroke: 'white', mouth: 'transparent', pupil: 'transparent' }} />
  )
}

export function WhiteOutlineLogoMotion() {
  const { xPos, yPos } = useEyes();
  
  return (
    <Logo logo={{ x: xPos, y: yPos, eyes: 'transparent', fill: 'transparent', stroke: 'white', mouth: 'transparent', pupil: 'transparent' }} />
  )
}

export default Logo;
