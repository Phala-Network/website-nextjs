import CreamContainer from '@/components/cream-container'
import FinalCTA from '@/components/final-cta'

export default function SuccessStoriesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen mt-16">
      {children}

      <CreamContainer variant="bottom" className="w-full">
        <FinalCTA />
      </CreamContainer>
    </div>
  )
}
