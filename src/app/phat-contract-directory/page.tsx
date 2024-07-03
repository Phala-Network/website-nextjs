import { cn } from '@/lib/utils'

import { proposals, blueprints, type Proposal, type Blueprint } from './data'

function PageHeading() {
  return (
    <header
      className={cn(
        "safe-viewport",
        "border border-solid border-black-900 rounded-md py-10 lg:py-32 !px-10 mt-32",
        "relative",
        "bg-phat-400 text-white",
      )}
    >
      <div
        className="absolute inset-0 h-full w-full opacity-50 rounded-md"
        style={{
          backgroundImage: 'radial-gradient(rgba(50, 84, 34, 0.5) 1.5px, rgba(111, 183, 78, 0.5) 1.5px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="relative z-10">
        <h1
          className={cn(
            "text-2xl lg:text-4xl font-black",
          )}
        >
          Phat Contract Directory
        </h1>
        <p
          className={cn(
            "text-lg lg:text-2xl font-normal",
          )}
        >
          Discover What Phat Contract can do and inspire your next project.
        </p>
      </div>
    </header>
  )
}

function ProposalCard({ proposal }: { proposal: Proposal }) {
  return (
    <div
      className={cn(
        "relative bg-whiteAlpha-200 solid border-whiteAlpha-50 rounded",
        "text-white",
      )}
    >
      <div className={cn("flex flex-col gap-4", "h-full p-4 lg:p-6")}>
        <div className="flex flex-row gap-2.5">
        {(proposal.integrations?? []).map((integration, idx) => (
          <div
            key={idx}
            className={cn(
              "border-[0.5px] border-solid border-whiteAlpha-50 rounded-full w-8 h-8 lg:w-auto aspect-square overflow-hidden"
            )}
          >
            <img src={integration.icon} alt={integration.name} className="w-full h-full" />
          </div>
        ))}
        </div>
        <h4 className="text-20 lg:text-24 font-bold">
          {proposal.title}
        </h4>
        <div className="prose prose-invert">
          <p>{proposal.description}</p>
        </div>
      </div>
    </div>
  )
}


function BlueprintCard({
  name,
  description,
  coverImage,
  slug,
  tags,
  version,
}: Blueprint) {
  return (
    <div
      className={cn(
        'flex flex-col gap-2.5 min-w-[20rem] rounded overflow-hidden',
        'shadow-md',
        'bg-gradient-gray'
      )}
    >
      <div>
        <img
          src={coverImage}
          className={cn('w-full', 'border-b border-whiteAlpha-50')}
        />
      </div>
      <header
        className={cn(
          'flex flex-row justify-between px-5 pt-3 text-white text-lg font-semibold'
        )}
      >
        {name}
        <span className="text-xs font-mono align-bottom text-gray-400">
          v{version}
        </span>
      </header>
      <div className="flex flex-row gap-2.5 flex-wrap mx-5">
        {tags.map((tag) => (
          <span
            key={tag}
            className={cn(
              'inline-block px-2 py-0.5 rounded-xs text-xs font-medium',
              'bg-whiteAlpha-100 text-whiteAlpha-900'
            )}
          >
            {tag}
          </span>
        ))}
      </div>
      <main
        className={cn(
          'px-5 pt-1.5 pb-3.5',
          'flex flex-col gap-4 justify-between flex-1'
        )}
      >
        <p className="text-whiteAlpha-800 font-light">{description}</p>
        <div>
          <a
            className="btn btn-sm btn-phat font-medium px-8 rounded-xs"
            href={cn(`https://dashboard.phala.network/projects/new/clone?template=${slug}`)}
            target="_blank"
          >
            Take a tour
          </a>
        </div>
      </main>
    </div>
  )
}

function Proposals() {
  return (
    <section>
      <div
        className={cn(
          "safe-viewport",
          "grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 lg:gap-6",
          "border border-solid border-whiteAlpha-200 rounded p-8 !px-8",
          "bg-whiteAlpha-50",
        )}
      >
        {proposals.map((proposal, index) => (
          <ProposalCard proposal={proposal} key={index} />
        ))}
      </div>
    </section>
  )
}

function Blueprints() {
  return (
    <section>
      <div
        className={cn(
          'safe-viewport',
          'grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 lg:gap-6',
          'border border-solid border-whiteAlpha-200 rounded p-8 !px-8',
          'bg-whiteAlpha-50'
        )}
      >
        {blueprints.filter(i => i.published).map((blueprint, index) => (
          <BlueprintCard {...blueprint} key={index} />
        ))}
      </div>
    </section>
  )
}

export const metadata = {
  title: 'Phat Contract Directory | Phala Network',
  alternates: {
    canonical: "https://phala.network/phat-contract-directory",
  }
}

export default function PhatContractDirectoryPage() {
  return (
    <div
      className={cn(
        "flex flex-col gap-8 lg:gap-12",
        "bg-gray-900",
      )}
    >
      <PageHeading />
      <Proposals />
      <Blueprints />
    </div>
  )
}

