import { Inter, Montserrat } from 'next/font/google'

import { cn } from './utils'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const fontVariables = cn(inter.variable, montserrat.variable)

export default fontVariables
