import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BookList from "../components/bookList"

const BooksPage = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                path
                title             
              }
            }
          }
        }
      }
    `
  )
  return (
    <Layout>
      <SEO title="Home" />

      <BookList books={allMarkdownRemark.edges} />

    </Layout>
  )
}

export default BooksPage
