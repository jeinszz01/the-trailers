import { useState, useEffect } from "react";
import { Box, TextField, styled, MenuItem, Button } from "@mui/material"
import { Link } from "react-router-dom";
import { addVideo } from "../infrastructure/Videos";
import { obtenerCategories } from "../infrastructure/Categorias";
import { AlertMessage, SuccessAlert } from "./Alert/Message";
import { validarLink, validarNombre } from "./validaciones/ValidInputs";


const FormVideo = () => {
    //const classes = styles()
    const [categorias, setCategorias] = useState([])
    const [alert, setAlert] = useState(false)
    const [alertError, setAlertError] = useState(false)

    useEffect(() => {
        const consultarCategorias = async() => {
            const dt = await obtenerCategories()
            setCategorias(dt)
        }
        consultarCategorias()
    }, [])

    const generarId = () => {
        const random = Math.random().toString(36).substr(2)
        const fecha = Date.now().toString(36)
        return random + fecha
    }

    const [titulo, setTitulo] = useState({value: '', valid: null})
    const [linkVideo, setLinkVideo] = useState({value: '', valid: null})
    const [imagenCard, setImagenCard] = useState({value: '', valid: null})
    const [imagenBg, setImagenBg] = useState({value: '', valid: null})
    const [categoria, setCategoria] = useState({value: '', valid: null})
    const [descripcion, setDescripcion] = useState({value: '', valid: null})
    const [fechaEstreno, setFechaEstreno] = useState({value: '', valid: null})

    const handleSubmit = e => {
        e.preventDefault();
        const newVideo = {
            titulo: titulo.value,
            linkVideo: linkVideo.value,
            imagenCard: imagenCard.value,
            imagenBg: imagenBg.value,
            categoria: categoria.value,
            descripcion: descripcion.value,
            fechaEstreno: fechaEstreno.value
        }
        if(newVideo.id) {
            console.log('Estamos editando')
        } else {
            if(titulo.value==='' || linkVideo.value==='' || imagenCard.value==='' || imagenBg.value==='' || categoria.value===''||descripcion.value===''|| fechaEstreno.value==='') {
                setAlertError(true)
                setTimeout(() => {
                    setAlertError(false)
                }, 2500);
                return
            }
            newVideo.id = generarId()
            addVideo(newVideo)
            setAlert(true)

            setTitulo({value: '', valid: null})
            setLinkVideo({value: '', valid: null})
            setImagenCard({value: '', valid: null})
            setImagenBg({value: '', valid: null})
            setCategoria({value: '', valid: null})
            setDescripcion({value: '', valid: null})
            setFechaEstreno({value: '', valid: null})
        }
        setTimeout(() => {
            setAlert(false)
        }, 3000);
    }

    const limpiarInputs = () => {
        setTitulo({value: '', valid: null})
        setLinkVideo({value: '', valid: null})
        setImagenCard({value: '', valid: null})
        setImagenBg({value: '', valid: null})
        setCategoria({value: '', valid: null})
        setDescripcion({value: '', valid: null})
        setFechaEstreno({value: '', valid: null})
    }

    return (
        <DivVideo>
            <h2>Nuevo Video</h2>
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
                        margin: '.5rem auto'
                      }}
                      onSubmit={handleSubmit}
                >
                    <TextField 
                        fullWidth
                        id="filled-basic"
                        label="Título"
                        variant="filled"
                        sx={{'& > :not(style)': {background: '#242424', '&:hover, &.Mui-focused': {background: '#242424'}, color: '#FFF', '&.MuiInputLabel-root': {color: '#C2C2C2'},}}}
                        
                        margin="dense"
                        value={titulo.value}
                        onChange={(e) => {
                            const value = e.target.value
                            const valido = validarNombre(value)
                            setTitulo({value, valid: valido})
                        }}
                        error={titulo.valid === false}
                        helperText={titulo.valid === false && 'Ingrese un título de video' }
                    />
                    <TextField 
                        fullWidth
                        id="filled-basic"
                        label="Link del Video"
                        variant="filled"
                        sx={{'& > :not(style)': {background: '#242424', '&:hover, &.Mui-focused': {background: '#242424'}, color: '#FFF','&.MuiInputLabel-root': {color: '#C2C2C2'}}}}
                        margin="dense"
                        value={linkVideo.value}
                        onChange={(e) => {
                            const value = e.target.value
                            const valid = validarLink(value)
                            setLinkVideo({value, valid})
                        }}
                        error={linkVideo.valid === false}
                        helperText={linkVideo.valid === false && 'Ingrese una url de youtube de preferencia (http/https://xx?.youtube.com/..)'}
                    />
                    <TextField 
                        fullWidth
                        id="filled-basic"
                        label="Link imagen card del Video"
                        variant="filled"
                        sx={{'& > :not(style)': {background: '#242424', '&:hover, &.Mui-focused': {background: '#242424'}, color: '#FFF','&.MuiInputLabel-root': {color: '#C2C2C2'}}}}
                        margin="dense"
                        value={imagenCard.value}
                        onChange={(e) => {
                            const value = e.target.value
                            const valid = validarLink(value)
                            setImagenCard({value, valid})
                        }}
                        error={imagenCard.valid === false}
                        helperText={imagenCard.valid === false && 'Ingrese una url correcta (http/https://xx?.a-z.dominio/..)'}
                    />
                    <TextField 
                        fullWidth
                        id="filled-basic"
                        label="Link imagen Fondo del Video (*mayor resolución)"
                        variant="filled"
                        sx={{'& > :not(style)': {background: '#242424', '&:hover, &.Mui-focused': {background: '#242424'}, color: '#FFF','&.MuiInputLabel-root': {color: '#C2C2C2'}}}}
                        margin="dense"
                        value={imagenBg.value}
                        onChange={(e) => {
                            const value = e.target.value
                            const valid = validarLink(value)
                            setImagenBg({value, valid})
                        }}
                        error={imagenBg.valid === false}
                        helperText={imagenBg.valid === false && 'Ingrese una url correcta (http/https://xx?.a-z.dominio/..)'}
                    />
                    <TextField
                        margin="dense"
                        fullWidth
                        id="filled-select-currency"
                        select
                        label="Categoria"
                        defaultValue=""
                        variant="filled"
                        sx={{'& > :not(style)': {background: '#242424', '&:hover, &.Mui-focused': {background: '#242424'}, color: '#FFF','&.MuiInputLabel-root': {color: '#C2C2C2'}}}}
                        value={categoria.value}
                        onChange={(e) => {
                            const value = e.target.value
                            const valid = validarNombre(value)
                            setCategoria({value, valid})
                        }}
                        error={categoria.valid === false}
                        helperText={categoria.valid === false && 'Seleccione una categoria'}
                        onBlur={(e) => {
                            const value = e.target.value
                            const valid = validarNombre(value)
                            setCategoria({value, valid})
                        }}
                    >
                        {categorias.map((option) => (
                            <MenuItem key={option.id} value={option.name}>
                                {option.name}
                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField
                        margin="dense"
                        fullWidth
                        id="filled-multiline-static"
                        label="Descripción"
                        multiline
                        rows={4}
                        variant="filled"
                        sx={{'& > :not(style)': {background: '#242424', color: '#FFF', '&:hover, &.Mui-focused': {background: '#242424'},'&.MuiInputLabel-root': {color: '#C2C2C2'} }}}
                        value={descripcion.value}
                        onChange={(e) => {
                            const value = e.target.value
                            const valid = validarNombre(value)
                            setDescripcion({value, valid})
                        }}
                        error={descripcion.valid === false}
                        helperText={descripcion.valid === false && 'Llene este campo.' }
                    />
                    <TextField 
                        fullWidth
                        id="filled-basic"
                        label="Fecha de Estreno"
                        variant="filled"
                        sx={{'& > :not(style)': {background: '#242424', '&:hover, &.Mui-focused': {background: '#242424'}, color: '#FFF', '&.MuiInputLabel-root': {color: '#C2C2C2'}}}}
                        margin="dense"
                        value={fechaEstreno.value}
                        onChange={(e) => {
                            const value = e.target.value
                            const valid = validarNombre(value)
                            setFechaEstreno({value, valid})
                        }}
                        error={fechaEstreno.valid === false}
                        helperText={fechaEstreno.valid === false && 'Seleccione una fecha' }
                    />

                    <ButtonGroup1 variant="contained" >
                        <Button variant="contained" color="info" onClick={() => limpiarInputs()}>Limpiar</Button>
                        <Button variant="contained" color="success" type="submit">Guardar</Button>
                        <LinkCategoria to={`/nueva-categoria`}><Button variant="contained">Nueva Categoría</Button></LinkCategoria>
                    </ButtonGroup1>

                </Box>
                <SuccessAlert alert={alert} setAlert={setAlert} vid />
                <AlertMessage alertError={alertError} setAlertError={setAlertError}  />
        </DivVideo>
    )
}

export default FormVideo

const DivVideo = styled('div')`
    max-width: 1440px;
    margin: 2rem auto;
    margin-top: 100px;
    padding: 0 15px;
    h2 {
        text-align: center;
    }
`
const ButtonGroup1 = styled('div')({
    margin: '2rem 0',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
})
const LinkCategoria = styled(Link)({
    color: 'white',
})


const CssTextField = styled(TextField)({
    // '&.Mui-active': {
    //     color: 'white',
    // },
    // '& label.Mui-focused': {
    //   color: 'white',
    //   background: '#242424'
    // },
    // '& .MuiInput-underline': {
    //     borderBottomColor: 'white',
    //     background: '#242424'
    //   },
    // '& .MuiInput-underline:after': {
    //   borderBottomColor: 'white',
    //   background: '#242424'
    // },
    // // '& .MuiInputLabel-root': {
    // //   color: 'white',
    // // },
    // // '& .MuiOutlinedInput-root': {
    // //   '& fieldset': {
    // //     borderColor: 'white',
    // //   },
    //   '&:hover fieldset': {
    //     borderColor: 'white',
    //   },
    //   '&.Mui-focused fieldset': {
    //     borderColor: 'white',
    //   },
    // },
  });