import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link';

class Services extends React.Component {

    render() {
        console.log(this.props)
      return (
        <div>
            <h1>Hello, {this.props.location.search}</h1>
            <Link className="has-text-primary" to={{
                search: '?another-service',
                }}>
            Link me
          </Link>
        </div>
      );
    }
  }

export default Services
