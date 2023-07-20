import * as react from 'react'
import { SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 536 149"
    fill="none"
    {...props}
  >
    <circle cx={526} cy={9.5} r={9} fill="#171717" stroke="#171717" />
    <path
      stroke="#171717"
      strokeLinecap="round"
      strokeWidth={4}
      d="M83.5 114V92c0-17.673 14.327-32 32-32H494c17.673 0 32-14.327 32-32V10.5"
    />
    <path
      fill="#171717"
      d="M57.497 124H.5v24.5H162V124h-52.5c-13.255 0-24-10.745-24-24v-6h-4.003v6c0 13.255-10.745 24-24 24Z"
    />
  </svg>
)
export default SvgComponent
