import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./home.scss";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Discuss_Form/Form";

const Home = () => {
  const technologies = {
    Platforms: ["iOS", "Android", "Windows", "Linux"],
    Development: ["React", "Angular", "Vue", "Svelte"],
    "Backend and Analytics": ["Node.js", "PHP", "Python", "Django"],
    "AR Development": ["Unity", "Unreal Engine", "ARCore", "ARKit"],
    "VR Development": ["Oculus SDK", "HTC Vive", "WebXR", "Three.js"],
  };

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  const slides = [
    {
      title: "Creatively Crafted",
      title2: "Mobile Game Development",
      subTitle:
        "Experience Polymator’s Cutting-Edge, Creative, and Innovative Mobile Game Development Services.",
      url: "../../../public/images/home/mobile-game-development-banner.webp",
    },
    {
      title: "3D Game",
      title2: "Art Services",
      subTitle:
        "Make your game concepts come to life with spectacular 3D art and asset creation services.",
      url: "../../../public/images/home/3d-game-art-services.webp",
    },
    {
      title: "Game Development",
      title2: "Services",
      subTitle:
        "Unleash full potential of your game ideas with our innovative Game Development Services",
      url: "../../../public/images/home/game-development-banner.webp",
    },
    {
      title: "AR/VR Game",
      title2: "Development Services",
      subTitle:
        "Discover new worlds with our cutting-edge enterprise solutions and Augmented Reality (AR) and Virtual Reality (VR) game development services.",
      url: "../../../public/images/home/ar-vr-dev-banner.webp",
    },
  ];

  const steps = [
    {
      title: "Discover",
      description: ["Brainstorming", "Conceptualisation", "Scope Outlining"],
      icon: "https://path/to/discover-icon.svg",
      color: "#F6AF5B",
    },
    {
      title: "Define",
      description: [
        "Project Planning",
        "Documentation",
        "Storyboarding",
        "Wireframing",
      ],
      icon: "https://path/to/define-icon.svg",
      color: "#7968ED",
    },
    {
      title: "Design",
      description: ["2D/3D Artwork", "UI/UX Designing"],
      icon: "https://path/to/design-icon.svg",
      color: "#C25DFE",
    },
    {
      title: "Develop",
      description: ["Programming", "Assets Optimization", "Testing Debugging"],
      icon: "https://path/to/develop-icon.svg",
      color: "#1eaa46",
    },
    {
      title: "Deliver",
      description: ["Deployment", "Support"],
      icon: "https://path/to/deliver-icon.svg",
      color: "#d71923",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setFade(false);
    }, 500);
  };

  const prevSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
      );
      setFade(false);
    }, 500);
  };

  return (
    <div className="home-main">
      <header>
        <Navbar />
      </header>

      <div className="carousel-container">
        <div className={`carousel ${fade ? "fade" : ""}`}>
          <div className="info">
            <h1 className="h1">
              <span>{slides[currentIndex].title}</span>{" "}
              {slides[currentIndex].title2}
            </h1>
            <p>{slides[currentIndex].subTitle}</p>
            <button>Let's Discuss</button>

            <div className="pre-nxt-btn">
              <button className="prev-button" onClick={prevSlide}>
                &#10094;
              </button>

              <button className="next-button" onClick={nextSlide}>
                &#10095;
              </button>
            </div>
          </div>

          <div className="image">
            <img
              src={slides[currentIndex].url}
              alt={slides[currentIndex].title}
            />
          </div>
        </div>
      </div>

      <section className="philo-imagine">
        <div className="philosophy">
          <div className="image">
            <img
              src="https://polymator.com/wp-content/uploads/2023/07/polymator-icon.svg"
              alt=""
            />
          </div>

          <div className="details">
            <h2 className="h2">
              Philosophy Behind{" "}
              <span>
                POLY<span>MATOR</span>
              </span>
            </h2>
            <p>
              The word Polymator is a combination of Polygon and Animator. A
              polygon is the{" "}
              <strong>
                essential building block of any 3D object and an animator is the
                person{" "}
              </strong>{" "}
              who gives life to 3D objects and characters by animating them. Our
              guiding philosophy is to combine 3D design and animation expertise
              to create breathtaking game graphics.
            </p>
          </div>
        </div>

        <div className="imagination">
          <div className="details">
            <h2 className="h2">
              Where Imagination Meets <span>Technology</span>
            </h2>
            <p>
              Polymator is a{" "}
              <strong>
                Mobile Game Development and 3D Art Creation Studio{" "}
              </strong>
              based in India. Our team of skilled artists and mobile game
              developers carry a great passion for delivering the highest
              quality 3D Art and Mobile Games. We use the latest technology
              available in the market and provide innovative strategies to
              create engaging games beyond expectations. We strive to provide
              the best services to make sure our clients are satisfied with the
              end result.
            </p>

            <p>
              Polymator Interactive also provides{" "}
              <strong>AR VR services</strong> for games and enterprise
              solutions. Our experts can create the most engaging experiences
              using AR and VR technology.
            </p>
          </div>

          <div className="image">
            <img
              src="https://polymator.com/wp-content/uploads/2023/08/mobile-game-development-services.webp"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="services">
        <div className="text-container">
          <h2 className="h2">
            <span>Services</span> We Offer
          </h2>

          <p>
            Polymator provides a wide range of{" "}
            <strong>Game Development Services and AR and VR Solutions</strong>{" "}
            at optimal cost to help you accomplish your goals. Here’s a list of
            our services that we offer.
          </p>
        </div>

        <div className="services-cards">
          <div className="service-card-list">
            <div className="service-card">
              <img
                src="https://polymator.com/wp-content/uploads/2023/07/ic-serv-3d-game.svg"
                alt=""
              />
              <h3 className="h3">3D Game Art</h3>
              <p>Committed to deliver the best 3D Game Art for your Games.</p>

              <a className="services-card-btn" href="">
                &#10095;
              </a>
            </div>

            <div className="service-card">
              <img
                src="https://polymator.com/wp-content/uploads/2023/07/ic-serv-game-dev.svg"
                alt=""
              />
              <h3 className="h3">Game Development</h3>
              <p>Specialised in both iOS and Android game creation.</p>

              <a className="services-card-btn" href="">
                &#10095;
              </a>
            </div>
          </div>

          <div className="service-card-list">
            <div className="service-card">
              <img
                src="https://polymator.com/wp-content/uploads/2023/07/ic-serv-ar-vr-dev.svg"
                alt=""
              />
              <h3 className="h3">AR / VR Development Services</h3>
              <p>Create immersive and engaging experiences for your users.</p>

              <a className="services-card-btn" href="">
                &#10095;
              </a>
            </div>

            <div className="service-card">
              <img
                src="https://polymator.com/wp-content/uploads/2023/10/Video-Production.svg"
                alt=""
              />
              <h3 className="h3">Video Production Services</h3>
              <p>Crafting compelling stories through video production.</p>

              <a className="services-card-btn" href="">
                &#10095;
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="technology-list">
        <h2>
          <span>Technologies</span> We Work With
        </h2>

        <div className="list-items">
          {/* <ul>
            <li>
              <a href="">Platforms</a>
            </li>
            <li>
              <a href="">Development</a>
            </li>
            <li>
              <a href="">Backend and Analytics</a>
            </li>
            <li>
              <a href="">AR Development</a>
            </li>
            <li>
              <a href="">VR Development</a>
            </li>
          </ul> */}

          <ul>
            {Object.keys(technologies).map((item) => (
              <li
                key={item}
                className={selectedItem === item ? "active" : ""}
                onClick={() => handleSelect(item)}
              >
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {selectedItem && (
          <div className="tech-icon-list">
            {technologies[selectedItem].map((tech) => (
              <div className="tech-item" key={tech}>
                <img
                  src={`https://dummyimage.com/70x70/000/fff&text=${tech}`}
                  alt={tech}
                />
                <span>{tech}</span>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="benefits">
        <div className="text-container">
          <h2>
            <span>Benefits</span> of Working with Polymator
          </h2>
          <p>
            Choosing Polymator for your mobile game development requirements
            means working with a group of professionals committed to providing
            the highest level of service. We have the know-how to turn your game
            concepts into reality thanks to our focus on 3D game graphics and
            highly technical development skills in mobile gaming as well as AR
            and VR games and enterprise solutions. We collaborate closely with
            our clients to provide a smooth and entertaining gaming experience.
            For a really fascinating gaming experience, team up with <br />
            Polymator.
          </p>
        </div>

        <div className="benefit-cards">
          <div className="benefit-card-list">
            <div className="benefit-card">
              <img
                src="https://polymator.com/wp-content/uploads/2023/07/ic-benf-exp-workforce.svg"
                alt=""
              />
              <h3 className="h3">3D Game Art</h3>
              <p>Committed to deliver the best 3D Game Art for your Games.</p>
            </div>

            <div className="benefit-card">
              <img
                src="https://polymator.com/wp-content/uploads/2023/07/ic-benf-dev-expert.svg"
                alt=""
              />
              <h3 className="h3">Game Development</h3>
              <p>Specialised in both iOS and Android game creation.</p>
            </div>

            <div className="benefit-card">
              <img
                src="https://polymator.com/wp-content/uploads/2023/07/ic-benf-data-sec.svg"
                alt=""
              />
              <h3 className="h3">Game Development</h3>
              <p>Specialised in both iOS and Android game creation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="development-process">
        <div className="text-container">
          <h2>
            Our Development <span>Process</span>
          </h2>

          <p>
            At Polymator, we adhere to a definitive set of Game Development
            Processes to guarantee that each progression is executed
            productively and enable us to convey impeccable mobile game
            applications. Our Game Development Process is as follows:
          </p>
        </div>

        <div className="process-container">
          <div className="process">
            <div className="image-icon">
              <div className="icon-wrapper">
                <img
                  src="https://polymator.com/wp-content/uploads/2023/07/ic-proc-discover.svg"
                  alt=""
                />

                <div className="details">
                  <h3 className="h3">Discover</h3>
                  <ul>
                    <li>Brainstorming</li>
                    <li>Conceptualisation</li>
                    <li>Scope Outlining</li>
                  </ul>
                </div>
              </div>

              <div className="arrow">
                <img
                  src="https://polymator.com/wp-content/themes/polymator/assets/images/ic-proc-arrow-1.svg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="process">
            <div className="image-icon">
              <div className="icon-wrapper">
                <img
                  src="https://polymator.com/wp-content/uploads/2023/07/ic-proc-discover.svg"
                  alt=""
                />

                <div className="details">
                  <h3 className="h3">Discover</h3>
                  <ul>
                    <li>Brainstorming</li>
                    <li>Conceptualisation</li>
                    <li>Scope Outlining</li>
                  </ul>
                </div>
              </div>

              <div className="arrow">
                <img
                  src="https://polymator.com/wp-content/themes/polymator/assets/images/ic-proc-arrow-1.svg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="process">
            <div className="image-icon">
              <div className="icon-wrapper">
                <img
                  src="https://polymator.com/wp-content/uploads/2023/07/ic-proc-discover.svg"
                  alt=""
                />

                <div className="details">
                  <h3 className="h3">Discover</h3>
                  <ul>
                    <li>Brainstorming</li>
                    <li>Conceptualisation</li>
                    <li>Scope Outlining</li>
                  </ul>
                </div>
              </div>

              <div className="arrow">
                <img
                  src="https://polymator.com/wp-content/themes/polymator/assets/images/ic-proc-arrow-1.svg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="process">
            <div className="image-icon">
              <div className="icon-wrapper">
                <img
                  src="https://polymator.com/wp-content/uploads/2023/07/ic-proc-discover.svg"
                  alt=""
                />

                <div className="details">
                  <h3 className="h3">Discover</h3>
                  <ul>
                    <li>Brainstorming</li>
                    <li>Conceptualisation</li>
                    <li>Scope Outlining</li>
                  </ul>
                </div>
              </div>

              <div className="arrow">
                <img
                  src="https://polymator.com/wp-content/themes/polymator/assets/images/ic-proc-arrow-1.svg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="process">
            <div className="image-icon">
              <div className="icon-wrapper">
                <img
                  src="https://polymator.com/wp-content/uploads/2023/07/ic-proc-discover.svg"
                  alt=""
                />

                <div className="details">
                  <h3 className="h3">Discover</h3>
                  <ul>
                    <li>Brainstorming</li>
                    <li>Conceptualisation</li>
                    <li>Scope Outlining</li>
                  </ul>
                </div>
              </div>

              <div className="arrow">
                <img
                  // src="https://polymator.com/wp-content/themes/polymator/assets/images/ic-proc-arrow-1.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <section className="type-of-games">
        <div className="text-container">
          <h2>
            <span>Type of Games</span> We Build
          </h2>
          <p>
            Gaming industry is constantly evolving and there is a wide range of
            game genres available for players worldwide. At Polymator, we are
            proud to offer our expertise in mobile game development for a
            variety of genres, including
          </p>
        </div>

        <div className="types-lists">
          <div className="list">
            <div className="item">
              <img
                src="https://polymator.com/wp-content/uploads/2023/07/ic-gtyp-act-adv.svg"
                alt=""
              />
              <h3>Action & Adventure</h3>
            </div>

            <div className="item">
              <img
                src="https://polymator.com/wp-content/uploads/2023/07/ic-gtyp-act-adv.svg"
                alt=""
              />
              <h3>Puzzle & Strategy</h3>
            </div>

            <div className="item">
              <img
                src="https://polymator.com/wp-content/uploads/2023/07/ic-gtyp-act-adv.svg"
                alt=""
              />
              <h3>Sports & Racing</h3>
            </div>

            <div className="item">
              <img
                src="https://polymator.com/wp-content/uploads/2023/07/ic-gtyp-act-adv.svg"
                alt=""
              />
              <h3>Role-playing & Simulation</h3>
            </div>
          </div>

          <div className="list">
            <div className="item">
              <img
                src="https://polymator.com/wp-content/uploads/2023/07/ic-gtyp-act-adv.svg"
                alt=""
              />
              <h3>Casual & Arcade</h3>
            </div>

            <div className="item">
              <img
                src="https://polymator.com/wp-content/uploads/2023/07/ic-gtyp-act-adv.svg"
                alt=""
              />
              <h3>Multiplayer Games</h3>
            </div>

            <div className="item">
              <img
                src="https://polymator.com/wp-content/uploads/2023/07/ic-gtyp-act-adv.svg"
                alt=""
              />
              <h3>Infinite Runner</h3>
            </div>

            <div className="item">
              <img
                src="https://polymator.com/wp-content/uploads/2023/07/ic-gtyp-act-adv.svg"
                alt=""
              />
              <h3>Educational & Kids Game</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="blogs">
        <div className="text-container">
          <h2>
            Our <span>Blogs</span>
          </h2>

          <p>
            Our blogs will help you to stay updated on the newest developments
            in the mobile gaming world.
          </p>
        </div>

        <div className="blog-list">
          <div className="blog">
            <img
              src="https://polymator.com/wp-content/uploads/2023/12/Ready-to-Level-Up-Your-Game-How-Can-Game-Development-Outsourcing-Help-You.jpg"
              alt=""
            />

            <p>
              Ready to Level Up Your Game? How Can Game Development Outsourcing
              Help You?
            </p>
          </div>

          <div className="blog">
            <img
              src="https://polymator.com/wp-content/uploads/2023/12/A-Step-by-Step-Guide-to-Build-An-Augmented-Reality-App-Development-and-Tools-Technologies.jpg"
              alt=""
            />

            <p>
              A Step-by-Step Guide to Build An Augmented Reality App:
              Development and Tools & Technologies
            </p>
          </div>

          <div className="blog">
            <img
              src="https://polymator.com/wp-content/uploads/2023/12/An-In-depth-Understanding-Of-Game-Art-Style-Outsourcing.jpg"
              alt=""
            />

            <p>An In-depth Understanding Of Game Art Style Outsourcing</p>
          </div>
        </div>

        <div className="button">
          <Link>Read More Blogs</Link>
        </div>
      </section>

      <section className="forms">
        <Form />
      </section>

      <section className="footer">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
