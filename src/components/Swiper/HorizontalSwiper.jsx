import { Swiper, SwiperSlide } from 'swiper/react';

const HorizontalSwiper = ({slides=[],...props}) => {
  return (
    <Swiper
      spaceBetween={6}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      {...props}
    >
      {slides.map((slide,idx)=><SwiperSlide  className='bg-transparent h-full block' key={idx}>{slide}</SwiperSlide>)}
    </Swiper>
  );
};


export default HorizontalSwiper