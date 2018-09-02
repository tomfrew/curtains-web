import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Services from '../components/Services';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props

    return (
      <div className="pa3 heroWrap">
        <div className="hero">
          <h1>Curtain Resoration Company</h1>
          <h3>Comming soon</h3>
          <p>We're currently working on a brand new site and will be back soon but in the meantime please get in touch directly at <a href="mailto:hello@curtainrestorationcompany.com">hello@curtainrestorationcompany.com</a></p>
        </div>

      </div>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "service" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
          }
        }
      }
    }
  }
`
