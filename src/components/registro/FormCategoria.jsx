import { useState, useContext } from "react";
import { addCategories, updateCategory } from "../infrastructure/Categorias";
import { SuccessAlert, AlertMessage, AlertMessageEdit} from "./Alert/Message";

import ListaCategorias from "./tablaCategorias/ListaCategorias";
import Formulario from "./Formulario";
import { styled } from "@mui/material"

import CategoriaContext from "../Context/CategoriaProvider";

const FormCategoria = () => {
    
    const { name, linkLogo, descripcion, codSegurity, categorias, setCategorias, 
        generarId, alertError, setAlertError, alert, setAlert, setEditId, limpiarInputs, 
        categoriaId,forceUpdate } = useContext(CategoriaContext)
    
    const [alertEdit, setAlertEdit] = useState(false)

    const handleSubmit = e => {
        e.preventDefault();
        const newCategory = {
            name: name.value,
            linkLogo: linkLogo.value,
            descripcion: descripcion.value,
            codSegurity: codSegurity.value,
        }
        if(categoriaId[0]?.id) {
            newCategory.id = categoriaId[0].id
            updateCategory(newCategory)
            const categoriasActualizadas = categorias.map(catState => catState.id === categoriaId[0].id ? newCategory : catState)
            setCategorias(categoriasActualizadas)
            setAlertEdit(true)
            limpiarInputs()
        } else {
            if(name.value === '' || linkLogo.value === '' || descripcion.value === '' || codSegurity.value === '') {
                setAlertError(true)
                setTimeout(() => {
                    setAlertError(false)
                }, 2500);
                return
            }
            newCategory.id = generarId()
            
            addCategories(newCategory)
            setAlert(true)

            limpiarInputs()
            
            forceUpdate()

        }
        setTimeout(() => {
            setAlert(false)
            setAlertEdit(false)
        }, 3000);
    }

    const editCat = (id) => {
        setEditId(id)
    }
  
    return (
        <DivVideo>
            
            <Formulario handleSubmit={handleSubmit} />

            <SuccessAlert alert={alert} setAlert={setAlert} />
            <AlertMessageEdit alert={alertEdit} setAlert={setAlertEdit} />
            <AlertMessage alertError={alertError} setAlertError={setAlertError} />

            <ListaCategorias categorias={categorias}  editCat={editCat} />
        </DivVideo>
    )
}

export default FormCategoria

const DivVideo = styled('div')`
    max-width: 1440px;
    margin: 2rem auto;
    margin-top: 100px;
    padding: 0 10px;
`
