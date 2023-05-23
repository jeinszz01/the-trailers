import styled from "@emotion/styled"
import VideoCard from "./VideoCard"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Navigation, Mousewheel, Keyboard, Autoplay } from "swiper";

const Categorias = ({videosFilter, categoria}) => {
    return <>
        {videosFilter.length > 0 && 
            <>
            <DivCardsCategoria>
                    <h2>Categoria {categoria.name}</h2>
                    <Swiper
                        //slidesPerView={2}
                        spaceBetween={30}
                        modules={[Pagination, Navigation, Mousewheel, Keyboard, Autoplay]}
                        navigation={true}
                        //mousewheel={true}
                        autoplay={{delay: 3000, disableOnInteraction: true}}
                        pagination={{clickable: true}}
                        className="mySwiper"
                        breakpoints= {{
                            320: {
                              slidesPerView: 1,
                              spaceBetween: 20
                            },
                            // when window width is >= 480px
                            880: {
                              slidesPerView: 2,
                              spaceBetween: 30
                            },
                            // when window width is >= 640px
                            1400: {
                              slidesPerView: 3,
                              spaceBetween: 40
                            }}
                        }
                    >       
                        {videosFilter.map(video => (
                                <SwiperSlide key={video.id}>
                                    <VideoCard video={video} />
                                </SwiperSlide>
                                
                        ))}
                    </Swiper>
            </DivCardsCategoria>
                <div className="pagination" />
            </>
        }
    </>
}

export default Categorias

const DivCardsCategoria = styled('div')`
    margin-top: 2rem;
`
const DivCardscontent = styled('div')`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
`
const DivPagination = styled('div')`
    margin-bottom: 3rem;
    position: absolute;
`