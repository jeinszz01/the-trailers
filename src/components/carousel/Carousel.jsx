import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Categorias from './Categorias'

const Carousel = ({videos, setVideos}) => {
    
    const [categorias, setcategorias] = useState([])

    useEffect(() => {
        const ConsultaApi = async() => {
            try {
                const url = 'https://trailers-json.onrender.com/videos'
                const url2 = 'https://trailers-json.onrender.com/categorias'
                const [response, response2] = await Promise.all([fetch(url), fetch(url2)])
                const data = await response.json()
                const data2 = await response2.json()
                setVideos(data)
                setcategorias(data2)
            } catch (error) {
                console.log(error)
            }
        }
        ConsultaApi()
    }, [])
    
    
    return (
        <SectionCarousel>
            <DivCarousel>
                {categorias.map(categoria => {
                        const videosFilter = videos.filter((video) => video.categoria === categoria.name)
                        return <Categorias
                            key={categoria.id}
                            categoria={categoria}
                            videosFilter={videosFilter}
                        />
                    })
                }
            </DivCarousel>
        </SectionCarousel>
    )
}

export default Carousel

const SectionCarousel = styled.section`
    width: 100%;
    margin-top: 3rem;
    padding: 0 10px;
`
const DivCarousel = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    margin-bottom: 2rem;
    h2 {
        text-transform: uppercase;
    }
`
