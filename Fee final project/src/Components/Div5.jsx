import React from 'react'
import '../Css/Div5.css'

function Div5() {
  return (
    <div>
      <div id='blog' className="container-6">
      <div className="row-1">
        <div className="column-1">
          <img src="images/Rectangle 4 copy 11.png" />
          <h1>
            Club blog
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia temporibus unde sunt. Dolorem, minima magnam reprehenderit pariatur sunt tempora eligendi laboriosam similique aliquid eius voluptatem dolor nobis, id molestias explicabo, rem iusto in dicta blanditiis at aliquam. Eos dolorem dicta sed est ut molestias ratione!
          </p>
          <button>
            Learn more
          </button>
        </div>
        <div  className="column-2">
          <img src="images/box-img-1.png" />
          <img src="images/box-img-3.png" />
        </div>
        <div className="column-3">
          <img src="images/box-image2.png" />
          <img src="images/box-image-4.png" />
        </div>
      </div>
      <h2 className="signup">
        <span>
          <b>
            Signup
          </b>
        </span>
        {' '}for newsletter
      </h2>
      <div className="content-6">
        <div className="para-6">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum recusandae nemo dolore repellendus veritatis
          </p>
        </div>
        <div className="input-6">
          <form>
            <input
              placeholder="enter your email address"
              type="email"
            />
          </form>
          <button>
            Submit
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Div5
