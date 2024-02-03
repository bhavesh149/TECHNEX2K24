import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/GJY (25).jpg";
import img2 from "../../assets/images/abs3.png";
import img3 from "../../assets/images/Abstract 3D Gradient Shapes - 9.png";

function Banner(props) {
  return (
    <section className="banner">
      <div className="shape right"></div>
      <div className="container big">
        <div className="row">
          <div className="col-xl-6 col-md-12">
            <div className="banner__left xl:ml-9">
              <div className="block-text">
                <h2 className="heading  ">
                Welcome to&nbsp; 
                                             <span className="s1 arlo_tm_animation_text_word "> TECHNEX-23</span> <br />

                </h2>
                <br />
                <p className="desc">
                  Technex is our flagship Technical event held annually which
                  attracts hundreds of Engineering students from different parts
                  of the country. Technex is an event which is driven and
                  organized by a team of students and mentored by a team of
                  faculties. The event was started in 2007 with the motive of
                  encouraging technology, scientific thinking and innovation
                  among young engineers and giving them a platform to enhance
                  their skills. Currently Technex is recognized as Central
                  India’s largest Science and technology fest with an annual
                  participation of more than 2500+ technology enthusiasts.
                </p>

                <Link to="/contact" className="action-btn">
                  <span>Register Now</span>
                </Link>
              </div>

              {/* <div className="pay">
                <h6>We are Monteno NFT</h6>

                <div className="list">
                  <p>We accept:</p>

                  <ul>
                    <li>
                      <Link to="#">
                        <span className="icon-logo-01"></span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <span className="icon-logo-02"></span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <span className="icon-logo-03"></span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <span className="icon-logo-04"></span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <span className="icon-logo-05">
                          <span className="path1"></span>
                          <span className="path2"></span>
                          <span className="path3"></span>
                          <span className="path4"></span>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <span className="icon-logo-06"></span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-xl-6 col-md-12">
            <div className="banner__right">
              <div className="image">
                <img src={img1} alt="cyfonii" />
              </div>

              <div className="price">
                <div className="icon">
                  <img src={img2} width={80} alt="cyfonii" />
                </div>
                {/* <div className="content">
                  <p>Current Bid</p>
                  <h5>2.26 ETH</h5>
                </div> */}
              </div>

              <div className="owner">
                <div className="image">
                  <img src={img3} alt="cyfonii" />
                </div>
                {/* <div className="content">
                  <h5>Leslie Alexander</h5>
                  <p>@leslie754</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
