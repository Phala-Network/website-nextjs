import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const throttle = <T>(fn: (args: T) => void, delay: number) => {
  let timeoutId: number | null = null
  return (args: T) => {
    if (timeoutId) {
      return
    }
    fn(args)
    timeoutId = window.setTimeout(() => {
      timeoutId = null
    }, delay)
  }
}
