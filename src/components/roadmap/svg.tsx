import * as React from 'react'
import { SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: React.ForwardedRef<SVGSVGElement>) => (
  <svg
    viewBox="0 0 1076 1080"
    fill="none"
    {...props}
    ref={ref}
  >
  </svg>
)

export default React.forwardRef(SvgComponent)