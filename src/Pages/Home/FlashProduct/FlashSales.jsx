import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CountdownTimer from "./CountDown/CountDown";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const FlashSales = () => {
  return (
    <div className="flex flex-col gap-8 border-b border-gray-400 pb-8 lg:pb-12">
      <div className="mb-10 space-y-6">
        <SectionTitle title={"Today`s"} />
        <div className="flex justify-between items-center">
          <div className="flex items-end gap-8">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">
              Flash Sales
            </h1>
            <div>
              <CountdownTimer />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full border flex justify-center items-center cursor-pointer">
              <BiLeftArrow />
            </button>
            <button className="w-10 h-10 rounded-full border flex justify-center items-center cursor-pointer">
              <BiRightArrow />
            </button>
          </div>
        </div>
      </div>
      <div>
        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="h-[400px] bg-gradient-to-bl from-orange-200 via-orange-300 to-orange-400 rounded-lg"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[400px] bg-gradient-to-bl from-orange-200 via-orange-300 to-orange-400 rounded-lg"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[400px] bg-gradient-to-bl from-orange-200 via-orange-300 to-orange-400 rounded-lg"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[400px] bg-gradient-to-bl from-orange-200 via-orange-300 to-orange-400 rounded-lg"></div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex justify-center items-center">
        <button className="btn bg-red-500 hover:bg-red-600 text-white rounded-lg">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default FlashSales;
