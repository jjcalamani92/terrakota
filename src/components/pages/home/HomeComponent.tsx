import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";



interface State {
  Home: any;
}

export const HomeComponent = () => {
  const { sliders } = useSelector((state: State) => state.Home);
  return (
    <section className="home">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
      >
        {sliders.map((data: any, i: number) => (
          <SwiperSlide className="slide" key={i}>
            <div className="image">
              <img src={`${data.image}`} alt="" />
            </div>
            <div className="content">
              <img src={`${data.imageBanner}`} alt="" />
              <span>{data.content}</span>
              <h3>{data.title}</h3>
              <a href="#" className="btn">
                ver productos
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
