export default function DotBackground({ dotColor, bgColor }: { dotColor: string, bgColor: string }) {
  return (
    <div
      className="absolute inset-0 -z-10 h-full w-full cursor-none pointer-events-none"
      style={{
        backgroundColor: bgColor,
        backgroundImage: `radial-gradient(${dotColor} 2px, ${bgColor} 2px)`,
        backgroundSize: '56px 56px',
      }}
    />
  )
}

