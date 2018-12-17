import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component { 
  render() {
    return (
      <footer className='text-center'>
        <span className="maxLink">
          Created with the 
          <a href="https://developer.ibm.com/exchanges/models/all/max-image-segmenter/">
              {` MAX Image Segmenter`}
          </a>
          { ` model from the Model Asset eXchange.` }
        </span>
      </footer>
    )
  }
}