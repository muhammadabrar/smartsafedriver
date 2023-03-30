import Head from 'next/head'
import About from '../comp/about';
import Contact_comp from '../comp/contact';
import Footer from '../comp/footer';
import Nav from '../comp/hero/nav';
import How_to from '../comp/how_to';
import Inner_page from '../comp/inner_page';
import Pricing from '../comp/Pricing';
import Services_comp from '../comp/services';
import { createClient } from 'contentful'
import BlogCard from '../comp/blogCard';
// import RecipeCard from '../components/RecipeCard'
export async function getStaticProps() {

      const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
      })
    
      const res = await client.getEntries({ content_type: "blogs" })
    
      return {
        props: {
            Blogs: res.items,
        },
        revalidate: 1
      }
    }
export default function Contact({Blogs}) {
   

  return (
    <>
    
   <Nav active="Blogs" />
   <Inner_page b="Blogs" />
   {/* <Intro/>
<Comit/> */}

<div className='wrapBlogs'>
{Blogs.map(Blog => (
        <BlogCard key={Blog.sys.id} Blog={Blog} />
      ))}

</div>
<Footer/>
     
     </>
  )
}
