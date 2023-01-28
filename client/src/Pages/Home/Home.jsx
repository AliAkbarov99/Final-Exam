import React, { useRef } from "react";
import "./Home.scss";
import castle from "../../Images/services1.svg";
import basket from "../../Images/services2.svg";
import plain from "../../Images/services3.svg";
import cap from "../../Images/services5.svg";
import insights from "../../Images/about1.jpg";
import blog from "../../Images/blog5.jpg";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => {
  let searchInp = useRef();
  const [brands, setBrands] = useState([]);
  const [shownBrands, setShownBrands] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8080/api/brands").then((response) => {
      setBrands(response.data);
    });
  }, [toggle]);

  useEffect(() => {
    setShownBrands(brands);
  }, [brands]);

  return (
    <>
    <HelmetProvider>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
    </HelmetProvider>
      
      <div id="intro">
        <div className="container">
          <div className="intro__text">
            <h1>Best IT Solution in your city</h1>
            <div></div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repellendus in et laborum quis molestias.
            </p>
            <button>Find Out More</button>
          </div>
        </div>
      </div>

      <div id="industry">
        <div className="container">
          <div className="industry__header">
            <p>INDUSTRY WE OFFER</p>
            <h1>Managed IT services customized for your industry</h1>
            <span>
              We understand the complexities of modern markets and translate
              them into real business solutions for automotive, financial,
              insurance, pharma & life sciences,
            </span>
          </div>

          <div className="industry__items">
            <div className="industry__items__card">
              <div className="industry__items__card__img">
                <img src={castle} alt="" />
              </div>
              <div className="industry__items__card__text">
                <p>Industries & Manufacturing</p>
              </div>
            </div>
            <div className="industry__items__card">
              <div className="industry__items__card__img">
                <img src={basket} alt="" />
              </div>
              <div className="industry__items__card__text">
                <p>Industries & Manufacturing</p>
              </div>
            </div>
            <div className="industry__items__card">
              <div className="industry__items__card__img">
                <img src={plain} alt="" />
              </div>
              <div className="industry__items__card__text">
                <p>Industries & Manufacturing</p>
              </div>
            </div>
            <div className="industry__items__card">
              <div className="industry__items__card__img">
                <img src={cap} alt="" />
              </div>
              <div className="industry__items__card__text">
                <p>Industries & Manufacturing</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="insights">
        <div className="container">
          <div className="insights__left">
            <h2>
              Insights to help you do what you do better, faster and more
              profitably.
            </h2>
            <p>
              We understand the complexities of modern markets and translate
              them into real business solutions for automotive, financial,
              insuranc.
            </p>
            <button>Learn More</button>
          </div>
          <div className="insights__right">
            <img src={insights} alt="" />
          </div>
        </div>
      </div>

      <div id="brands">
        <div className="brands__header">
          <p>OUR CASE STUDY</p>
          <div><button>Sort by price</button></div>
          <h1>We work with global brands</h1>
          <div>
            <input
              onChange={() => {
                setShownBrands(
                  brands.filter((fill) => {
                    console.log(fill);
                    if (searchInp.current.value === "") {
                      return true;
                    } else if (
                      fill.brand
                        ?.toLowerCase()
                        .startsWith(searchInp.current.value.toLowerCase())
                    ) {
                      return true;
                    } else {
                      return false;
                    }
                  })
                );
              }}
              ref={searchInp}
              type="text"
              placeholder="Search brands"
            />
          </div>
        </div>

        <div className="brands__cards">
          <div className="container">
            {shownBrands &&
              shownBrands.map((brand) => {
                return (
                  <div>
                    <img src={blog} alt="" />
                    <h2>{brand.brand}</h2>
                    <p>{brand.price}$</p>
                    <span>UniCode</span>
                    <button
                      onClick={() => {
                        axios.delete(
                          `http://localhost:8080/api/brands/${brand._id}`
                        );
                        alert("Brand deleted!");
                        setToggle(!toggle);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <div id="discussion">
        <h1>Let's work together.</h1>
        <p>
          We understand the complexities of modern markets and translate them
          into real business solutions for automotive, financial, insuranc.
        </p>

        <div>
          <button>Start Discussion</button>
        </div>
      </div>
    </>
  );
};

export default Home;
