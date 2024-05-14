import { useRef, useState, useEffect } from "react";
import "./Carousel.css";
import pizza from '../../Images/pizza.jpg';
import burger from '../../Images/burger.jpg';
import salad from '../../Images/salad.jpg';

const IMAGES = [
  { src: pizza, title: "Delicious pizza restaurants" },
  { src: burger, title: "Delicious Burgers" },
  { src: salad, title: "The best salads" }
];

const Carousel = () => {
  const carousel = useRef();
  const [count, setCount] = useState(0);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  useEffect(() => {
    let interval;

    if (autoplayEnabled) {
      interval = setInterval(() => {
        incrementCarousel(1);
      }, 3000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [autoplayEnabled]);

  const incrementCarousel = (delta) => {
    if (!carousel.current) return;

    const WIDTH = carousel.current.offsetWidth;
    const TOTALIMAGES = IMAGES.length;
    let newCount = (count + delta + TOTALIMAGES) % TOTALIMAGES;

    carousel.current.scrollTo(WIDTH * newCount, 0);
    setCount(newCount);
  };

  return (
    <div
      className="carousel-container"
      onMouseEnter={() => setAutoplayEnabled(false)}
      onMouseLeave={() => setAutoplayEnabled(true)}
    >
      <div
        className="carousel-btn left-btn"
        onClick={() => incrementCarousel(-1)}
      />
      <div
        className="carousel-btn right-btn"
        onClick={() => incrementCarousel(1)}
      />
      <div className="carousel" ref={carousel}>
        {IMAGES.map((img, idx) => (
          <div
            key={`${idx}-${img.title}`}
            className={idx === count ? "carousel-item active" : "carousel-item"}
          >
            <img src={img.src} alt="img of carousel" />
            <p>{img.title}</p>
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
