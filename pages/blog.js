import Footer from '../components/Footer';
import Header from '../components/Header';
import PostCard from '../components/PostCard';
import { client } from '../lib/apollo';
import { gql } from '@apollo/client';


export default function Blog({ posts }) {
  return (
    <div className="container">
      <Header />
      <main>
        <h1 className="title">
          Blog
        </h1>

        <div className="grid">
          {
            posts.map((post) => {
              return (
                <PostCard key={post.uri} post={post}></PostCard>
              )
            })
          }
        </div>
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {

  const GET_POSTS = gql`
    query GetAllPosts {
      posts {
        nodes {
          title
          content
          uri
          date
          author {
            node {
              name
              mediaItems {
                nodes {
                  mediaItemUrl
                }
              }
            }
          }
          featuredImage {
            node {
              mediaItemUrl
            }
          }
        }
      }
    }
  `
  const response = await client.query({
    query: GET_POSTS
  })
  const posts = response?.data?.posts?.nodes
  return {
    props: {
      posts
    }
  }
}
