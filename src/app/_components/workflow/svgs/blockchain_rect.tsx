import * as React from 'react'
import { SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => {
  // Make sure the id is unique, even in the case of reusing components
  const id = Math.random().toString(32).slice(2)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 186 211"
      fill="none"
      {...props}
    >
      <g filter={`url(#a-${id})`}>
        <rect
          width={162}
          height={187}
          x={12}
          y={2}
          fill="#202022"
          fillOpacity={0.7}
          rx={12}
        />
      </g>
      <path
        fill="#fff"
        d="M61.94 155v-7h3.28c.84 0 1.48.167 1.92.5.44.327.66.767.66 1.32 0 .373-.087.693-.26.96-.173.26-.407.463-.7.61-.287.14-.6.21-.94.21l.18-.36c.393 0 .747.073 1.06.22.313.14.56.347.74.62.187.273.28.613.28 1.02 0 .6-.23 1.067-.69 1.4-.46.333-1.143.5-2.05.5h-3.48Zm1.3-1.02h2.1c.487 0 .86-.08 1.12-.24.26-.16.39-.417.39-.77 0-.347-.13-.6-.39-.76-.26-.167-.633-.25-1.12-.25h-2.2v-1.01h1.94c.453 0 .8-.08 1.04-.24.247-.16.37-.4.37-.72 0-.327-.123-.57-.37-.73-.24-.16-.587-.24-1.04-.24h-1.84v4.96Zm6.187 1.02v-7.42h1.25V155h-1.25Zm5.291.07a2.997 2.997 0 0 1-1.46-.35 2.693 2.693 0 0 1-1.01-.98 2.697 2.697 0 0 1-.37-1.41c0-.533.123-1.003.37-1.41a2.617 2.617 0 0 1 1.01-.97c.427-.233.913-.35 1.46-.35.553 0 1.043.117 1.47.35.433.233.77.553 1.01.96.247.407.37.88.37 1.42 0 .527-.123.997-.37 1.41-.24.413-.577.74-1.01.98-.427.233-.917.35-1.47.35Zm0-1.07c.307 0 .58-.067.82-.2s.427-.327.56-.58c.14-.253.21-.55.21-.89 0-.347-.07-.643-.21-.89a1.383 1.383 0 0 0-.56-.58c-.24-.133-.51-.2-.81-.2-.307 0-.58.067-.82.2-.233.133-.42.327-.56.58-.14.247-.21.543-.21.89 0 .34.07.637.21.89.14.253.327.447.56.58.24.133.51.2.81.2Zm6.495 1.07c-.56 0-1.06-.117-1.5-.35a2.671 2.671 0 0 1-1.02-.98 2.696 2.696 0 0 1-.37-1.41c0-.533.124-1.003.37-1.41a2.597 2.597 0 0 1 1.02-.97c.44-.233.94-.35 1.5-.35.52 0 .977.107 1.37.32.4.207.704.513.91.92l-.96.56a1.527 1.527 0 0 0-1.33-.74 1.72 1.72 0 0 0-.83.2c-.246.133-.44.327-.58.58-.14.247-.21.543-.21.89s.07.647.21.9c.14.247.334.437.58.57.247.133.524.2.83.2a1.527 1.527 0 0 0 1.33-.74l.96.56c-.206.4-.51.71-.91.93-.393.213-.85.32-1.37.32Zm4.332-1.26.03-1.57 2.79-2.58h1.5l-2.37 2.38-.66.55-1.29 1.22Zm-1.02 1.19v-7.42h1.25V155h-1.25Zm4.03 0-1.95-2.41.79-1 2.68 3.41h-1.52Zm5.688.1c-.534 0-1.03-.087-1.49-.26a3.72 3.72 0 0 1-1.19-.75 3.518 3.518 0 0 1-.78-1.15c-.187-.44-.28-.92-.28-1.44 0-.52.093-1 .28-1.44.186-.44.45-.82.79-1.14.34-.327.736-.577 1.19-.75.453-.18.95-.27 1.49-.27.573 0 1.096.1 1.57.3.473.193.873.483 1.2.87l-.84.79a2.48 2.48 0 0 0-.85-.61 2.471 2.471 0 0 0-1.02-.21c-.367 0-.704.06-1.01.18-.3.12-.564.29-.79.51-.22.22-.394.48-.52.78-.12.3-.18.63-.18.99s.06.69.18.99c.126.3.3.56.52.78.226.22.49.39.79.51.306.12.643.18 1.01.18.366 0 .706-.067 1.02-.2.313-.14.596-.35.85-.63l.84.8c-.327.38-.727.67-1.2.87-.474.2-1 .3-1.58.3Zm6.935-5.5c.427 0 .807.083 1.14.25.34.167.607.423.8.77.193.34.29.78.29 1.32V155h-1.25v-2.9c0-.473-.113-.827-.34-1.06-.22-.233-.53-.35-.93-.35-.293 0-.553.06-.78.18-.227.12-.403.3-.53.54-.12.233-.18.53-.18.89v2.7h-1.25v-7.42h1.25v3.52l-.27-.44c.187-.34.457-.6.81-.78a2.65 2.65 0 0 1 1.24-.28Zm7.106 5.4v-1.08l-.07-.23v-1.89c0-.367-.11-.65-.33-.85-.22-.207-.554-.31-1-.31-.3 0-.597.047-.89.14-.287.093-.53.223-.73.39l-.49-.91c.286-.22.626-.383 1.02-.49.4-.113.813-.17 1.24-.17.773 0 1.37.187 1.79.56.426.367.64.937.64 1.71V155h-1.18Zm-1.68.07c-.4 0-.75-.067-1.05-.2-.3-.14-.534-.33-.7-.57a1.492 1.492 0 0 1-.24-.83c0-.3.07-.57.21-.81.146-.24.383-.43.71-.57.326-.14.76-.21 1.3-.21h1.55v.83h-1.46c-.427 0-.714.07-.86.21a.646.646 0 0 0-.22.5c0 .227.09.407.27.54.18.133.43.2.75.2.306 0 .58-.07.82-.21a1.19 1.19 0 0 0 .53-.62l.21.75c-.12.313-.337.557-.65.73-.307.173-.697.26-1.17.26Zm4.464-.07v-5.34h1.25V155h-1.25Zm.63-6.22a.804.804 0 0 1-.58-.22.721.721 0 0 1-.22-.53.7.7 0 0 1 .22-.53.804.804 0 0 1 .58-.22c.233 0 .423.07.57.21.153.133.23.303.23.51 0 .22-.073.407-.22.56a.783.783 0 0 1-.58.22Zm5.291.82c.426 0 .806.083 1.14.25.34.167.606.423.8.77.193.34.29.78.29 1.32V155h-1.25v-2.9c0-.473-.114-.827-.34-1.06-.22-.233-.53-.35-.93-.35-.294 0-.554.06-.78.18-.227.12-.404.3-.53.54-.12.233-.18.53-.18.89v2.7h-1.25v-5.34h1.19v1.44l-.21-.44c.186-.34.456-.6.81-.78a2.65 2.65 0 0 1 1.24-.28Zm5.465 5.47c-.446 0-.876-.057-1.29-.17-.406-.12-.73-.263-.97-.43l.48-.95c.24.153.527.28.86.38.334.1.667.15 1 .15.394 0 .677-.053.85-.16.18-.107.27-.25.27-.43a.36.36 0 0 0-.18-.33c-.12-.08-.276-.14-.47-.18a9.802 9.802 0 0 0-.65-.11 9.434 9.434 0 0 1-.71-.13 2.724 2.724 0 0 1-.64-.25 1.377 1.377 0 0 1-.47-.45c-.12-.187-.18-.433-.18-.74 0-.34.097-.633.29-.88a1.81 1.81 0 0 1 .81-.58c.354-.14.77-.21 1.25-.21.36 0 .724.04 1.09.12.367.08.67.193.91.34l-.48.95a2.424 2.424 0 0 0-.77-.31 3.281 3.281 0 0 0-.76-.09c-.38 0-.663.057-.85.17-.18.113-.27.257-.27.43 0 .16.06.28.18.36.12.08.277.143.47.19.194.047.407.087.64.12.24.027.477.07.71.13.234.06.447.143.64.25.2.1.36.243.48.43s.18.43.18.73c0 .333-.1.623-.3.87-.193.247-.47.44-.83.58-.36.133-.79.2-1.29.2Z"
      />
      <g filter={`url(#b-${id})`}>
        <circle cx={93.001} cy={79.2} r={43.2} fill="#fff" />
      </g>
      <path
        fill="#343434"
        d="m92.994 48.8-.401 1.367V89.84l.401.402 18.394-10.886L92.994 48.8Z"
      />
      <path fill="#8C8C8C" d="M92.994 48.8 74.601 79.356l18.393 10.886V48.8Z" />
      <path
        fill="#3C3C3B"
        d="m92.996 93.73-.227.275v14.133l.227.662L111.4 82.85 92.996 93.73Z"
      />
      <path
        fill="#8C8C8C"
        d="M92.995 108.799v-15.07L74.6 82.849l18.394 25.95Z"
      />
      <path
        fill="#141414"
        d="m92.994 90.242 18.394-10.886-18.394-8.37v19.256Z"
      />
      <path
        fill="#393939"
        d="m74.6 79.356 18.394 10.886V70.986l-18.393 8.37Z"
      />
      <defs>
        <filter
          id={`a-${id}`}
          width={186}
          height={211}
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
            result="effect1_dropShadow_1338_12974"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={3} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1338_12974"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            in="SourceAlpha"
            radius={3}
            result="effect2_dropShadow_1338_12974"
          />
          <feOffset dy={10} />
          <feGaussianBlur stdDeviation={7.5} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend
            in2="effect1_dropShadow_1338_12974"
            result="effect2_dropShadow_1338_12974"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_1338_12974"
            result="shape"
          />
        </filter>
        <filter
          id={`b-${id}`}
          width={105.6}
          height={105.6}
          x={40.201}
          y={34.4}
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
            radius={1.6}
            result="effect1_dropShadow_1338_12974"
          />
          <feOffset dy={3.2} />
          <feGaussianBlur stdDeviation={2.4} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1338_12974"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            in="SourceAlpha"
            radius={2.4}
            result="effect2_dropShadow_1338_12974"
          />
          <feOffset dy={8} />
          <feGaussianBlur stdDeviation={6} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend
            in2="effect1_dropShadow_1338_12974"
            result="effect2_dropShadow_1338_12974"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_1338_12974"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
export default SvgComponent