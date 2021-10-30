import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { whatWeDo, whatWeDoBody } from "../../styles/layout.module.css"

const Services = ({ title, paragraph, listHeading }) => {
  return (
    <div id="services">
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
          <h1>{title}</h1>
          <p>{paragraph}</p>
          <h3>{listHeading}</h3>
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
