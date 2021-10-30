import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { whatWeDo, whatWeDoBody } from "../../styles/layout.module.css"

const Services = () => {
  // const data = useStaticQuery(graphql`
  //   query ServicesQuery {
  //     mdx {
  //       frontmatter {
  //           title-info
  //           paragraph-info
  //           list_info_title
  //           list_services_info
  //       }
  //     }
  //   }
  // `)

  return (
    <div>
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
          {/* <h1>{data.mdx.frontmatter.title_info}</h1>
          <p>{data.mdx.frontmatter.paragraph_info}</p>
          <h3>{data.mdx.frontmatter.list_info_title}</h3> */}
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
    </div>
  )
}

export default Services
