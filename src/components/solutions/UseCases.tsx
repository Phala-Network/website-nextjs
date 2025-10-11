import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

interface UseCase {
  title: string
  description: string
  benefit?: string
}

interface UseCasesProps {
  useCases: UseCase[]
  title?: string
}

export function UseCases({ useCases, title = 'Use Cases' }: UseCasesProps) {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-12 text-center">
          {title}
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {useCases.map((useCase, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{useCase.title}</CardTitle>
                {useCase.benefit && (
                  <CardDescription className="text-primary font-medium">
                    {useCase.benefit}
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
