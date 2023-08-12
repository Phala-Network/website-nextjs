import React from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import { cn } from '@/lib/utils'

export default function Pagination() {
  return (
    <div className="flex items-center gap-x-1">
      <a href="#" className="p-2">
        <FiChevronLeft />
      </a>
      <PaginationItem active>1</PaginationItem>
      <PaginationItem>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
      <PaginationItem>4</PaginationItem>
      <PaginationItem>5</PaginationItem>
      <PaginationItem>...</PaginationItem>
      <PaginationItem>10</PaginationItem>
      <a href="#" className="p-2">
        <FiChevronRight />
      </a>
    </div>
  )
}

const PaginationItem = ({ active = false, children }: { active?: boolean, children: React.ReactNode }) => {
  return (
    <a
      href="#"
      className={cn(
        "transition-colors duration-100",
        "font-medium text-black-800 text-base",
        "p-2 min-w-[40px] min-h-[40px] leading-none rounded-full",
        "flex items-center justify-center",
        "hover:bg-green-200 hover:border-none",
        active ? "border-[1px] border-green-700" : null
      )}
    >
      {children}
    </a>
  )
}
