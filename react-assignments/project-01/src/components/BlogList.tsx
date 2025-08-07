import { useEffect, useState } from "react"
import BlogCard from "./BlogCard"

const BlogList = () => {

    const [posts, setPosts] = useState([])

    async function fetchData() {
        let data = await fetch('https://jsonplaceholder.typicode.com/posts')
        let response = await data.json()
        setPosts(response)
        console.log(response)
    }

    useEffect(() => {
        fetchData()
    }, [])


  return (
    <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
                <div className="mb-8 max-w-screen-md lg:mb-16">
                    <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                        Latest Articles
                    </h2>
                    <p className="text-gray-500 sm:text-xl dark:text-gray-400">
                        Diverse Range of articles related to html css and javascript.
                    </p>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
                    {posts.slice(0,8).map(({id, title, body}) => (
                        <BlogCard key={id} title={title} body={body} />
                    ))}
                </div>
            </div>
        </section>
  )
}

export default BlogList
