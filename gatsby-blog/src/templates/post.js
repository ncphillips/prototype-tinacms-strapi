import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { useLocalForm } from "tinacms"

const PostTemplate = ({ data }) => {
  const [strapiPost] = useLocalForm({
    id: data.strapiPost.strapiId,
    initialValues: data.strapiPost,
    fields: [
      { label: "Title", name: "title", component: "text" },
      { label: "Body", name: "body", component: "textarea" },
    ],
    onSubmit() {
      //
    },
  })

  return (
    <Layout>
      <h1>{strapiPost.title}</h1>
      <p>{strapiPost.body}</p>
    </Layout>
  )
}

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
