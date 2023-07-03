import * as React from 'react';

interface AudioIconProps {
  className?: string;
}
const AudioIcon = (props: AudioIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <g>
      <path
        strokeLinecap="round"
        d="M10.25 5.792c.293.267.5.678.5 1.208 0 .53-.207.941-.5 1.208M11.712 3.34c.901.8 1.539 2.045 1.539 3.66 0 1.614-.638 2.86-1.54 3.66"
        style={{
          stroke: '#4147d5',
          strokeWidth: 1,
          strokeDasharray: 'none',
          strokeLinecap: 'round',
          strokeDashoffset: 0,
          strokeLinejoin: 'round',
          strokeMiterlimit: 4,
          fill: 'none',
          fillRule: 'nonzero',
          opacity: 1
        }}
        transform="matrix(1.43 0 0 1.43 1.99 1.99)"
      />
      <path
        strokeLinecap="round"
        d="M.897 5.457A9.168 9.168 0 0 0 .75 7c0 .52.063 1.059.147 1.543.162.93.864 1.706 1.8 1.84.23.032.5.06.817.081.756.049 1.439.472 1.846 1.11.16.25.328.495.502.727.784 1.041 2.005.44 2.058-.862C7.964 10.352 8 8.89 8 7c0-1.89-.036-3.352-.08-4.439C7.867 1.26 6.646.658 5.862 1.7c-.174.232-.343.476-.502.727a2.386 2.386 0 0 1-1.846 1.11c-.317.02-.587.049-.818.082-.935.133-1.637.908-1.799 1.839Z"
        style={{
          stroke: '#4147d5',
          strokeWidth: 1,
          strokeDasharray: 'none',
          strokeLinecap: 'round',
          strokeDashoffset: 0,
          strokeLinejoin: 'round',
          strokeMiterlimit: 4,
          fill: '#d7e0ff',
          fillRule: 'nonzero',
          opacity: 1
        }}
        transform="matrix(1.43 0 0 1.43 1.976 1.99)"
      />
    </g>
  </svg>
);
export default AudioIcon;
