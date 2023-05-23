import { styled } from "@mui/material"

const Page404 = () => {
    return (
        <DivImg>
            <img src="./404-page.png" alt="not-found-img" />
        </DivImg>
    )
}

export default Page404

const DivImg = styled('div')`
    width: 100%;
    height: 100%;
    img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`