import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Carousel from './carousel/Carousel'

const Home = () => {

    const [videos, setVideos] = useState([])

    const random = Math.floor(Math.random()*10)
    
    let bg = videos[random]?.imagenBg

    return (
        <>
            <SectionBanner bg={bg}>
                <DivBanner>

                    <H2titleMovie>{videos[random]?.titulo}</H2titleMovie>
                    <div>
                        <LinkCategory href="#">{videos[random]?.categoria}</LinkCategory>
                        <LinkCategory href="#">Fantasy</LinkCategory>
                        <LinkCategory href="#">Acción</LinkCategory>
                        <LinkCategory href="#">Aventura</LinkCategory>
                    </div>
                        <a href={videos[random]?.linkVideo}>
                            <DivBannerCard>
                                    <ImgCard src={videos[random]?.imagenCard} alt="card-img" />
                                    <DivFecha>
                                        <TextFecha>Release</TextFecha>
                                        <TextFechadata>{videos[random]?.fechaEstreno}</TextFechadata>
                                    </DivFecha>
                            </DivBannerCard>
                        </a>
                    <H3Description>Descripción</H3Description>
                    <p>{videos[random]?.descripcion}</p>
                    <p>Puedes ver el trailer siguiendo el card, links obtenidos de Youtube.</p>

                </DivBanner>
            </SectionBanner>
            <Carousel videos={videos} setVideos={setVideos} />
        </>
    )
}

export default Home

const SectionBanner = styled.section`
    background-image: linear-gradient(0deg, rgba(5,22,30,1) 0%, rgba(5,22,30,1) 8%, rgba(162,169,172,0) 25%, rgba(255,255,255,0) 100%), url(${({bg}) => bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-top: 280px;
    width: 100%;
    max-width: 100%;
    position: relative;
    padding-left: 10px;
    padding-right: 10px;
`
const DivBanner = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: .5rem;
`
const H2titleMovie = styled.h2`
    font-size: 46px;
    text-transform: uppercase;
    letter-spacing: -2px;
`
const LinkCategory = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: #FFF;
    padding: 1px 4px 3px;
    border: 1px solid #FFF;
    border-radius: 5px;
    backdrop-filter: blur(20px);
    display: inline-block;
    margin-right: .5rem;
`
const DivBannerCard = styled.div`
    display: flex;
    margin-top: 1rem;
    gap: 0 1rem;
    flex-wrap: wrap;
`
const ImgCard = styled.img`
    width: 100%;
    max-width: 380px;
    height: 100%;
    max-height: 213px;
    border-radius: 1rem;
`
const DivFecha = styled.div`
    width: 100%;
    max-width: 380px;
    height: 213px;
    backdrop-filter: blur(10px);
    border-radius: 1rem;
    position: relative;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`
const TextFechadata = styled.p`
    font-size: 38px;
    letter-spacing: -1.2px;
    word-spacing: -.3ch;
    font-weight: 700;
`
const TextFecha = styled.p`
    position: absolute;
    top: 30%;
    left: 6px;
    opacity: .6;
    text-transform: uppercase;
    font-size: 22px;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
`
const H3Description = styled.h3`
    text-transform: uppercase;
    font-size: 24px;
    margin-top: 1rem;
    z-index: 0;
`
