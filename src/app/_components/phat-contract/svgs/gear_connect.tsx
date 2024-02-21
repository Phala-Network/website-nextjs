import * as React from 'react'
import { SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 428 428"
    fill="none"
    {...props}
  >
    <g clipPath="url(#clip0_4332_4383)">
      <path
        d="M308.598 268.483C278.33 320.908 211.295 338.87 158.87 308.603C106.446 278.335 88.4837 211.299 118.751 158.874C149.019 106.449 216.054 88.4865 268.478 118.754C320.903 149.022 338.865 216.058 308.598 268.483Z"
        stroke="#C4F142"
        strokeWidth={6}
      />
    </g>
    <g clipPath="url(#clip1_4332_4383)">
      <path
        d="M118.751 158.87C88.4839 211.295 106.446 278.331 158.871 308.599C211.295 338.867 278.331 320.904 308.598 268.479C338.865 216.054 320.903 149.018 268.479 118.751C216.054 88.4829 149.019 106.445 118.751 158.87Z"
        stroke="#7F52FA"
        strokeWidth={6}
      />
    </g>
    <defs>
      <clipPath id="clip0_4332_4383">
        <rect
          width={108.936}
          height={225.218}
          fill="white"
          transform="matrix(0.866023 0.500003 -0.499997 0.866027 172.457 59.8516)"
        />
      </clipPath>
      <clipPath id="clip1_4332_4383">
        <rect
          width={108.936}
          height={225.218}
          fill="white"
          transform="matrix(-0.866023 -0.500003 -0.499997 0.866027 367.5 172.457)"
        />
      </clipPath>
    </defs>
  </svg>
)

export default SvgComponent
