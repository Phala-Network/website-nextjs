import PartnerCard from './partner-card'
import type { PartnerItem } from './partners-data'

interface PartnersGridProps {
  filteredItems: PartnerItem[]
}

export default function PartnersGrid({ filteredItems }: PartnersGridProps) {
  if (filteredItems.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 text-lg">
          No partners found for the selected tags.
        </p>
      </div>
    )
  }

  return (
    <>
      {/* Mobile view */}
      <div className="md:hidden">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {filteredItems.map((item, idx) => (
            <PartnerCard
              key={idx}
              title={item.name}
              url={item.url}
              description={item.description}
              src={item.icon}
              post={item.post}
              tags={item.tags}
            />
          ))}
        </div>
      </div>

      {/* Desktop view - Feature257 inspired layout */}
      <div className="hidden md:block">
        {/* Top 2 large cards */}
        {filteredItems.length > 0 && (
          <div className="pb-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {filteredItems.slice(0, 2).map((item, idx) => (
                <PartnerCard
                  key={idx}
                  title={item.name}
                  url={item.url}
                  description={item.description}
                  src={item.icon}
                  post={item.post}
                  tags={item.tags}
                  isLarge={true}
                />
              ))}
            </div>
          </div>
        )}

        {/* Remaining cards in 3-column grid */}
        {filteredItems.length > 2 && (
          <div className="pb-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredItems.slice(2).map((item, idx) => (
                <PartnerCard
                  key={idx + 2}
                  title={item.name}
                  url={item.url}
                  description={item.description}
                  src={item.icon}
                  post={item.post}
                  tags={item.tags}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
