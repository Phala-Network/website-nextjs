import { cn } from '@/lib/utils'

interface LogoProps extends React.HTMLAttributes<HTMLAnchorElement> {
  url: string
  className?: string
  children: React.ReactNode
}

interface LogoImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  className?: string
}

const Logo = ({ url, className, children, ...props }: LogoProps) => {
  return (
    <a href={url} className={cn('max-h-8', className)} {...props}>
      {children}
    </a>
  )
}

const LogoImageMobile = ({ src, alt, className, ...props }: LogoImageProps) => (
  <img
    src={src}
    alt={alt}
    className={cn('flex h-8 md:hidden', className)}
    {...props}
  />
)

const LogoImageDesktop = ({
  src,
  alt,
  className,
  ...props
}: LogoImageProps) => (
  <img
    src={src}
    alt={alt}
    className={cn('hidden h-8 md:flex', className)}
    {...props}
  />
)

export { Logo, LogoImageDesktop, LogoImageMobile }
