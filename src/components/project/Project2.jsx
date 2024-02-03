import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "../button/Button";

Project2.propTypes = {
  data: PropTypes.array,
};

function Project2(props) {
  const { data } = props;

  const [dataBlock] = useState({
    subheading: "Events",
    heading: "OUR EVENTS",
  });
  return (
    <section id="events" className="project s2">
      <div className="shape  right"></div>
      <div className="container" data-aos="fade-up" data-aos-duration="2000">
        <div className="row">
          <div className="col-12">
            <div className="block-text center">
              <h6 className="sub-heading">
                <span>{dataBlock.subheading}</span>
              </h6>
              <h3 className="heading xl:text-[40px] sm:text-[40px] lg:text-[40px] text-[30px] font-bold">
                {dataBlock.heading}
              </h3>
            </div>
          </div>

          <div className=" row xl:w-[80%] " style={{ margin: "0 auto" }}>
            {data.map((idx) => (
              <div
                key={idx.id}
                className="col-xl-4 col-md-6  flex justify-center item"
              >
                <div className="project-box">
                  <div className="image p-4 -mt-9">
                    <Link to={idx.url}>
                      <img src={idx.img} alt="Cyfonii" />
                    </Link>
                  </div>
                  <div className="content">
                    <Link to={idx.url} className="h5 title">
                      {idx.title}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="button mt-0">
                                <Button title='View All COLLECTION' link='/nfts' />
                            </div> */}
        </div>
      </div>
    </section>
  );
}

export default Project2;
