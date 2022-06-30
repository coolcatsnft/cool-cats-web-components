import React from 'react';

export function Ticket() {
  const styles = {
    st1: { fill: '#232323' },
    st2: { fill: '#FA71AC' },
    st3: { fill: '#222222' },
    svgStyle: { enableBackground: 'new 0 0 60 60' }
  }

  return (
    <svg version="1.1" x="0px" y="0px" viewBox="0 0 60 60">
    <g id="Layer_4_xA0_Image_00000023996284099528007380000017938093814389784212_">
      <image style={{ overflow: 'visible' }} width="500" height="500" id="Layer_4_xA0_Image" xlinkHref="data:image/png;base64,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" transform="matrix(0.12 0 0 0.12 0 0)">
      </image>
    </g>
      <g id="Layer_3_xA0_Image_00000011710857674276448260000008162595661817008030_">
      <g>
        <path style={styles.st1} d="M59.5,25.4c0.1,0.1,0.2,0.2,0.2,0.2c0,0.2,0,0.3,0,0.5c0,0.2-0.1,0.5-0.3,0.6c-0.2,0.2-0.3,0.3-0.5,0.4
					c-0.2,0.1-0.4,0.3-0.4,0.6c0,0.4-0.2,0.7-0.3,1.1c0,0.1,0,0.2,0,0.3c0.2,0.7,0.2,0.8,0,1.6c0,0.2,0,0.3,0,0.5
					C58,31.4,58,31.4,58,31.6c-0.3,0.4-0.7,0.7-1.2,0.8c-0.2,0-0.3,0.2-0.5,0.3c-0.3,0.3-0.6,0.4-0.9,0.6c-0.3,0.2-0.6,0.4-0.9,0.4
					c-0.1,0-0.1,0.1-0.2,0.1c-0.2,0.3-0.5,0.3-0.7,0.4c-0.2,0.1-0.3,0.1-0.4,0.2c-0.3,0.2-0.6,0.5-1,0.6c-0.3,0.1-0.4,0.3-0.7,0.5
					c-0.5,0.3-0.9,0.5-1.4,0.7c-0.4,0.1-0.8,0.3-1,0.7c-0.2,0.2-0.4,0.3-0.7,0.4c-0.3,0.1-0.7,0.4-1,0.6c-0.2,0.2-0.5,0.2-0.7,0.3
					c-0.6,0.3-1.1,0.7-1.7,1.1c-0.3,0-0.5,0.2-0.7,0.4c-0.1,0.1-0.2,0.1-0.3,0.2c-0.3,0.1-0.6,0.3-0.8,0.4c-0.3,0.2-0.5,0.3-0.8,0.5
					c-0.4,0.2-0.8,0.5-1.2,0.7c-0.2,0.1-0.4,0.2-0.6,0.4c-0.1,0.1-0.2,0.2-0.3,0.2c-0.4,0-0.8,0.3-1.1,0.5c-0.3,0.2-0.6,0.3-0.9,0.6
					c-0.1,0.1-0.4,0.2-0.6,0.2C37.1,44,37.1,44,36.7,44c-0.5,0.5-1.1,0.7-1.7,1.1c-0.4,0.2-0.8,0.4-1.2,0.7
					c-0.3,0.2-0.6,0.3-0.9,0.5c-0.2,0.1-0.4,0.2-0.5,0.3c-0.1,0.1-0.2,0.2-0.4,0.3c-0.1,0-0.2,0-0.3,0c-0.5,0.4-1,0.6-1.5,1
					c-0.1,0-0.2,0-0.4,0c-0.4,0.4-0.9,0.6-1.3,0.9c-0.4,0.2-0.9,0.4-1.2,0.7c-0.3,0.2-0.5,0.4-0.8,0.5c-0.3,0.2-0.7,0.4-1,0.6
					c-0.2,0.2-0.5,0.4-0.9,0.5c-0.2,0.1-0.3,0.1-0.4,0.2c-0.3,0.3-0.6,0.6-1.1,0.6c-0.4,0.3-0.9,0.4-1.3,0.8
					c-0.2,0.2-0.6,0.2-0.8,0.5c-0.4,0.1-0.7,0.4-1,0.5c-0.1,0.1-0.2,0.1-0.3,0.1c-0.4,0.4-0.9,0.6-1.5,0.8c-0.6,0.2-1.1,0-1.6-0.1
					c-0.2-0.2-0.4-0.4-0.7-0.7c0-0.2-0.1-0.4-0.3-0.5c-0.3-0.1-0.5-0.3-0.9-0.3c-0.5,0-1,0-1.5,0.3c-0.1,0-0.1,0.1-0.1,0.1
					c-0.7,0.1-1.4,0-1.9-0.5c-0.3-0.3-0.6-0.7-0.6-1.2c-0.1-0.1-0.1-0.1-0.2-0.2c0-0.4,0-0.8,0-1.2c-0.1-0.3-0.5-0.5-0.6-0.8
					c0-0.1-0.2-0.2-0.4-0.2c-0.1,0-0.3-0.1-0.3-0.2c-0.4-0.5-1-0.9-1.1-1.6c0-0.2-0.2-0.3-0.2-0.5c0-0.5-0.3-1-0.1-1.4
					c-0.2-0.2-0.4-0.5-0.4-0.8c-0.2-0.2-0.4-0.4-0.5-0.6c-0.1-0.2-0.2-0.3-0.4-0.4c-0.4-0.2-0.5-0.6-0.8-0.9
					c-0.1-0.1-0.2-0.3-0.3-0.5c-0.1-0.1-0.2-0.3-0.2-0.5c0-0.2,0-0.4,0-0.6c-0.3-0.3-0.2-0.7-0.2-1.1c0-0.1-0.1-0.2-0.1-0.2
					c-0.2-0.3-0.3-0.6-0.6-0.7c-0.5-0.2-0.6-0.6-0.9-1C3,38,2.9,37.6,2.5,37.3c0-0.1,0-0.3,0-0.4c-0.1-0.1-0.2-0.2-0.2-0.2
					C2.4,36.1,2,35.6,2.2,35c-0.3-0.5-0.5-0.9-0.9-1.3c-0.1-0.1-0.2-0.2-0.4-0.3c-0.3-0.2-0.5-0.5-0.7-1c-0.1-0.4,0.2-0.7,0.5-1.1
					C0.9,31.2,1,31.1,1.2,31c0.1-0.1,0.2-0.3,0.4-0.3c0.1,0,0.2-0.1,0.2-0.3c0.1-0.3,0.3-0.4,0.5-0.6c0-0.5,0-1,0-1.4
					c-0.1-0.1-0.1-0.1-0.2-0.2c-0.1-0.5-0.2-1-0.1-1.5c0.6-0.6,1.2-1,2.1-1.4c0.2-0.1,0.4-0.2,0.6-0.4c0.2-0.2,1.5-0.9,1.8-0.9
					c0,0,0.1,0,0.1,0c0.2-0.3,0.5-0.5,0.9-0.7c0.4-0.2,0.8-0.4,1.1-0.7c0.2-0.2,0.5-0.4,0.8-0.4c0.5-0.1,0.8-0.4,1.2-0.7
					c0.8-0.5,1.6-1.1,2.5-1.5c0.4-0.2,0.7-0.4,1-0.6c0.5-0.3,1-0.5,1.4-0.8c0.2-0.1,0.4-0.2,0.7-0.3c0.2-0.1,0.5-0.1,0.6-0.4
					c0.3-0.2,0.7-0.5,1-0.7c0.4-0.2,0.8-0.4,1.1-0.6c0.2-0.1,0.4-0.2,0.6-0.3c0.6-0.3,1.1-0.7,1.6-1c0.4-0.2,0.8-0.5,1.2-0.7
					c0.3-0.2,0.7-0.3,0.9-0.6c0.1-0.1,0.2-0.1,0.2-0.1c0.9-0.4,1.7-0.9,2.6-1.5c0.1,0,0.1-0.1,0.2-0.1c0.1,0,0.2,0,0.2,0
					c0.3-0.4,0.7-0.6,1.1-0.8c0.4-0.1,0.8-0.3,1.1-0.6c0.2-0.2,0.5-0.2,0.8-0.4c0.2-0.1,0.4-0.3,0.7-0.4c0.5-0.3,0.9-0.6,1.4-0.9
					c0.1-0.1,0.2-0.2,0.3-0.3c0.4,0,0.6-0.3,0.9-0.4c0.2-0.1,0.3-0.3,0.5-0.3c0.1,0,0.1,0,0.2-0.1c0.3-0.3,0.8-0.4,1.2-0.8
					c0.2-0.1,0.3-0.1,0.5-0.1c0.3-0.5,0.9-0.6,1.4-1c0.3-0.2,0.6-0.4,0.9-0.6c0.2-0.1,0.3-0.2,0.5-0.2c0.1,0,0.1,0,0.2,0
					c0.7-0.6,1.5-0.9,2.2-1.4c0.3-0.2,0.6-0.3,0.9-0.5c0.1,0,0.2,0,0.3,0c0.9,0,0.9,0.1,1.6,0.8c0.2,0.2,0.4,0.5,0.6,0.8
					c0.1,0,0.2,0,0.3,0.1c0.3,0.2,0.6,0.3,0.9,0.2c0.3,0,0.5,0.3,0.8,0.1c0.5-0.1,0.7-0.5,1.2-0.7c0.3-0.1,0.6-0.2,0.9,0
					c0.1,0,0.2,0,0.3,0c0.2,0.2,0.4,0.4,0.5,0.7c0,0.3,0,0.5,0.2,0.8c0,0,0.1,0.1,0.1,0.1c0,0.4,0,0.8,0.1,1.2
					c0.3,0.4,0.8,0.7,1.2,1.1c0.1,0.1,0.2,0.2,0.3,0.4c0.2,0.5,0.5,1,0.7,1.5c0.1,0.4,0,0.7,0.1,1c0.2,0.5,0.5,0.7,0.9,1
					c0.4,0.2,0.6,0.5,0.7,0.8c0.2,0.3,0.3,0.6,0.5,0.9c0.2,0.2,0.1,0.5,0.1,0.7c0.1,0.2,0.3,0.3,0.2,0.6c0,0.3,0.2,0.4,0.2,0.7
					c0.5,0.4,0.7,1,1.3,1.3c0.1,0,0.2,0.1,0.2,0.2c0.2,0.4,0.5,0.8,0.8,1.1c0.2,0.3,0.4,0.8,0.5,1.2c0.1,0.5,0,1,0.3,1.4
					c0.1,0.1,0.1,0.2,0.2,0.3c0.3,0.3,0.6,0.6,0.9,0.9c0.2,0.2,0.4,0.4,0.4,0.6c0.1,0.3,0.3,0.3,0.5,0.6c0.1,0.2,0.1,0.4,0.2,0.6
					C59.4,24.9,59.6,25.1,59.5,25.4z M4.6,31.1c-0.2,0.4-0.6,0.6-0.8,1c0.4,0.5,0.7,1,1.1,1.6c-0.1,0.6,0.1,1.3,0.1,1.9
					c0,0.3,0,0.5,0,0.8c0.2,0.1,0.1,0.2,0.2,0.3c0.5,0.4,0.9,1,1.5,1.4c0.1,0.1,0.2,0.2,0.3,0.3c0.2,0.4,0.5,0.8,0.5,1.2
					c0,0.2,0.1,0.5,0.3,0.7c0,0.3,0,0.7,0,1c0.2,0.5,0.7,0.7,0.9,1.2c0,0,0.1,0,0.1,0c0.3,0.2,0.5,0.4,0.6,0.7
					c0.4,0.1,0.4,0.4,0.6,0.7c0.1,0.1,0.2,0.2,0.3,0.3c-0.1,0.6,0.2,1.2,0.1,1.9c0.3,0.2,0.3,0.5,0.5,0.8c0.2,0.3,0.4,0.5,0.6,0.8
					c0.2,0.3,0.4,0.5,0.7,0.6c0.3,0.2,0.5,0.4,0.6,0.7c0.1,0.2,0.2,0.4,0.4,0.6c-0.1,0.4,0.2,0.8,0.1,1.2c0.1,0.1,0.1,0.1,0.2,0.2
					c0.8-0.3,1.7-0.1,2.4-0.1c0.4,0.1,0.6,0.4,0.9,0.4c0.1,0,0.3,0.1,0.4,0.2c0.3,0.3,0.6,0.5,0.9,0.7c0.1,0,0.2,0,0.3,0
					c0.3-0.3,0.6-0.5,1-0.7c0.5-0.3,1-0.6,1.4-0.8c0.1-0.1,0.2-0.2,0.3-0.2c0.7-0.2,1.3-0.7,2-1c0,0,0.1-0.1,0.1-0.1
					c0.2-0.2,0.4-0.2,0.6-0.4c0.2-0.1,0.4-0.2,0.6-0.3c0.2-0.1,0.4-0.2,0.5-0.3c0.4-0.2,0.6-0.6,1.1-0.6c0,0,0.1-0.1,0.1-0.1
					c0.3-0.3,0.6-0.4,1-0.6c0.3-0.2,0.6-0.4,0.9-0.6c0.3-0.1,0.6-0.1,0.8-0.3c0.2-0.2,0.5-0.3,0.7-0.5c0.2-0.2,0.5-0.2,0.8-0.4
					c0.1,0,0.1-0.1,0.2-0.1c0.2-0.2,0.4-0.3,0.6-0.4c0.1-0.1,0.3-0.1,0.4-0.3c0.2-0.2,0.4-0.3,0.6-0.4c0.2-0.1,0.4-0.3,0.7-0.4
					c0.2,0,0.4-0.3,0.7-0.3c0.1,0,0.1-0.1,0.2-0.1c0.2-0.3,0.5-0.5,0.8-0.6c0.7-0.2,1.2-0.8,1.9-1c0.1,0,0.1-0.1,0.1-0.1
					c0.5-0.5,1.1-0.7,1.6-1c0.4-0.2,0.8-0.4,1-0.7c0.1,0,0.1,0,0.2,0c0.2-0.3,0.5-0.5,0.9-0.5c0,0,0.1-0.1,0.1-0.1
					c0.3-0.3,0.7-0.4,1.1-0.6c0.5-0.3,1-0.6,1.5-0.9c0.5-0.3,1-0.6,1.5-0.8c0.1,0,0.1-0.1,0.1-0.1c0.3-0.5,1-0.5,1.3-1
					c0.2,0.1,0.2-0.2,0.4-0.1c0.1,0.1,0.3-0.1,0.4-0.1c0.3-0.3,0.7-0.4,1-0.6c0.4-0.2,0.9-0.4,1.2-0.8c0.3-0.3,0.7-0.5,1.1-0.6
					c0.3-0.1,0.6-0.2,0.9-0.5c0.2-0.2,0.4-0.4,0.7-0.5c0.6-0.1,1-0.6,1.5-0.8c0.3-0.1,0.5-0.4,0.8-0.5c0.3-0.1,0.5-0.3,0.8-0.4
					c0.1,0,0.3-0.2,0.4-0.2c0.3,0,0.5-0.2,0.7-0.5c-0.2-1,0.1-2,0.2-2.8c0.3-0.7,0.7-1.3,1.2-1.8c0-0.5-0.3-1-0.7-1.3
					c-0.4-0.3-0.9-0.9-1.2-1.4c-0.2-0.4-0.3-0.9-0.6-1.2c0.1-0.3-0.2-0.6-0.1-0.9c0.1-0.4-0.1-0.6-0.4-0.9c-0.2-0.1-0.3-0.3-0.4-0.5
					c-0.1-0.1-0.3-0.1-0.4-0.2c-0.2-0.1-0.4-0.3-0.5-0.5c-0.5-0.7-1-1.5-1.3-2.4c0,0,0-0.1,0-0.1c0.1-0.6-0.2-1.1-0.6-1.5
					c-0.2-0.1-0.4-0.2-0.5-0.4c-0.2-0.4-0.6-0.7-0.8-0.9c-0.4-0.9-0.8-1.7-0.7-2.6c-0.2-0.3-0.5-0.4-0.6-0.8c-0.5-0.2-0.8-0.5-0.9-1
					c-0.1-0.4-0.3-0.9-0.7-1.2c-0.3,0.2-0.7,0.2-1,0.1c-0.3-0.1-0.7-0.1-1-0.1c-0.2,0-0.4,0-0.5,0c-0.4-0.3-1-0.3-1.4-0.6
					c-0.4-0.4-0.8-0.6-1.2-0.9C40.2,7.1,39,8,37.6,8.4c-0.2,0.2-0.5,0.6-1,0.6c0,0.2-0.1,0.3-0.2,0.3C36,9.6,35.6,9.8,35.2,10
					c-0.5,0.3-1.1,0.6-1.5,0.9c-0.4,0.3-0.9,0.4-1.3,0.8c0,0.1-0.2,0.1-0.2,0.1c-0.3,0.1-0.6,0.3-0.8,0.5c-0.2,0.2-0.5,0.3-0.9,0.3
					c-0.3,0.5-1,0.6-1.4,1.1c-0.7,0.4-1.4,0.8-2.1,1.2c-0.3,0.2-0.6,0.4-1,0.6c-0.4,0.2-0.7,0.3-1,0.6c0,0-0.1,0.1-0.2,0.1
					c-0.6,0.2-1.1,0.7-1.6,1c-0.2,0.1-0.5,0.2-0.7,0.3c-0.7,0.5-1.5,0.8-2.2,1.4c-0.2,0.2-0.4,0.3-0.6,0.4c-0.3,0.2-0.6,0.3-0.9,0.5
					c-0.1,0.1-0.4,0.2-0.6,0.1c-0.1,0.1-0.2,0.3-0.4,0.3c-0.9,0.4-1.5,1-2.4,1.5c-0.2,0.1-0.3,0.3-0.6,0.2c-0.1,0-0.3,0.1-0.4,0.2
					c-0.3,0.3-0.7,0.4-1,0.7C13.2,22.9,13,23,12.8,23c-0.3,0-0.5,0.1-0.7,0.3c-0.4,0.3-0.8,0.5-1.3,0.7c-0.1,0-0.1,0.1-0.2,0.2
					c-0.2,0.3-0.5,0.5-0.9,0.6c-0.4,0.2-0.7,0.4-1,0.6c-0.3,0.2-0.5,0.2-0.8,0.3c-0.5,0.5-1.3,1-2.2,1.4c-0.4,0.2-0.7,0.4-1,0.7
					c0,0.2,0.1,0.3,0.1,0.4c0,0.4,0,0.8,0,1.3c0,0.4-0.1,0.8-0.4,1.2C4.6,30.8,4.6,31,4.6,31.1z" />
        <path style={styles.st2} d="M8.2,36.2c-0.5-0.3-0.6-0.8-0.8-1.3c-0.3-0.3-0.6-0.7-0.7-1.3c-0.3-0.2-0.5-0.5-0.5-1c0-0.2,0.2-0.3,0-0.5
					C6,31.8,6.1,31.4,5.9,31C5.9,31,6,31,6,30.9C6,30.6,6,30.3,6.1,30.1c0.4-0.9,0.9-1.7,1.7-2.2c0.5-0.3,0.9-0.7,1.4-0.9
					c0.4-0.2,0.9-0.4,1.2-0.8c0.1-0.1,0.2-0.1,0.3-0.2c0.3-0.2,0.7-0.3,0.9-0.6c0.1-0.1,0.2-0.1,0.3-0.2c0.4-0.2,0.8-0.3,1.1-0.7
					c0.1-0.1,0.2-0.1,0.3-0.2c0.8-0.3,1.5-0.9,2.2-1.3c0.1-0.1,0.2-0.1,0.3-0.2c0.4-0.2,0.8-0.3,1.1-0.7c0.2-0.2,0.5-0.2,0.7-0.4
					c0.3-0.3,0.7-0.5,1.1-0.6c0.6-0.2,1.1-0.6,1.6-0.9c0.5-0.6,1.4-0.7,1.9-1.2c0.4,0,0.7-0.4,0.9-0.6c0.3-0.3,0.8-0.4,1.1-0.6
					c0.4-0.2,0.7-0.5,1.1-0.6c0.8-0.4,1.6-0.9,2.4-1.4c0.8-0.5,1.6-0.9,2.5-1.3c0.3-0.3,0.7-0.4,1-0.6c0.3-0.2,0.6-0.4,1-0.6
					c0.1-0.1,0.2-0.2,0.4-0.3c0.9-0.4,1.7-1,2.6-1.5c0.5-0.3,1-0.6,1.5-0.8c0.1-0.1,0.2-0.1,0.3-0.2c0.1-0.1,0.3-0.2,0.5-0.3
					c0.2,0,0.4-0.2,0.6-0.3c0.4-0.4,1-0.7,1.5-1c0.2-0.1,0.5-0.3,0.8-0.3c0.3-0.1,0.5-0.3,0.9-0.4c0.2,0,0.5,0,0.8,0
					c0.1,0,0.2,0,0.2,0c0.3,0.2,0.6,0.1,1,0.2c0.5,0.2,0.9,0.5,1.2,0.9c0.2,0.3,0.5,0.5,0.7,0.7c0,0,0.1,0,0.1,0
					c0.1,0.5,0.5,0.8,0.6,1.3c0,0.1,0,0.1,0,0.2c0.5,0.5,0.8,1,1.1,1.5c0.3,0.5,0.6,1,0.9,1.5c0.2,0.6,0.6,1,0.9,1.6
					c0.3,0.5,0.6,1.1,0.9,1.6c0.1,0.1,0.1,0.2,0.2,0.3c0.5,0.4,0.7,0.9,1,1.5c0.2,0.4,0.6,0.7,0.6,1.2c0.4,0.3,0.6,0.8,0.8,1.2
					c0.2,0.4,0.6,0.8,0.8,1.2c0,0.1,0,0.2,0.1,0.3c0.4,0.3,0.5,0.8,0.7,1.2c0.1,0.3,0.2,0.6,0.4,0.9c0.2,0.3,0.2,0.6,0.1,1
					c-0.1,0.4-0.3,0.8-0.2,1.2c0,0.3-0.2,0.5-0.3,0.7c-0.1,0.2-0.3,0.4-0.3,0.6c0,0.1-0.1,0.1-0.1,0.1c-0.1,0.2-0.4,0.2-0.5,0.4
					c-0.1,0.2-0.3,0.3-0.5,0.4c-0.2,0.1-0.4,0.2-0.6,0.4c-1,0.6-2,1-2.9,1.7c0,0-0.1,0-0.2,0c-0.5,0.2-1,0.6-1.5,0.9
					c-0.2,0.1-0.5,0.3-0.7,0.4c-0.3,0.2-0.6,0.3-0.8,0.5c-0.1,0.1-0.3,0.3-0.5,0.3c-0.3,0-0.4,0.2-0.6,0.4c-0.1,0.1-0.1,0.1-0.2,0.2
					c-0.6,0.3-1.2,0.6-1.7,1.1c-0.1,0.1-0.3,0.2-0.4,0.2c-0.2,0.1-0.5,0.2-0.7,0.4c-0.3,0.2-0.6,0.4-0.9,0.5
					c-0.4,0.2-0.8,0.5-1.2,0.7c-0.7,0.4-1.5,0.8-2.1,1.2c-0.7,0.5-1.4,0.8-2.1,1.3c-0.7,0.4-1.4,0.9-2.2,1.2c-0.1,0-0.2,0.2-0.3,0.2
					c-0.4,0-0.4,0.6-0.8,0.5c-0.3,0.2-0.5,0.4-0.8,0.5c-0.3,0.2-0.6,0.3-0.9,0.5c-0.3,0.1-0.5,0.4-0.8,0.4c-0.3,0.4-0.9,0.5-1.3,0.7
					c-0.4,0.2-0.8,0.5-1.3,0.7c-0.5,0.6-1.3,0.8-1.9,1.2c0,0-0.1,0-0.2,0c-0.5,0.5-1.1,0.7-1.7,1.1c-0.6,0.4-1.2,0.6-1.8,0.9
					c-0.2,0.1-0.3,0.2-0.5,0.3c-0.3,0.3-0.7,0.4-1.1,0.5c-0.2,0-0.4,0.1-0.6,0.2c-0.5,0.3-0.7,0.3-1.3,0.2c-0.3-0.1-0.6,0-0.8,0
					c-0.2,0-0.4,0-0.6,0c-0.2-0.1-0.5-0.1-0.6-0.3c-0.1-0.2-0.3-0.2-0.5-0.4c0-0.2-0.2-0.4-0.3-0.4c-0.3-0.1-0.3-0.3-0.4-0.4
					c-0.2-0.4-0.5-0.7-0.5-1.2c0-0.2-0.3-0.2-0.2-0.4c-0.5-0.6-0.8-1.3-1.2-2c-0.1-0.2-0.4-0.3-0.3-0.6c-0.2-0.1-0.3-0.3-0.4-0.4
					c-0.1-0.2-0.1-0.6-0.5-0.6c-0.1-0.2-0.2-0.4-0.2-0.6c0-0.4-0.3-0.7-0.4-1c-0.1-0.2-0.2-0.4-0.3-0.6c-0.2-0.5-0.6-1-0.9-1.4
					c-0.2-0.4-0.4-0.7-0.6-1.1c-0.2-0.4-0.4-0.8-0.7-1.2C8.3,36.8,8.1,36.6,8.2,36.2z M27.2,42.5c0.1-0.1,0.3-0.3,0.4-0.4
					c0.2-0.1,0.4-0.2,0.6-0.3c0.2-0.1,0.4-0.2,0.6-0.4c0.4-0.3,0.9-0.5,1.3-0.8c0.1-0.1,0.3,0,0.4-0.1c0.4-0.3,0.8-0.6,1.3-0.8
					c0.1,0,0.1-0.1,0.1-0.1c0.2-0.3,0.5-0.5,0.8-0.6c0.4-0.1,0.6-0.4,0.9-0.5c0,0,0,0,0.1,0c0.3-0.2,0.7-0.4,1-0.6
					c0.4-0.2,0.8-0.5,1.2-0.8c0.4-0.2,0.8-0.3,1.1-0.6c0.2-0.2,0.4-0.3,0.7-0.4c0.1,0,0.3-0.1,0.4-0.2c0.1-0.2,0.3-0.2,0.5-0.3
					c0.4-0.2,0.8-0.4,1.2-0.6c0.9-0.5,1.8-1.2,2.8-1.7c0.3-0.4,0.9-0.4,1.2-0.8c0.4-0.3,0.9-0.5,1.3-0.8c0.4-0.3,0.9-0.6,1.4-0.8
					c0.2-0.1,0.4-0.2,0.5-0.4c-0.2-0.4-0.4-0.8-0.7-1.1c-0.2-0.2-0.4-0.4-0.3-0.7c-0.4-0.3-0.6-0.7-0.8-1.2c0-0.1-0.1-0.2-0.1-0.3
					c-0.1-0.3-0.4-0.4-0.5-0.6c-0.3-0.6-0.6-1.2-1-1.7c0-0.1,0-0.2,0-0.2c-0.2-0.2-0.3-0.3-0.4-0.4c-0.2-0.5-0.4-1-0.7-1.4
					c-0.3-0.4-0.6-0.9-0.9-1.3c-0.3-0.4-0.4-0.8-0.7-1.2c-0.2-0.3-0.4-0.6-0.5-1c-0.1-0.2-0.2-0.5-0.4-0.7c-0.2-0.3-0.4-0.6-0.4-0.9
					c-0.1-0.1-0.2-0.3-0.5-0.3c0.1-0.4-0.5-0.6-0.3-1c-0.4-0.2-0.4-0.6-0.7-0.9c-0.1-0.1-0.1-0.3-0.2-0.5c0-0.3-0.2-0.3-0.4-0.4
					c0-0.2-0.1-0.5-0.2-0.5c-0.3-0.1-0.3-0.4-0.5-0.6c-0.3,0-0.6,0.1-0.9,0.3c-0.3,0.2-0.6,0.4-0.9,0.5c-0.3,0.2-0.6,0.4-1,0.6
					c-0.5,0.3-1,0.6-1.5,0.8c-0.1,0-0.2,0.1-0.3,0.2c-0.1,0.2-0.3,0.3-0.5,0.4c-0.3,0.2-0.6,0.3-0.9,0.5c-0.2,0.1-0.3,0.4-0.6,0.3
					c-0.4,0.2-0.8,0.4-1.2,0.7c-0.2,0.2-0.4,0.3-0.7,0.4c-0.5,0.2-0.9,0.3-1.2,0.7c0,0.1-0.1,0-0.2,0.1c-0.4,0.4-1,0.5-1.4,0.8
					c-0.3,0.2-0.6,0.3-0.9,0.5c-0.1,0.1-0.3,0-0.4,0.2c-0.3,0.3-0.7,0.3-1,0.6c0,0-0.1,0-0.2,0c-0.3,0.3-0.7,0.5-1.1,0.7
					c-0.5,0.3-1,0.6-1.6,0.8c-0.2,0.3-0.5,0.3-0.7,0.5c-0.5,0.4-1.1,0.6-1.6,1c-0.1,0.1-0.3,0-0.3,0c0,0.3-0.3,0.2-0.4,0.3
					c-0.2,0.1-0.3,0.2-0.5,0.3c-0.6,0.3-1.3,0.6-1.8,1.1c-0.1,0.1-0.2,0.1-0.3,0.1c-0.4,0.1-0.8,0.3-1.1,0.6c-0.5,0.4-1.1,0.7-1.7,1
					C12,28,11.7,28,11.5,28.2c-0.2,0.1-0.4,0.2-0.6,0.4c-0.3,0.2-0.7,0.3-0.9,0.6c-0.2,0.3-0.5,0.5-0.8,0.6
					c-0.2,0.1-0.4,0.3-0.6,0.5c-0.1,0.3,0.1,0.6,0.1,0.9c0,0.3-0.1,0.6,0,0.9c0.1,0.2,0,0.6,0.4,0.6c0.1,0,0.1,0.1,0.1,0.2
					c0.2,0.3,0.2,0.6,0.2,0.8c0.2,0.2,0.4,0.4,0.5,0.5c0.2,0.5,0.3,0.9,0.6,1.3c0.2,0.3,0.5,0.5,0.6,0.8c0.1,0.3,0.3,0.6,0.5,0.9
					c0.2,0.2,0.3,0.5,0.4,0.7c0.1,0.4,0.3,0.8,0.5,1.2c0.2,0.4,0.4,0.8,0.6,1.1c0.3,0.3,0.4,0.8,0.7,1c0,0.1,0,0.2,0.1,0.3
					c0.1,0.3,0.3,0.4,0.4,0.7c0.1,0.2,0.3,0.4,0.4,0.6c0.1,0.2,0.2,0.5,0.3,0.7c0,0.1,0.1,0.1,0.2,0.2c0.2,0.2,0.3,0.5,0.4,0.7
					c0.2,0.6,0.4,1.1,0.8,1.6c0.4,0.4,0.7,0.8,1.2,1.1c0.3,0,0.5,0,0.8,0c0.1,0,0.2,0,0.3-0.1c0.6-0.2,1.2-0.4,1.7-0.9
					c0.1-0.1,0.2-0.1,0.3-0.2c0.5-0.2,1-0.6,1.5-0.9c0.3-0.2,0.5-0.4,0.8-0.5c0.4-0.1,0.7-0.3,1-0.5c0.5-0.4,1.1-0.7,1.6-0.9
					c0.4-0.2,0.9-0.4,1.2-0.8C27,42.5,27.1,42.5,27.2,42.5z M50.5,24.3c-0.1-0.2-0.3-0.3-0.4-0.5c-0.1-0.2-0.2-0.4-0.3-0.6
					c-0.2-0.4-0.3-0.7-0.6-1c-0.3-0.3-0.4-0.6-0.6-1c-0.5-0.8-0.9-1.7-1.4-2.5c-0.3-0.4-0.6-0.9-0.8-1.4c-0.3-0.6-0.7-1.1-1-1.7
					c-0.2-0.4-0.4-0.8-0.7-1.2c-0.3-0.5-0.5-1-0.8-1.5c-0.2-0.4-0.4-0.8-0.8-1.1c0-0.1,0-0.2,0-0.3c-0.3,0.1-0.4-0.2-0.4-0.3
					c-0.1-0.2-0.2-0.3-0.4-0.4c-0.1-0.1-0.2-0.1-0.3-0.1c-0.5,0.1-0.9,0.4-1.4,0.6c-0.4,0.2-0.8,0.5-1.2,0.8
					c0.2,0.6,0.5,1.1,0.8,1.8c0.1,0.1,0.3,0.2,0.4,0.5c0.1,0.2,0.2,0.3,0.2,0.4c0,0.2,0.3,0.2,0.2,0.4c-0.1,0.3,0.2,0.2,0.3,0.4
					c0.1,0.3,0.4,0.6,0.5,0.9c0.1,0.3,0.2,0.5,0.4,0.7c0.1,0.1,0.2,0.2,0.2,0.2c0,0.2,0.2,0.3,0.3,0.5c0.1,0.1,0.2,0.1,0.2,0.3
					c0.1,0.4,0.5,0.6,0.5,1c0.4,0.6,0.7,1.2,1.1,1.8c0.2,0.3,0.3,0.7,0.5,1c0.2,0.5,0.7,0.8,0.9,1.3c0.1,0.1,0.2,0.3,0.2,0.5
					c0.3,0,0.2,0.3,0.3,0.4c0.3,0.4,0.6,0.8,0.7,1.3c0,0.1,0,0.2,0.1,0.3c0.5,0.5,0.8,1.2,1.2,1.8c0,0.1,0.1,0.2,0.2,0.2
					c0.2,0.2,0.3,0.4,0.4,0.7c0.1,0.4,0.3,0.7,0.5,0.9c0.7-0.2,1.2-0.7,1.8-1c0.4-0.2,0.5-0.6,0.6-1c0.1-0.4-0.2-0.8-0.1-1.2
					c-0.3-0.3-0.4-0.6-0.5-0.9C50.7,25,50.6,24.6,50.5,24.3z" />
      </g>
    </g>
      <g id="ADMIT_x0D_ONE">
      <g>
        <path style={styles.st3} d="M16.7,33.9L14.9,35l0.2,1L13.2,37l-1.2-6.7l2-1.2l5.2,4.3l-1.8,1.1L16.7,33.9z M15.5,32.9l-1.4-1.2l0.4,1.8
					L15.5,32.9z" />
        <path style={styles.st3} d="M20.5,25.9c0.6,0,1.1,0.1,1.6,0.4c0.5,0.3,0.9,0.7,1.2,1.2c0.3,0.5,0.5,1.1,0.5,1.6c0,0.6-0.1,1.1-0.4,1.6
					C23,31.2,22.5,31.6,22,32l-2.3,1.3l-3.2-5.5l2.3-1.3C19.3,26.1,19.9,25.9,20.5,25.9z M21.6,29.7c0.1-0.3,0-0.7-0.2-1.1
					s-0.5-0.6-0.9-0.7c-0.4-0.1-0.7,0-1.1,0.2l-0.4,0.2l1.4,2.5l0.4-0.2C21.3,30.3,21.5,30,21.6,29.7z" />
        <path style={styles.st3} d="M28.9,20.6l3.2,5.5l-1.7,1l-1.6-2.7l0.7,3.2L28,28.5l-2.4-2.3l1.6,2.7l-1.7,1l-3.2-5.5l2.1-1.2l3.1,2.6
					l-0.7-4L28.9,20.6z" />
        <path style={styles.st3} d="M31.4,19.1l3.2,5.5l-1.7,1l-3.2-5.5L31.4,19.1z" />
        <path style={styles.st3} d="M36.5,16.2l0.8,1.4l-1.5,0.8l2.4,4.1l-1.7,1l-2.4-4.1l-1.4,0.8l-0.8-1.4L36.5,16.2z" />
        <path style={styles.st3} d="M24.2,40.6c-0.6,0-1.1-0.1-1.6-0.4c-0.5-0.3-0.9-0.7-1.2-1.2c-0.3-0.5-0.5-1.1-0.5-1.7
					c0-0.6,0.2-1.1,0.4-1.6c0.3-0.5,0.7-0.9,1.2-1.2c0.5-0.3,1.1-0.5,1.6-0.5c0.6,0,1.1,0.1,1.6,0.4c0.5,0.3,0.9,0.7,1.2,1.2
					s0.5,1.1,0.5,1.7c0,0.6-0.1,1.1-0.4,1.6c-0.3,0.5-0.7,0.9-1.2,1.2C25.3,40.5,24.8,40.6,24.2,40.6z M25.5,37.8
					c0.1-0.3,0-0.7-0.2-1.1c-0.2-0.4-0.5-0.6-0.8-0.7c-0.3-0.1-0.6-0.1-1,0.1c-0.3,0.2-0.6,0.5-0.6,0.8c-0.1,0.3,0,0.7,0.2,1.1
					c0.2,0.4,0.5,0.6,0.8,0.7c0.3,0.1,0.6,0.1,1-0.1C25.3,38.4,25.5,38.1,25.5,37.8z" />
        <path style={styles.st3} d="M34.6,35.1l-1.7,1l-3.4-1.7l1.6,2.8l-1.7,1l-3.2-5.5l1.7-1l3.5,1.8l-1.6-2.8l1.7-1L34.6,35.1z" />
        <path style={styles.st3} d="M34.7,29.5l0.4,0.7l1.7-1l0.8,1.3l-1.7,1l0.5,0.8l1.9-1.1l0.8,1.4l-3.7,2.1l-3.2-5.5l3.7-2.1l0.8,1.4
					L34.7,29.5z" />
      </g>
    </g>
</svg>
  )
}
