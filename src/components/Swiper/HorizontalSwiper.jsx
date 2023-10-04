import { Swiper, SwiperSlide } from 'swiper/react';

const HorizontalSwiper = ({slides=[],...props}) => {
  return (
    <div  style={{ width:'96%'}} className='mx-auto'>
      <Swiper
        spaceBetween={6}
        slidesPerView={3}
        loop={true}
        // centeredSlides={true}
        // roundLengths={true}
        style={{ paddingLeft: '4%',paddingRight: '4%'}}
        {...props}
        >
        {slides.map((slide,idx)=><SwiperSlide  className='bg-transparent h-full block' key={idx}>{slide}</SwiperSlide>)}
      </Swiper>
      <div style={{width:'5%'}}></div>
      </div>
  );
};


export default HorizontalSwiper