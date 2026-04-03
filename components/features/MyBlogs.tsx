import { blogsObj, BlogType } from '@/constants/blog'
import BlogCard from '../common/BlogCard'
import CategoryButtons from './CategoryButtons'

const MyBlogs = () => {
  return (
     <section className="container px-6 mx-auto">
      <h1 className="lg:text-2xl text-lg font-semibold mt-4 text-center">Latest Blog</h1>

      <div className="mx-auto px-6 space-x-2 mt-10">
        <CategoryButtons />
      </div>

      <div className="p-5 grid grid-cols-1 lg:grid-cols-3 gap-x-4  gap-y-4 mt-4">
        {blogsObj.map((blog: BlogType) => (
            <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  )
}

export default MyBlogs