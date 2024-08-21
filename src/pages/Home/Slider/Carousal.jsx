import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import slide1 from "../../../assets/images/carousel1.jpg"
import slide2 from "../../../assets/images/carousel2.jpg"
import slide3 from "../../../assets/images/carousel3.jpg"
import { EffectFade, Navigation, Pagination,Autoplay } from 'swiper/modules';
import Slide from './Slide';

const Carousal = () => {
    return (
        <div>
            <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[EffectFade, Navigation, Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
         <Slide img={slide1} title='Build you new Sass Project'></Slide>
        </SwiperSlide>
        <SwiperSlide>
         <Slide img={slide2} title='Get Your Graphics Design Project Done in Minutes'></Slide>
        </SwiperSlide>
        <SwiperSlide>
         <Slide img={slide3} title='Start Your Digital Marketing Campaigns up n Running'></Slide>
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Carousal;