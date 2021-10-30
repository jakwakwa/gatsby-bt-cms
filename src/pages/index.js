import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { useStaticQuery, graphql } from "gatsby"

import {
  hero,
  whatWeDo,
  whatWeDoBody,
  whoWeAre,
  whoWeAreBody,
} from "../styles/layout.module.css"

const IndexPage = () => {
  //   const data = useStaticQuery(graphql`
  //   query HeaderQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return
  ;<Layout>
    <Seo title="Home" />
    <div className={hero} style={{ display: "flex" }}>
      <div style={{ width: "40%" }}>
        <h1>COMPLEX SKILLS</h1>
        <h2>TECHNICAL RECRUITMENT SOLUTIONS</h2>
        <p>
          Data Science, Data Engineering and Analytics recruitment services from
          a team of determined, delivery orientated recruiters.
        </p>
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
          BigTalent believes in the value of using data, analytics techniques,
          and scientific principles to support economic growth and
          sustainability of businesses, especially during these turbulent
          economic times. This is why we focus our recruitment activities in
          this space, dedicated to connecting exceptional data talent to our
          clients, so that ambitious projects can come to fruition
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

    <div className={whoWeAre} style={{ display: "flex" }}>
      <div className={whoWeAreBody} style={{ width: "50%" }}>
        <h1>
          Who we <area shape="" coords="" href="" alt="" />
        </h1>
        <p>
          BigTalent was established by Thelma Kruger to service the gap in this
          niche field. A highly-skilled specialist, she mastered the art of
          recruitment while working at a large, JSE-listed corporate recruitment
          organisation for 13 years, where she achieved many highly regarded
          industry top awards, including including Top consultant, Top team lead
          and Best performing branch.
        </p>
        <p>
          As founder of BigTalent, Thelma’s expertise includes the placement of
          technical Quantitative, Actuarial and Finance professionals throughout
          South Africa. She has recruited for large banks and listed corporates,
          as well as SMEs and start-ups. Specific companies include ABSA, FNB,
          The Reserve Bank, as well as non-financial services at such companies
          as Barloworld, Bidvest and Imperial, to name a few. Thelma works with
          her team of researchers to identify and track top talent in the
          market.
        </p>
      </div>
      <div style={{ width: "50%" }}>
        <StaticImage
          src="../images/who-we-are.png"
          // width={300}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
          style={{ marginBottom: `1.45rem` }}
        />
      </div>
    </div>
    {/*
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p> */}
  </Layout>
}
export default IndexPage
