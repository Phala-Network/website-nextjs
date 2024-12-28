import Link from 'next/link'
import Balancer from 'react-wrap-balancer'
import { type Post } from '@/types/blog'

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toISOString().split('T')[0];
}

export function getInitial(name: string) {
  return name.charAt(0).toUpperCase();
}

export function PostCard({ post }: { post: Post }) {
  return (
    <Link 
      href={`/posts/${post.slug}`}
      className="group rounded-[6px] overflow-hidden bg-white"
    >
      <article className="h-full flex flex-col gap-4">
        <div className="rounded-[6px] overflow-hidden aspect-[390/220]">
          <img 
            src={post.cover ? `https://img0.phala.world/cover/780x440/${post.id.replace(/\-/g, '')}.jpg` : '/images/default-cover.jpg'} 
            alt={post.title || ''}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
        </div>
        <div className="grow flex flex-col justify-between gap-y-2 px-6">
          <h3 className="text-18 font-bold tracking-tight leading-6 line-clamp-3 mb-4">
            <Balancer>{post.title}</Balancer>
          </h3>
          <div className="pb-3 flex flex-col gap-y-1.5">
            <div className="text-14 font-medium">
              {formatDate(post.publishedTime)}
            </div>
            {post.authors[0] && (
              <>
                <hr className="border-black-150" />
                <div className="flex items-center gap-3 py-2">
                  {post.authors[0].avatar ? (
                    <img 
                      src={post.authors[0].avatar} 
                      alt={post.authors[0].nickname}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-24 font-light">
                      {getInitial(post.authors[0].nickname)}
                    </div>
                  )}
                  <div className="flex flex-col gap-y-0.5">
                    <span className="text-16 font-medium">{post.authors[0].nickname}</span>
                    {post.authors[0]?.title && (
                      <span className="text-12 text-black-600">
                        {post.authors[0].title}
                      </span>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
} 