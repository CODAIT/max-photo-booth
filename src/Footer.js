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
          <div className="maxLink left">
            Created at the 
            <a href="https://developer.ibm.com/code/open/centers/codait/">
                {` IBM Center for Open-Source Data & AI Technologies.`}
            </a>
          </div>
          <div className="maxLink right">
            Source code available on 
            <a href="https://github.com/CODAIT/max-photo-booth">
                {` GitHub.`}
            </a>
          </div>            
        </div>
      </footer>
    )
  }
}