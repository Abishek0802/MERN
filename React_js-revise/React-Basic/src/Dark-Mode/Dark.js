import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import { Link, useNavigate } from "react-router-dom";
function Dark() {
  const [next, setNext] = useState(""); // State to control animation class
  const [HeadLink, setHeadLink] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
  }, []);
  const Linkcolor = () => {
    setHeadLink((prevHeaderLink) => ({
      color: prevHeaderLink.color === "white" ? "black" : "white",
    }));
  };
  const fade = () => {
    setNext("animate__animated animate__fadeOut");
  };

  const [theme, setTheme] = useState({
    backgroundColor: "antiquewhite",
    color: "black",
  });
  const [outer, setOuter] = useState({
    backgroundColor: "rgb(212, 97, 97)",
  });
  const [div1, setDiv1] = useState({
    backgroundColor: "#93e5ab",
  });
  const [cards, setCards] = useState({
    backgroundColor: "#316d42",
    color: "black",
  });
  const [div2, setDiv2] = useState({
    backgroundColor: " bisque",
    color: "black",
  });
  const handleSubmit = () => {
    Linkcolor();
    setDiv2((prevDiv2) => ({
      backgroundColor:
        prevDiv2.backgroundColor === " bisque" ? "black" : " bisque",
      color: prevDiv2.color === "black" ? "white" : "black",
    }));
    setCards((prevCards) => ({
      backgroundColor:
        prevCards.backgroundColor === "#316d42" ? "black" : "#316d42",
      color: prevCards.color === "black" ? "white" : "black",
    }));
    setDiv1((prevDiv1) => ({
      backgroundColor:
        prevDiv1.backgroundColor === "#93e5ab" ? "grey" : "#93e5ab",
    }));
    setOuter((prevOuter) => ({
      backgroundColor:
        prevOuter.backgroundColor === "rgb(212, 97, 97)"
          ? "#222222"
          : "rgb(212, 97, 97)",
    }));
    setTheme((prevTheme) => ({
      backgroundColor:
        prevTheme.backgroundColor === "antiquewhite" ? "black" : "antiquewhite",
      color: prevTheme.color === "black" ? "white" : "black",
    }));
  };
  const handleLinkClick = () => {
    fade();
    setTimeout(() => {
      navigate("/About");
    }, 1000);
  };

  return (
    <>
      <div className={`${next}`} style={outer} id="outer">
        <header style={theme} className="Nav">
          <ul className="NavList">
            <button onClick={handleSubmit}>Dark Mode</button>
            <li>
              <Link
                style={{ ...HeadLink, textDecoration: "none" }}
                onClick={handleLinkClick}
              >
                Login
              </Link>
            </li>
            <li>Contact Us</li>
            <li>Carrier</li>
            <li>Home</li>
          </ul>
        </header>
        <div style={div1} className="div1">
          <div
            className=" "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            style={cards}
          >
            card1
          </div>
          <div
            className=" "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            style={cards}
          >
            card2
          </div>
          <div
            className="  "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            style={cards}
          >
            card3
          </div>
          <div
            className=" "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            style={cards}
          >
            card4
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-pl
          data-aos-duration="2000"
          style={div2}
          className="div2"
        >
          <h1>Header Content</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
            cum in praesentium cumque quo consequuntur incidunt nulla vitae,
            maiores suscipit aliquam quas aperiam dicta facere explicabo dolor
            eum soluta laudantium. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Optio magni quis sed error magnam, adipisci sequi
            itaque perferendis! Iste, hic amet voluptas veritatis rem ut
            distinctio laborum! A, maxime veniam! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Possimus culpa, cupiditate optio rerum
            dolores voluptates neque voluptatem alias temporibus fuga, tempora
            aliquid. Nobis delectus officiis et. Corporis magnam voluptas natus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            laboriosam voluptatum nihil accusantium nemo tempore illum
            doloremque hic dolore eveniet atque, voluptate ratione natus nulla
            ad consequuntur quo pariatur eum!
          </p>
        </div>

        <div className="footer">
          <li>@copyright </li>
          <li>footer</li>
          <li>contact us</li>
          <li>readfile</li>
        </div>
      </div>
    </>
  );
}

export default Dark;
