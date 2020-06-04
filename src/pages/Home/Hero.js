import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Hero extends Component {
  render() {
    return (
      <div className="md:mr-h-hero mr-bg-black mr-text-white mr-bg-cover mr-bg-center mr-bg-hero mr-flex mr-justify-between mr-items-center mr-py-10 mr-px-4">
        <div className="mr-w-1/2 mr-flex mr-flex-col mr-items-center">
          <div className="mr-flex mr-flex-col mr-pl-4">
            <h1 className="mr-text-3xl mr-font-light md:mr-text-5xl lg:mr-text-6xl mr-flex mr-flex-col mr-justify-start">
              <span>Be an instant</span>
              <span>contributor to the</span>
              <span>world’s maps</span>
            </h1>
            <Link to="/browse/challenges" className="mr-button mr-mt-8 mr-w-2/3">
              Get Started
            </Link>
          </div>
        </div>
        <div className="mr-bg-map mr-w-1/2 mr-h-64"></div>
      </div>
    )
  }
}
