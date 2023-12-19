import { useEffect, useState } from "react";
import "../../StyleFiles/home.css";
import { Link } from "react-router-dom";
import land1 from "../../Images/land-1.webp";
import land2 from "../../Images/land-2.webp";
import land3 from "../../Images/land-3.webp";

const images = [land1, land2, land3];

const Landing = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentImageIndex + 1) % images.length;
      handleImageChange(nextIndex);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const handleBulletClick = (index) => {
    handleImageChange(index);
  };

  return (
    <div
      className="landing"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="overlay"></div>
      <div className="text">
        <h1>
          Happiness Starts From <br /> <span>Fork & Knife</span>
        </h1>
        <p>
          Because your happiness is important to us, you have Fork & Knife
          Restaurant with the most delicious food and desserts from the hands of
          the most famous chefs in the world.
        </p>
        <Link to={"menu"}>Order Now</Link>
      </div>
      <div className="bullets">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => handleBulletClick(index)}
            className={currentImageIndex === index ? "bullet-active" : ""}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Landing;
