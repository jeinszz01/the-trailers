import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Categorias from './Categorias'
import Media from './Skeleton/Media'

const Carousel = ({videos, setVideos}) => {
    
    const [categorias, setcategorias] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        const ConsultaApi = async() => {
            setCargando(true)
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
            setCargando(false)
        }
        ConsultaApi()
    }, [])
    
    
    return (
        <SectionCarousel>
            <DivCarousel>
                {cargando ? <Media /> : (
                    <DivCategorias>
                        {categorias.map(categoria => {
                                const videosFilter = videos.filter((video) => video.categoria === categoria.name)
                                return <Categorias
                                    key={categoria.id}
                                    categoria={categoria}
                                    videosFilter={videosFilter}
                                />
                            })
                        }
                    </DivCategorias> 
                )}
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
`
const DivCategorias = styled.div`
    margin-bottom: 2rem;
    h2 {
        text-transform: uppercase;
    }
`