import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { withPlugins } from "tinacms"

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>
      {data.allStrapiPost.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.title}</Link>
          </h2>
          <p>{document.node.content}</p>
        </li>
      ))}
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

const StrapiPostCreatorPlugin = {
  __type: "content-creator",
  name: "Post",
  fields: [
    { label: "Title", name: "title", component: "text" },
    { label: "Description", name: "description", component: "textarea" },
  ],
  onSubmit(data) {
    return fetch(`http://localhost:1337/posts/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        title: data.title,
        description: data.description,
        body: "",
      }),
    })
  },
}

export default withPlugins(IndexPage, StrapiPostCreatorPlugin)

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiPost {
      edges {
        node {
          id
          strapiId
          title
          description
        }
      }
    }
  }
`
