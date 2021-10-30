import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { headerStyles, header } from "../styles/layout.module.css"

const Header = ({ siteTitle }) => (
  <header className={header}>
    <div>
      <StaticImage
        src="../../src/images/bt-logo.png"
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
      />
      <h1 className={headerStyles} style={{ margin: 0 }}>
        <Link
          to="#about"
          style={{
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
