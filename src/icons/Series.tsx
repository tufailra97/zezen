import React from 'react';
import { IconProps } from 'interfaces';

export default ({ width, height, color }: IconProps): React.ReactElement => {
  return (
    <svg
      version='1.1'
      id='Layer_1'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      x='0px'
      y='0px'
      viewBox='0 0 512 512'
      xmlSpace='preserve'
      width={width}
      height={height}
      fill={color}
    >
      <style>enable-background:new 0 0 512 512;</style>
      <g>
        <path
          d='M422.2,24.5H59.4C26.7,24.5,0,51.1,0,83.9V314c0,32.7,26.6,59.4,59.4,59.4h167.9v56.7h-83.7c-7.5,0-13.5,6-13.5,13.5
		s6,13.5,13.5,13.5H338c7.5,0,13.5-6,13.5-13.5s-6-13.5-13.5-13.5h-83.7v-56.7h167.9c32.7,0,59.4-26.6,59.4-59.4V83.9
		C481.6,51.1,455,24.5,422.2,24.5z M59.4,51.5h362.9c17.8,0,32.4,14.5,32.4,32.4v192.3H27V83.9C27,66,41.5,51.5,59.4,51.5z
		 M422.2,346.4H59.4C41.6,346.4,27,331.9,27,314v-10.8h427.6V314C454.6,331.8,440.1,346.4,422.2,346.4z'
        />
      </g>
    </svg>
  );
};
