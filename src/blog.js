import rect1 from './Rectangle1.svg';
import rect2 from './Rectangle2.svg';
const posts = [
    {
      title: 'relative w-0 flex-1 inline-flex items-center justify-end',
      href: '#',
      imageUrl: rect1,
    },
    {
      title: 'Ecommerce Hosting: What to Look for in a Host',
      href: '#',
      imageUrl: rect2,
    }
  ]
  
function Blog() {
    return (
      <div className="relative mx-20 bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid gap-2 grid-cols-2 ">
            <div className="flex flex-col">
            <h2 className="text-left text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Read Our Blog</h2>
            <p className="text-left mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            relative w-0 flex-1 inline-flex items-center justify-end
            </p>
            </div>
            <div className="flex flex-col">
              <div className="mt-16 relative flex-1 inline-flex items-center justify-end">
            <button className='bg-green-900 text-amber-100 py-2 w-40 rounded-sm'>Buy Now</button>
            </div>
            </div>
          </div>
          <div className="mt-12  max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
            {posts.map((post) => (
              <div key={post.title} className="flex flex-col rounded-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img className="h-full w-full object-cover" src={post.imageUrl} alt="" />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    
                    <a href={post.href} className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                      <p className="mt-3 text-base text-gray-500">{post.description}</p>
                      <p className="mt-3 text-base text-gray-500">Read more</p>
                    </a>
                  </div>
                 
                  </div>
                </div>
              
            ))}
          </div>
        </div>
      </div>
    )
  }
export default Blog;  