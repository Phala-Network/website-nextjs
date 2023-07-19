import * as React from 'react'
import { SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => {
  const id = Math.random().toString(32).slice(2)
  return (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 58"
    fill="none"
    {...props}
  >
    <g clipPath={`url(#a-${id})`}>
      <path
        fill="#6FB74E"
        d="M64 20.733h-2.214v15.655h2.215V20.733ZM7.949 26.877l-6.375-6.374L0 22.077l6.374 6.375L0 34.813l1.574 1.575 6.375-6.362 1.574-1.574-1.574-1.575Z"
      />
      <path
        fill="#fff"
        d="M17.318 20.503h-7.13v2.291h1.639v11.315h-1.639v2.279h6.26v-2.279h-1.856v-3.456h2.726a5.075 5.075 0 0 0 0-10.15Zm-.217 7.86h-2.51v-5.569h2.51a2.784 2.784 0 0 1 0 5.568Z"
      />
      <path
        fill="#fff"
        d="M33.037 30.308a4.556 4.556 0 0 0-4.544-4.557 4.48 4.48 0 0 0-1.984.46v-5.708h-4.045v2.253h1.472v11.417h-1.472v2.215h5.53v-2.215h-1.485v-3.865a1.984 1.984 0 1 1 3.968 0v3.865h-1.485v2.215h5.53v-2.215h-1.485v-3.865ZM51.29 20.503h-2.47v5.517h-6.093v.934a5.108 5.108 0 0 0-2.957-.934 5.184 5.184 0 1 0 2.957 9.433v.935h3.866v-2.215h-1.575v-5.926h3.79v4.94a3.2 3.2 0 0 0 3.2 3.2h3.11v-2.214h-2.893a.945.945 0 0 1-.947-.947v-4.98h3.84v-2.213h-3.84v-5.53h.013Zm-11.52 13.67a2.957 2.957 0 1 1 0-5.913 2.957 2.957 0 0 1 0 5.913Z"
      />
      <path
        fill="#6FB74E"
        d="M59.56 26.032h-2.215v2.215h2.214v-2.215ZM59.56 34.173h-2.215v2.215h2.214v-2.215Z"
      />
    </g>
    <defs>
      <clipPath id={`a-${id}`}>
        <path fill="#fff" d="M0 20.503h64.001v15.885H0z" />
      </clipPath>
    </defs>
  </svg>
)}
export default SvgComponent

