import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./style.css";
import banner from "../../../assets/images/banner1.jpg";
import banner2 from "../../../assets/images/banner2.jpg";

const Banner = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1 lg:h-[500px] w-full">
          <img
            className="object-cover bg-center bg-cover w-full h-full"
            src={banner}
            alt="banner"
          />
          <div></div>
        </div>
        <div className="keen-slider__slide number-slide2 lg:h-[500px] w-full">
          <img
            className="object-cover bg-center bg-cover w-full h-full"
            src={banner2}
            alt="banner"
          />
        </div>
        <div className="keen-slider__slide number-slide3 lg:h-[500px] w-full">
          <img
            className="object-cover bg-center bg-cover w-full h-full"
            src={banner}
            alt="banner"
          />
        </div>
        <div className="keen-slider__slide number-slide4 lg:h-[500px] w-full">
          <img
            className="object-cover bg-center bg-cover w-full h-full"
            src={banner2}
            alt="banner"
          />
        </div>
        <div className="keen-slider__slide number-slide5 lg:h-[500px] w-full">
          <img
            className="object-cover bg-center bg-cover w-full h-full"
            src={banner}
            alt="banner"
          />
        </div>
        <div className="keen-slider__slide number-slide6 lg:h-[500px] w-full">
          <img
            className="object-cover bg-center bg-cover w-full h-full"
            src={banner2}
            alt="banner"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
