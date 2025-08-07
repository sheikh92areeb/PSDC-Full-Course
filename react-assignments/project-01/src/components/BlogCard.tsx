import type { FC } from "react"

interface BlogProps {
    title: string,
    body: string
}

const BlogCard: FC<BlogProps> = ({title, body}) => {
  return (
    <div className="flex items-center gap-6 border p-4 rounded-lg">
        <div className="bg-primary-100 dark:bg-primary-900 mb-4 flex items-center justify-center rounded-full w-50 h-30">
            <img src="https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-09-11-tailwind-flex/social-2.png" alt="Blog Image" className="w-50 h-30 rounded-lg" />
        </div>
        <div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">{title}</h3>
            <p className="text-gray-500 dark:text-gray-400">{body}</p>
        </div>
    </div>
  )
}

export default BlogCard
