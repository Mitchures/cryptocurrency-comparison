import React from "react"

import Layout from "../components/layout"
import Container from "../components/Container"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Crypto" keywords={[`cryptocurrency`, `comparison`, `react`]} />
    <Container />
  </Layout>
)

export default IndexPage
