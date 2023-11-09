import type { ReactElement } from 'react'

import { cn } from '@/lib/utils'
import type { NextPageWithLayout } from '../_app'
import AdminPosts from '@/components/AdminPosts'
import { Toaster } from '@/components/ui/toaster'

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Toaster />
      <div
        className={cn(
          'safe-viewport',
          'grid gap-4 grid-cols-2 lg:grid-cols-20 3xl:grid-cols-24 grid-rows-1',
          'py-6',
        )}
      >
        <div
          className={cn(
            'col-start-1 col-span-full lg:col-span-18 lg:col-start-2 3xl:col-start-4 3xl:col-span-18 row-start-1'
          )}
        >
          <AdminPosts />
        </div>
      </div>
    </>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return page
}

export default Page
