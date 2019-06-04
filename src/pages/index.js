import React from "react"

import Layout from "../components/layout"
import Card from "../components/Card"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Crypto" keywords={[`cryptocurrency`, `comparison`, `react`]} />
    <p>View current cryptocurrency prices (USD).</p>
    <Card />
  </Layout>
)

export default IndexPage
