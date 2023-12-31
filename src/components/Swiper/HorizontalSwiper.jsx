import { Swiper, SwiperSlide } from 'swiper/react';

const HorizontalSwiper = ({slides=[],...props}) => {
  return (
    <div  className='mx-auto'>
      <Swiper
        spaceBetween={4}
        slidesPerView={3}
        className=' '
        style={{ paddingLeft: '4%',paddingRight: '4%'}}
        {...props}
        >
        {slides.map((slide,idx)=><SwiperSlide  
          className='bg-transparent  ring-inset my-2'
          style={{height:'auto'}}
          key={idx}>
          {slide}
          </SwiperSlide>
          )}
      </Swiper>
      <div style={{width:'5%'}}></div>
      </div>
  );
};


export default HorizontalSwiper