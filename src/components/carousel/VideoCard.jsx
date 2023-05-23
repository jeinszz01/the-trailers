import styled from "@emotion/styled"
import { Swiper, SwiperSlide } from "swiper/react";

const VideoCard = ({video}) => {
    return (
        <DivCard>
            <LinkCard href={`${video.linkVideo}`}>
                <ImgCard src={`${video.imagenCard}`} alt="img-ddd" />
                <h3>{video.titulo}</h3>
            </LinkCard>
        </DivCard>
    )
}

export default VideoCard

const DivCard = styled('div')`
    display: flex;
    align-items: center;
    justify-content: center;
`
const ImgCard = styled('img')`
    width: 100%;
    max-width: 400px;
    height: 100%;
    max-height: 225px;
    margin-top: 1rem;
    border-radius: 1rem;
`
const LinkCard = styled('a')`
    color: #FFF;
`