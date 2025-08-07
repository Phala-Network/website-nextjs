import { Download, ExternalLink } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const Hero192 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center gap-6 text-center">
          <h2 className="text-2xl md:text-4xl font-semibold">Security Audit Report</h2>
          <p className="text-center text-lg text-muted-foreground">
            Independent security audit by zkSecurity team. Review our comprehensive security analysis and recommendations.
          </p>
        </div>
        <Card className="mx-auto max-w-4xl p-6">
          <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">📋 zkSecurity Team Audit</h3>
              <p className="text-muted-foreground text-sm">
                Comprehensive security analysis and vulnerability assessment
              </p>
            </div>
            <div className="flex gap-2">
              <Button size="sm" asChild>
                <a href="/res/phala-dstack.pdf" download>
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="/res/phala-dstack.pdf" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Full Screen
                </a>
              </Button>
            </div>
          </div>
          <div className="border border-border rounded-lg overflow-hidden bg-muted min-h-[600px]">
            <iframe 
              src="/res/phala-dstack.pdf" 
              className="w-full h-[600px] border-none"
              title="Security Audit Report"
            />
          </div>
          <div className="mt-4 p-4 bg-muted rounded-lg">
            <p className="text-sm">
              <strong>✅ Audit Status:</strong> Completed by zkSecurity team. All critical and high-severity issues have been addressed. Regular security reviews ensure ongoing protection.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}

export { Hero192 }
