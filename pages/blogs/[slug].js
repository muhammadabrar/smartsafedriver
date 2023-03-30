import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'
import Skeleton from '../../comp/Skeleton'
import Footer from '../../comp/footer';
import Nav from '../../comp/hero/nav';
import Inner_page from '../../comp/inner_page';

const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({ 
    content_type: "blogs" 
  })

  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'blogs',
    'fields.slug': params.slug
  }) 

  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { blogs: items[0] },
    revalidate: 1
  }
}

export default function RecipeDetails({ blogs }) {
  if (!blogs) return <Skeleton />

  const { featureImage, title, tags, detail } = blogs.fields

  return (
      
    <>
   <Nav active="Blogs" />
   <Inner_page b={title} blog />

<div className='blogDetail'>
      <div className="banner">
        <Image 
          src={'https:' + featureImage.fields.file.url}
          width={featureImage.fields.file.details.image.width}
          height={featureImage.fields.file.details.image.height}
        />
        
      </div>

      
      <h1 className='blogTitle'>{ title }</h1>
      <div className="method">
        {/* <h3>Method:</h3> */}
        <div>{documentToReactComponents(detail)}</div>
      </div>
      </div>
      <Footer/>

      <style jsx>{`
        h2,h3 {
          text-transform: uppercase;
        }
        .banner h2 {
          margin: 0;
          background: #fff;
          display: inline-block;
          padding: 20px;
          position: relative;
          top: -60px;
          left: -10px;
          transform: rotateZ(-1deg);
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
        }
        .info p {
          margin: 0;
        }
        .info span::after {
          content: ", ";
        }
        .info span:last-child::after {
          content: ".";
        }
      `}</style>

    </>
  )
}