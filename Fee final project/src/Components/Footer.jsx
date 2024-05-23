import { useState } from 'react'
import '../Css/Footer.css'
const Footer = () => {
  return (
    <>
<>
<div id='contact' className="header-2">
      <div className="head">
        <a>
          <img
            className="img-2-logo"
            src="images/motocycle logo.png"
          />
        </a>
        <a className="logo-2">
          <span>
            MOT
          </span>
          CLUB
        </a>
      </div>
      <nav className="nav-2">
        <a
          href=""
          style={{
            '--i': '7'
          }}
          target="_blank"
        >
          <i className="ri-facebook-fill" />
        </a>
        <a>
        </a>
        <a
          href=""
          style={{
            '--i': '8'
          }}
          target="_blank"
        >
          <i className="ri-twitter-fill" />
        </a>
        <a
          href=""
          id="insta"
          style={{
            '--i': '9'
          }}
          target="_blank"
        >
          <i className="ri-instagram-line" />
        </a>
        <a>
        </a>
        <a
          href=""
          style={{
            '--i': '10'
          }}
          target="_blank"
        >
          <i className="ri-youtube-line" />
        </a>
      </nav>
    </div>
    <div id='shop' className="container-7">
      <div className="content-7">
        <div className="cont-box-1">
          <h2>
            About motclub
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusamus corrupti maxime veniam fuga? Quidem labore fuga esse itaque aperiam, ullam corrupti sapiente asperiores nostrum voluptatibus ab eum atque saepe placeat commodi et. Dicta officia consequatur accusamus accusantium repudiandae ducimus ea ipsam quidem maxime placeat. Asperiores beatae similique mollitia modi.
          </p>
          <button>
            More Info
          </button>
        </div>
        <div className="cont-box-2">
          <h2>
            Latest event
          </h2>
          <div className="red-box-2-1">
            <div className="red-img-1">
              <img src="images/bg-7 small rectangle.png" />
            </div>
            <div className="h-1">
              <h3>
                Event Name
              </h3>
              <p>
                lorem ipsum is simply dummy text
              </p>
            </div>
          </div>
          <div className="red-box-2-2">
            <div className="red-img-2">
              <img src="images/bg-7 small rectangle.png" />
            </div>
            <div className="h-2">
              <h3>
                Event Name
              </h3>
              <p>
                lorem ipsum is simply dummy text
              </p>
            </div>
          </div>
          <div className="red-box-2-3">
            <div className="red-img-3">
              <img src="images/bg-7 small rectangle.png" />
            </div>
            <div className="h-3">
              <h3>
                Event Name
              </h3>
              <p>
                lorem ipsum is simply dummy text
              </p>
            </div>
          </div>
          <div className="red-box-2-4">
            <div className="red-img-4">
              <img src="images/bg-7 small rectangle.png" />
            </div>
            <div className="h-4">
              <h3>
                Event Name
              </h3>
              <p>
                lorem ipsum is simply dummy text
              </p>
            </div>
          </div>
        </div>
        <h2 className="red-small-h1">
          MAR
        </h2>
        <h3 className="red-small-p1">
          15
        </h3>
        <h2 className="red-small-h2">
          MAR
        </h2>
        <h3 className="red-small-p2">
          07
        </h3>
        <h2 className="red-small-h3">
          MAR
        </h2>
        <h3 className="red-small-p3">
          04
        </h3>
        <h2 className="red-small-h4">
          MAR
        </h2>
        <h3 className="red-small-p4">
          02
        </h3>
        <div className="cont-box-3">
          <h2>
            contact info
          </h2>
          <p className="contact">
            (+44) 123 456 789
          </p>
          <h3>
            club address
          </h3>
          <h4>
            638 Ground Road, Main Station,
            <br />
            London 00765
          </h4>
          <h6>
            Email :
            <span>
              hello@PSDFrebies.com
            </span>
            <br />
            <span
              style={{
                marginLeft: '63px'
              }}
            >
              hello@PSDFrebies.com
            </span>
          </h6>
        </div>
      </div>
    </div>
    <footer>
      <p
        style={{
          marginLeft: 'auto',
          marginTop: '30px',
          textAlign: 'center'
        }}
      >
        ©Copyrights 2015 by PSDFrebies.com. All rights reserved.
      </p>
    </footer>
</>

    </>
  )
}

export default Footer
