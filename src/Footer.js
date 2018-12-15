import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component { 
  shouldComponentUpdate(nextProps, nextState) {
    return false
  }

  render() {
    return (
      <footer>
        <div className="footerLinks">
          <div className="maxLink right">
            Created with the 
            <a href="https://github.com/codait/max-photo-booth">
                {` MAX Image Segmenter`}
            </a>
            { ` model from the Model Asset eXchange.` }
          </div>
        </div>
      </footer>
    )
  }
}