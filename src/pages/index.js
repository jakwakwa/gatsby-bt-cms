import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { useStaticQuery, graphql } from "gatsby"

import { hero, headerdiv } from "../styles/layout.module.css"
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
          about_paragraph_two
        }
      }
      allMdx {
        nodes {
          frontmatter {
            about_paragraph
            about_paragraph_two
            about_title
            serviceslist_heading
            services_paragraph
            services_title
            services_list
          }
        }
      }
    }
  `)

  const str = JSON.stringify(data)
  const jsStr = JSON.parse(str)
  console.log(jsStr)

  const aboutTitle = jsStr.allMdx.nodes[2].frontmatter.about_title
  const aboutParagraph = jsStr.allMdx.nodes[2].frontmatter.about_paragraph
  const aboutParagraphSecond =
    jsStr.allMdx.nodes[2].frontmatter.about_paragraph_two
  const servParagraph = jsStr.allMdx.nodes[1].frontmatter.services_paragraph

  const servTitle = jsStr.allMdx.nodes[1].frontmatter.services_title
  const servListHeading = jsStr.allMdx.nodes[1].frontmatter.serviceslist_heading

  const servList = jsStr.allMdx.nodes[1].frontmatter.services_list

  return (
    <>
      <Layout>
        <Seo title="Home" />
        <div
          className={hero}
          style={{ display: "flex", paddingBottom: "90px" }}
        >
          <div style={{ width: "40%" }}>
            <h1>{data.mdx.frontmatter.heading}</h1>
            <h2>{data.mdx.frontmatter.secondary_heading}</h2>
            <p>{data.mdx.frontmatter.paragraph}</p>
          </div>
          <div
            style={{
              width: "60%",
              position: "absolute",
              top: "7rem",
              right: "2rem",
            }}
          >
            <StaticImage
              src="../images/hero-img.png"
              width={900}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="A Gatsby astronaut"
            />
          </div>
        </div>
        <div className={headerdiv}></div>

        <Services
          title={servTitle}
          paragraph={servParagraph}
          listHeading={servListHeading}
          list={servList}
        />
        <About
          title={aboutTitle}
          paragraph={aboutParagraph}
          secondParagraph={aboutParagraphSecond}
        />
      </Layout>
    </>
  )
}
export default IndexPage
