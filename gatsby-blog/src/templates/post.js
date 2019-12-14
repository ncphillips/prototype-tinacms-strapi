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
    onSubmit(data) {
      return updatePost(data)
    },
  })

  return (
    <Layout>
      <h1>{strapiPost.title}</h1>
      <p>{strapiPost.body}</p>
    </Layout>
  )
}

function updatePost(strapiPost) {
  return fetch(`http://localhost:1337/posts/${strapiPost.strapiId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(strapiPost),
  }).catch(e => {
    console.error(e)
  })
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
