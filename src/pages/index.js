import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { useStaticQuery, graphql } from "gatsby"

import { hero, whatWeDo, whatWeDoBody } from "../styles/layout.module.css"
import About from "../components/home/about"

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
          }
        }
      }
    }
  `)

  const str = JSON.stringify(data)
  const jsStr = JSON.parse(str)

  const aboutTitle = jsStr.allMdx.nodes[1].frontmatter.about_title
  const aboutParagraph = jsStr.allMdx.nodes[1].frontmatter.about_paragraph

  // const aboutData = useStaticQuery(graphql`
  //   query HeroQuery {
  //     allMdx {
  //       nodes {
  //         frontmatter {
  //           about_paragraph
  //           about_title
  //         }
  //       }
  //     }
  //   }
  // `)
  // const [heading, secondary_heading, paragraph] = data.mdx.frontmatter
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
        <div className={whatWeDo} style={{ display: "flex" }}>
          <div style={{ width: "50%" }}>
            <StaticImage
              src="../images/Metaphor_illustration.png"
              // width={300}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="A Gatsby astronaut"
              style={{ marginBottom: `1.45rem` }}
            />
          </div>
          <div className={whatWeDoBody} style={{ width: "50%" }}>
            <h1>What we do</h1>
            <p>
              BigTalent believes in the value of using data, analytics
              techniques, and scientific principles to support economic growth
              and sustainability of businesses, especially during these
              turbulent economic times. This is why we focus our recruitment
              activities in this space, dedicated to connecting exceptional data
              talent to our clients, so that ambitious projects can come to
              fruition
            </p>
            <h3>Specialist recruitment position</h3>
            <ul>
              <li>Data Scientists</li>
              <li>Data Engineers</li>
              <li>Machine Learning Engineers</li>
              <li>Data Analysts</li>
              <li>Data Architects</li>
              <li>Business Intelligence Developers</li>
              <li>Visualizers</li>
              <li>Reporting Specialists</li>
              <li>Story Tellers</li>
            </ul>
          </div>
        </div>
        {/* <pre>{JSON.stringify(aboutData, null, 4)}</pre> */}
        <About title={aboutTitle} paragraph={aboutParagraph} />
      </Layout>
    </>
  )
}
export default IndexPage
