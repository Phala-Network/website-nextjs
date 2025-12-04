import FinalCTA from '@/components/final-cta'

export default function SuccessStoriesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen mt-16">
      {children}

      <FinalCTA />
    </div>
  )
}
