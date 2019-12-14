import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

const PostTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiPost.title}</h1>
    <p>{data.strapiPost.body}</p>
  </Layout>
)

export default PostTemplate

export const query = graphql`
  query PostTemplate($id: String!) {
    strapiPost(id: { eq: $id }) {
      strapiId
      title
      description
      body
    }
  }
`
