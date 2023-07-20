import * as React from 'react'
import { SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => {
  const id = Math.random().toString(32).slice(2)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 164 164"
      fill="none"
      {...props}
    >
      <g filter={`url(#a-${id})`}>
        <circle cx={82} cy={72} r={70} fill="#3A3A3F" fillOpacity={0.7} />
      </g>
      <g filter={`url(#b-${id})`}>
        <circle cx={82} cy={72} r={54} fill="#fff" />
      </g>
      <path
        fill="#343434"
        d="m81.992 34-.502 1.709V85.3l.502.502 22.993-13.607L81.992 34Z"
      />
      <path fill="#8C8C8C" d="M81.992 34 59 72.195l22.992 13.607V34Z" />
      <path
        fill="#3C3C3B"
        d="m81.994 90.162-.283.345v17.665l.283.828L105 76.561l-23.006 13.6Z"
      />
      <path fill="#8C8C8C" d="M81.992 108.999V90.161L59 76.56l22.992 32.438Z" />
      <path
        fill="#141414"
        d="m81.992 85.802 22.993-13.607-22.993-10.463v24.07Z"
      />
      <path fill="#393939" d="m59 72.195 22.992 13.607v-24.07L59 72.195Z" />
      <defs>
        <filter
          id={`a-${id}`}
          width={164}
          height={164}
          x={0}
          y={0}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            in="SourceAlpha"
            radius={2}
            result="effect1_dropShadow_1338_6894"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={3} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1338_6894"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            in="SourceAlpha"
            radius={3}
            result="effect2_dropShadow_1338_6894"
          />
          <feOffset dy={10} />
          <feGaussianBlur stdDeviation={7.5} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend
            in2="effect1_dropShadow_1338_6894"
            result="effect2_dropShadow_1338_6894"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_1338_6894"
            result="shape"
          />
        </filter>
        <filter
          id={`b-${id}`}
          width={132}
          height={132}
          x={16}
          y={16}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            in="SourceAlpha"
            radius={2}
            result="effect1_dropShadow_1338_6894"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={3} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1338_6894"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            in="SourceAlpha"
            radius={3}
            result="effect2_dropShadow_1338_6894"
          />
          <feOffset dy={10} />
          <feGaussianBlur stdDeviation={7.5} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend
            in2="effect1_dropShadow_1338_6894"
            result="effect2_dropShadow_1338_6894"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_1338_6894"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
export default SvgComponent
