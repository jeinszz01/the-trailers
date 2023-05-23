import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <FooterPrin>
            <div>
                <Link to={`/`}><Cabecera>The<span>Trailers</span></Cabecera></Link>
            </div>
        </FooterPrin>
        
    )
}

export default Footer


const FooterPrin = styled.footer`
    padding: 3.75rem 2rem;
    display: flex;
    justify-content: center;
    background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%);
    background-blend-mode: multiply;
    width: 100%;
`
const Cabecera = styled.h1`
    color: #FFF;
    font-size: 20px;
    font-weight: 100;
    display: flex;
    line-height: 1;
    position: relative;
    left: calc(100% - 104px);
    span {
        text-transform: uppercase;
        font-size: 34px;
        font-weight: 700;
        position: absolute;
        top: -3.1px;
        left: 31.03px;
    }
`