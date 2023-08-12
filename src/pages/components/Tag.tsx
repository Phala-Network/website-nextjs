import React from 'react'

export default function Tag({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <a href="#" className="text-xs text-black-800 bg-green-500 rounded-md px-3 py-1">
        {children}
      </a>
    </div>
  )
}
