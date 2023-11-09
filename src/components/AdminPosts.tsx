import React, { useState, useEffect, useRef } from 'react'
import { LuLoader2 } from 'react-icons/lu'
import dayjs from 'dayjs'

import { Button } from '@/components/ui/button'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { useToast } from '@/components/ui/use-toast'
import attempt from '@/lib/attempt-promise'

interface Page {
  id: string
  cover: string | null
  title: string
  slug: string
  tags: string[]
  publishedTime: string
  publishedDate: string
  createdTime: string
}

interface ApiResponse {
  pages: Page[]
  prev_cursor?: string
  next_cursor?: string
}

export function PublishButton({
  id,
  children,
}: {
  id: string
  children: React.ReactNode
}) {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handleConfirm = async () => {
    setLoading(true)
    const [error, res] = await attempt(
      fetch('/api/admin_publish_post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
        }),
      })
    )
    if (error || res.status !== 200) {
      toast({
        title: 'Failed to publish',
        description: `${error || res.status}`,
        variant: 'destructive',
      })
    } else {
      toast({
        title: 'Successfully published',
        description: 'The post has been published.',
      })
    }
    setLoading(false)
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button isLoading={loading}>{children}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            Publish the post to the website.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleConfirm}>Confirm</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

const AdminPosts: React.FC = () => {
  const [data, setData] = useState<ApiResponse | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const prevCursors = useRef<Record<string, string>>({})

  useEffect(() => {
    fetchData('')
  }, [])

  const fetchData = async (cursor: string) => {
    try {
      setLoading(true)
      const url = `/api/admin_posts?page_size=30${
        cursor && `&cursor=${cursor}`
      }`
      const response = await fetch(url)
      const result: ApiResponse = await response.json()
      setData({
        ...result,
        prev_cursor: prevCursors.current[cursor],
      })
      if (result.next_cursor) {
        prevCursors.current = {
          ...prevCursors.current,
          [result.next_cursor]: cursor,
        }
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handlePrevPage = () => {
    fetchData(data?.prev_cursor || '')
  }

  const handleNextPage = () => {
    fetchData(data?.next_cursor || '')
  }

  return (
    <div className="w-full py-2 align-middle sm:px-6 lg:px-8 relative">
      {loading && (
        <div className="opacity-75 fixed inset-0 bg-white">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <LuLoader2 className="h-6 w-6 animate-spin" />
          </div>
        </div>
      )}
      <table className="min-w-full divide-y divide-gray-300 min-h-64">
        <thead>
          <tr>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
            >
              Title
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Created Time
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Published Time
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data?.pages.map((page) => (
            <tr key={page.id}>
              <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                {page.title}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {dayjs(page.createdTime).format('YYYY-MM-DD')}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {page.publishedTime
                  ? dayjs(page.publishedTime).format('YYYY-MM-DD')
                  : 'Not Published'}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <Button variant="link">
                  <a
                    href={`posts/preview/${page.id}`}
                    target="_blank"
                    rel="noopener noreferer"
                  >
                    Preview
                  </a>
                </Button>
                <PublishButton id={page.id}>
                  {page.publishedTime ? 'Update' : 'Publish'}
                </PublishButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        {data?.prev_cursor !== undefined ? (
          <Button onClick={handlePrevPage}>Previous</Button>
        ) : (
          <div></div>
        )}
        {data?.next_cursor ? (
          <Button onClick={handleNextPage}>Next</Button>
        ) : null}
      </div>
    </div>
  )
}

export default AdminPosts
