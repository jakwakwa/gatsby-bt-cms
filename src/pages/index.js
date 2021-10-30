import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { useStaticQuery, graphql } from "gatsby"

import { hero } from "../styles/layout.module.css"
import About from "../components/home/about"
import Services from "../components/home/services"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      mdx {
        frontmatter {
          heading
          paragraph
          secondary_heading
          about_title
          about_paragraph
        }
      }
      allMdx {
        nodes {
          frontmatter {
            about_paragraph
            about_title
            serviceslist_heading
            services_paragraph
            services_title
          }
        }
      }
    }
  `)

  const str = JSON.stringify(data)
  const jsStr = JSON.parse(str)
  console.log(jsStr)

  const aboutTitle = jsStr.allMdx.nodes[1].frontmatter.about_title
  const aboutParagraph = jsStr.allMdx.nodes[1].frontmatter.about_paragraph
  const servParagraph = jsStr.allMdx.nodes[2].frontmatter.services_paragraph
  const servTitle = jsStr.allMdx.nodes[2].frontmatter.services_title
  const servListHeading = jsStr.allMdx.nodes[2].frontmatter.serviceslist_heading

  return (
    <>
      <Layout>
        <Seo title="Home" />
        <div className={hero} style={{ display: "flex" }}>
          <div style={{ width: "40%" }}>
            <h1>{data.mdx.frontmatter.heading}</h1>
            <h2>{data.mdx.frontmatter.secondary_heading}</h2>
            <p>{data.mdx.frontmatter.paragraph}</p>
          </div>
          <div style={{ width: "60%" }}>
            <StaticImage
              src="../images/hero-img.png"
              // width={300}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="A Gatsby astronaut"
              style={{ marginBottom: `1.45rem` }}
            />
          </div>
        </div>

        <About title={aboutTitle} paragraph={aboutParagraph} />
        <Services
          title={servTitle}
          paragraph={servParagraph}
          listHeading={servListHeading}
        />
      </Layout>
    </>
  )
}
export default IndexPage
