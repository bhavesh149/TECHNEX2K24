import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import line from "../../assets/images/background/line-2.png";

Team2.propTypes = {
  data: PropTypes.array,
};

function Team2(props) {
  const { data } = props;
  return (
    <section id="team" className="team s2">
      <div className="shape "></div>
      <img src={line} alt="" className="img-line" />
      <div className="container" data-aos="fade-up" data-aos-duration="2000">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="block-text center">
              <h6 className="sub-heading">
                <span>Team Members</span>
              </h6>
              <h3
                className="heading wow xl:text-[40px] sm:text-[40px] lg:text-[40px] text-[30px] font-bold"
                data-splitting
              >
                Our Amazing Team
                <br />
                Members
              </h3>
            </div>
          </div>

          {data.slice(4, 11).map((idx) => (
            <div
              key={idx.id}
              className="col-xl-3 col-lg-3 col-md-4 col-sm-5 flex justify-center"
            >
              <div className="team-box">
                <div className="image">
                  <Link to="/team">
                    <img src={idx.img} alt="Cyfonii" />
                  </Link>

                  <ul className="list-social">
                    <li>
                      <Link to="#">
                        <span className="icon-facebook"></span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <span className="icon-twiter"></span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <span className="icon-plan"></span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="content">
                  <Link to="/team" className="h5 name">
                    {idx.name}
                  </Link>
                  <p className="postion">{idx.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team2;
