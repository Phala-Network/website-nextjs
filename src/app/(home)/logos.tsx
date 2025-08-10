import { partnersData } from '@/app/partnerships/partners-data'

interface CompanyData {
  name: string
  logo: string
  href: string
}

const createCompanyData = (partnerNames: string[]): CompanyData[] =>
  partnerNames
    .map((name) => partnersData.find((p) => p.name === name))
    .filter((company): company is NonNullable<typeof company> =>
      Boolean(company),
    )
    .map((company) => ({
      name: company.name,
      logo: company.icon,
      href: company.url,
    }))

const logoRows = [
  {
    partners: ['Nvidia', 'OpenRouter', 'OODA', 'PublicAI'],
    gridCols: 'sm:grid-cols-4',
  },
  {
    partners: ['Near', 'Vana', 'Nethermind', 'ElizaOS', '0G'],
    gridCols: 'sm:grid-cols-5',
  },
]

const companyRows = logoRows.map((row) => ({
  ...row,
  companies: createCompanyData(row.partners),
}))

interface LogoRowProps {
  companies: CompanyData[]
  gridCols: 'string'
}

const LogoRow = ({ companies, gridCols }: LogoRowProps) => (
  <div
    className={`grid grid-cols-2 items-center justify-items-center gap-x-12 gap-y-8 max-md:w-full ${gridCols} md:gap-x-20`}
  >
    {companies.map((company) => (
      <a
        href={company.href}
        target="_blank"
        rel="noopener noreferrer"
        key={company.name}
      >
        {/** biome-ignore lint/performance/noImgElement: svg */}
        <img
          src={company.logo}
          alt={`${company.name} logo`}
          className="max-w-[140px] max-h-[50px] object-contain grayscale transition-opacity hover:opacity-90 opacity-50 block w-full h-full"
        />
      </a>
    ))}
  </div>
)

const Logos = () => {
  return (
    <section className="py-12 w-full">
      <div className="container space-y-10 flex flex-col items-center">
        <div className="text-center">
          <h2 className="mb-4 font-bold text-balance text-2xl md:text-3xl">
            Trusted by more than <span className="text-primary-400">5000+</span>{' '}
            users
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl font-medium">
            Trusted by industry leaders and developers worldwide.
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-8">
          {companyRows.map((row, index) => (
            <LogoRow
              // biome-ignore lint/suspicious/noArrayIndexKey: static key
              key={index}
              companies={row.companies}
              gridCols={row.gridCols}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Logos
