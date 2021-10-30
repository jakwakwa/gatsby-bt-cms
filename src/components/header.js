import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#206A7A`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1200,
        padding: `1rem 1.0875rem`,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <StaticImage
        src="../../src/images/bt-logo.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
      />
      <h1 style={{ margin: 0 }}>
        <Link
          to="#about"
          style={{
            color: `white`,
            fontSize: `14px`,
            textDecoration: `none`,
            fontFamily: "Montserrat",
            marginRight: `40px`,
          }}
        >
          {`Who We Are`}
        </Link>
        <Link
          to="#services"
          style={{
            color: `white`,
            fontSize: `14px`,
            textDecoration: `none`,
            fontFamily: "Montserrat",
          }}
        >
          {`What We Do`}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
