import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

const Header = () => {
    const [ scrolled, setScrolled] = useState(false);
    let location = useLocation();

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    return (
        <Headerhead scrolled={scrolled}>
            <DivHeader>
                <div>
                    <Link to={`/`}><Cabecera>The<span>Trailers</span></Cabecera></Link>
                </div>
                <div>
                    {location.pathname !== '/nuevo-video' && <LinkNuevo to={`/nuevo-video`} >Nuevo Video</LinkNuevo> }
                </div>
            </DivHeader>
        </Headerhead>

    )
}

export default Header

const Headerhead = styled.nav`
    width: 100%;
    padding: 2rem 0;
    position: fixed;
    top: 0;
    z-index: 2;
    backdrop-filter: ${({scrolled}) => scrolled && 'blur(10px)'};
`
const DivHeader = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-between;
    max-width: 1440px;
    margin: 0 auto;
`
const Cabecera = styled.h1`
    color: #FFF;
    font-size: 20px;
    font-weight: 100;
    display: flex;
    line-height: 1;
    position: relative;
    margin-left: 10px;
    span {
        text-transform: uppercase;
        font-size: 34px;
        font-weight: 700;
        position: absolute;
        top: -3.5px;
        left: 31.03px;
    }
`
const LinkNuevo = styled(Link)`
    color: #000;
    font-weight: 500;
    border: 1px solid #fff;
    padding: 6px 12px;
    display:block;
    backdrop-filter: blur(10px);
    background-color: #ffffff84;
    cursor: pointer;
    margin-right: 10px;
    &:hover {
        color: #696969;
    }
`