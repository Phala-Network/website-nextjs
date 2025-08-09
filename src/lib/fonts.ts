import { Inter, Montserrat } from 'next/font/google'

import { cn } from '@/lib/utils'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--display-family',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--text-family',
})

const fontVariables = cn(inter.variable, montserrat.variable)

export default fontVariables
