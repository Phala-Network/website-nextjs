import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
})

const fontVariables = montserrat.variable

export default fontVariables
