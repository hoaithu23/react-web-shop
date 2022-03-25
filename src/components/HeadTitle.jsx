import React from 'react'
import PropTypes from 'prop-types'

const HeadTitle = props => {
  document.title = 'Thor7Color - ' + props.title
  return (
        <div> {props.children} </div>
  )
}

HeadTitle.propTypes = {
    title: PropTypes.string.isRequired
}

export default HeadTitle