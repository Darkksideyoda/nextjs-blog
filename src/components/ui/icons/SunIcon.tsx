import * as React from 'react';

interface SunIconProps {
  className?: string;
}

const SunIcon = (props: SunIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} {...props}>
    <g>
      <path
        d="M11 11h26v26H11z"
        style={{
          stroke: 'none',
          strokeWidth: 1,
          strokeDasharray: 'none',
          strokeLinecap: 'butt',
          strokeDashoffset: 0,
          strokeLinejoin: 'miter',
          strokeMiterlimit: 4,
          fill: '#ff9800',
          fillRule: 'nonzero',
          opacity: 1
        }}
        transform="matrix(.58 0 0 .58 2.08 2.08)"
      />
      <path
        d="M11.272 11.272h25.456v25.456H11.272z"
        style={{
          stroke: 'none',
          strokeWidth: 1,
          strokeDasharray: 'none',
          strokeLinecap: 'butt',
          strokeDashoffset: 0,
          strokeLinejoin: 'miter',
          strokeMiterlimit: 4,
          fill: '#ff9800',
          fillRule: 'nonzero',
          opacity: 1
        }}
        transform="matrix(.41 -.41 .41 .41 -3.766 16)"
      />
      <path
        d="M13 24c0 6.077 4.923 11 11 11 6.076 0 11-4.923 11-11s-4.924-11-11-11c-6.077 0-11 4.923-11 11"
        style={{
          stroke: 'none',
          strokeWidth: 1,
          strokeDasharray: 'none',
          strokeLinecap: 'butt',
          strokeDashoffset: 0,
          strokeLinejoin: 'miter',
          strokeMiterlimit: 4,
          fill: '#ffeb3b',
          fillRule: 'nonzero',
          opacity: 1
        }}
        transform="matrix(.58 0 0 .58 2.08 2.08)"
      />
    </g>
  </svg>
);
export default SunIcon;
