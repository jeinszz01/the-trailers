import { Box, TextField, styled, Button, Alert, IconButton, Collapse } from "@mui/material"
import { useContext } from "react"
import CategoriaContext from "../Context/CategoriaProvider"
import { validarLink, validarNombre } from "./validaciones/ValidInputs"

const Formulario = ({handleSubmit}) => {

    const { name, setName, linkLogo, setLinkLogo, descripcion, setDescripcion,  codSegurity, setCodSegurity, limpiarInputs, categoriaId } = useContext(CategoriaContext)

    return (
        <Box
                component="form"
                noValidate
                autoComplete="off"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    width: "100%",
                    maxWidth: '1000px',
                    margin: '0 auto'
                }}
                onSubmit={handleSubmit}
            >
                <h2>Nuevo Video</h2>

                <TextField 
                    fullWidth
                    id="filled-basic"
                    label="Nombre"
                    variant="filled"
                    sx={{'& > :not(style)': {background: '#242424', '&:hover, &.Mui-focused': {background: '#242424'}, color: '#FFF','&.MuiInputLabel-root': {color: '#C2C2C2'}}}}
                    margin="dense"
                    value={name.value}
                    onChange={(e) => {
                        const value = e.target.value
                        const valido = validarNombre(value)
                        setName({value, valid: valido})
                    }}
                    error={name.valid === false}
                    helperText={name.valid === false && 'ingrese un nombre correcto' }
                />
                <TextField 
                    fullWidth
                    id="filled-basic"
                    label="Link logo de la categoria"
                    variant="filled"
                    sx={{'& > :not(style)': {background: '#242424', '&:hover, &.Mui-focused': {background: '#242424'}, color: '#FFF','&.MuiInputLabel-root': {color: '#C2C2C2'}}}}
                    margin="dense"
                    value={linkLogo.value}
                    onChange={(e) => {
                        const value = e.target.value
                        const valid = validarLink(value)
                        setLinkLogo({value, valid})
                    }}
                    error={linkLogo.valid === false}
                    helperText={linkLogo.valid === false && 'ingrese un link válido' }
                />
                <TextField
                    margin="dense"
                    fullWidth
                    id="filled-multiline-static"
                    label="Descripción"
                    multiline
                    rows={4}
                    sx={{'& > :not(style)': {background: '#242424', color: '#FFF', '&:hover, &.Mui-focused': {background: '#242424'},'&.MuiInputLabel-root': {color: '#C2C2C2'} }}}
                    variant="filled"
                    value={descripcion.value}
                    onChange={(e) => {
                        const value = e.target.value
                        const valido = validarNombre(value)
                        setDescripcion({value, valid: valido})
                    }}
                    error={descripcion.valid === false}
                    helperText={descripcion.valid === false && 'Complete este campo.' }
                />

                <TextField 
                    fullWidth
                    id="filled-basic"
                    label="Código de seguridad"
                    variant="filled"
                    sx={{'& > :not(style)': {background: '#242424', '&:hover, &.Mui-focused': {background: '#242424'}, color: '#FFF','&.MuiInputLabel-root': {color: '#C2C2C2'} }}}
                    margin="dense"
                    value={codSegurity.value}
                    onChange={(e) => {
                        const value = e.target.value
                        const valido = validarNombre(value)
                        setCodSegurity({value, valid: valido})
                    }}
                    error={codSegurity.valid === false}
                    helperText={codSegurity.valid === false && 'Complete este campo.' }
                />

                <ButtonGroup1 variant="contained" >
                    <Button variant="contained" color="info" onClick={() => limpiarInputs()} >{categoriaId[0]?.id ? 'Cancelar' : 'Limpiar'}</Button>
                    <Button variant="contained" color="success" type="submit">{categoriaId[0]?.id ? 'Editar' : 'Guardar'}</Button>
                </ButtonGroup1>

            </Box>
    )
}

export default Formulario

const ButtonGroup1 = styled('div')({
    margin: '2rem 0',
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '100%',
})
