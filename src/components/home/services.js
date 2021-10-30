import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { whatWeDo, whatWeDoBody } from "../../styles/layout.module.css"

const Services = ({ title, paragraph, listHeading, list }) => {
  return (
    <div id="services">
      <div className={whatWeDo} style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <StaticImage
            src="../../images/Metaphor_illustration.png"
            // width={300}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
          />
        </div>
        <div className={whatWeDoBody} style={{ width: "50%" }}>
          <h1>{title}</h1>
          <p>{paragraph}</p>
          <h3>{listHeading}</h3>
          <ul>
            {list?.map(listItem => (
              <li key={listItem}>{listItem}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Services
