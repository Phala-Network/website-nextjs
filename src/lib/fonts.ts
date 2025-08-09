import { Inter, Montserrat } from 'next/font/google'

import { cn } from '@/lib/utils'

const montserrat = Montserrat({
  subsets: ['latin'],
  // weight: ['600'],
  variable: '--display-family',
})

const inter = Inter({
  subsets: ['latin'],
  // weight: ['400'],
  variable: '--text-family',
})

const fontVariables = cn(inter.variable, montserrat.variable)

export default fontVariables
