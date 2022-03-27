import React from 'react'
import PropTypes from 'prop-types'

const HeadTitle = props => {
  document.title = 'Thor7Color - ' + props.title
  React.useEffect(()=>{
    window.scrollTo(0,0)
  }, [])

  return (
        <div> {props.children} </div>
  )
}

HeadTitle.propTypes = {
    title: PropTypes.string.isRequired
}

export default HeadTitle