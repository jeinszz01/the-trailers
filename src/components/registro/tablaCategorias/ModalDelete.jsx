import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { obtenerCategoria } from '../../infrastructure/Categorias'
import { useEffect, useState } from 'react'

const ModalDelete = ({open, handleDeleteItem, setOpen}) => {
    
    return (
        
           <Dialog
                open={open}
                onClose={() => setOpen(!open)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Esta seguro de eliminar la categoría?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Si esta seguro de eliminar la categoria haga click en el botón Aceptar.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(!open)}>Cancelar</Button>
                    <Button onClick={() => handleDeleteItem()} autoFocus>
                        Aceptar
                    </Button>
                </DialogActions>
            </Dialog> 
        
        
    )
}

export default ModalDelete