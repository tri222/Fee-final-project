import { useState } from 'react'
import '../Css/Div1.css'
const Div1 = () => {
  return (
    <>
<header>
    <a className="logo">
      <img src="images/motocycle logo.png" />
      {' '}
      <span>
        <b>
          MOT
        </b>
      </span>
      Club
    </a>
    <nav>
      <a
        href=""
        target="_blank"
      >
        <i className="ri-facebook-fill" />
      </a>
      <a>
      </a>
      <a
        href=""
        target="_blank"
      >
        <i className="ri-twitter-fill" />
      </a>
      <a
        href=""
        id="insta"
        target="_blank"
      >
        <i className="ri-instagram-line" />
      </a>
      <a>
      </a>
      <a
        href=""
        target="_blank"
      >
        <i className="ri-youtube-line" />
      </a>
    </nav>
    <span
      className="toggle-btn"
      onclick="toggle()"
    >
      ☰
    </span>
  </header>

    </>
  )
}

export default Div1
