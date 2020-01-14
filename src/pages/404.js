import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout pageTitle="Oops, something went wrong.">
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <Link className="btn btn-secondary text-uppercase" to={"/"}>
      Back to Home
    </Link>
  </Layout>
)

export default NotFoundPage
