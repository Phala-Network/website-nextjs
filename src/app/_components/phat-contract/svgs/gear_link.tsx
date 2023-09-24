import * as React from 'react'
import { SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 1284 309"
    fill="none"
    {...props}
  >
    <g clipPath="url(#clip0_2486_12597)">
      <path
        d="M736.598 209.483C706.33 261.908 639.295 279.87 586.87 249.603C534.446 219.335 516.484 152.299 546.751 99.8738C577.018 47.4486 644.054 29.4865 696.478 59.7542C748.903 90.0218 766.865 157.058 736.598 209.483Z"
        stroke="#CDFA50"
        strokeWidth={6}
      />
    </g>
    <g clipPath="url(#clip1_2486_12597)">
      <path
        d="M546.751 99.8703C516.484 152.295 534.446 219.331 586.87 249.599C639.295 279.867 706.33 261.904 736.598 209.479C766.865 157.054 748.903 90.0183 696.478 59.7506C644.054 29.4829 577.018 47.4451 546.751 99.8703Z"
        stroke="#7F52FA"
        strokeWidth={6}
      />
    </g>
    <path
      transform="translate(1,0)"
      d="M0 99C0 83.536 12.536 71 28 71H400C415.464 71 428 83.536 428 99V211C428 226.464 415.464 239 400 239H28C12.536 239 0 226.464 0 211V99Z"
      fill="#CDFA50"
    />
    <path
      d="M532 152H452C438.745 152 428 141.255 428 128V182C428 168.745 438.745 158 452 158H532V152Z"
      fill="#CDFA50"
    />
    <path
      transform="translate(-1,0)"
      d="M856 99C856 83.536 868.536 71 884 71H1256C1271.46 71 1284 83.536 1284 99V211C1284 226.464 1271.46 239 1256 239H884C868.536 239 856 226.464 856 211V99Z"
      fill="#7F52FA"
    />
    <path
      d="M752 152H832C845.255 152 856 141.255 856 128V182C856 168.745 845.255 158 832 158H752L752 152Z"
      fill="#7F52FA"
    />
    <defs>
      <clipPath id="clip0_2486_12597">
        <rect
          width={108.936}
          height={225.218}
          fill="white"
          transform="matrix(0.866023 0.500003 -0.499997 0.866027 600.457 0.851562)"
        />
      </clipPath>
      <clipPath id="clip1_2486_12597">
        <rect
          width={108.936}
          height={225.218}
          fill="white"
          transform="matrix(-0.866023 -0.500003 -0.499997 0.866027 795.5 113.457)"
        />
      </clipPath>
    </defs>
  </svg>
)

export default SvgComponent
