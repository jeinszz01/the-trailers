import { useContext, useState } from "react"
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import ModalDelete from "./ModalDelete"
import styled from "@emotion/styled"
import { deleteCategory } from "../../infrastructure/Categorias"
import CategoriaContext from "../../Context/CategoriaProvider"


const ListaCategorias = ({ editCat}) => {

    const { categorias, setCategorias } = useContext(CategoriaContext)

    const [open, setOpen] = useState(false)
    const [deleteID, setDeleteID] = useState('')
 
    const eliminarCat = (id) => {
        setDeleteID(id)
        setOpen(true)
        console.log('eliminando categ', id)
    }

    const handleDeleteItem = () => {
        const cateUpdate = categorias.filter(c => c.id !== deleteID )
        setCategorias(cateUpdate)
        
        deleteCategory(deleteID)
        setOpen(false)

    }

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{backgroundColor: '#ffb561', fontWeight: '700'}}>Nombre</TableCell>
                            <TableCell sx={{backgroundColor: '#ffb561', fontWeight: '700'}} align="right">Descripción</TableCell>
                            <TableCell sx={{backgroundColor: '#ffb561', fontWeight: '700'}} align="right"><SpanEditDele>Editar &#9997;</SpanEditDele></TableCell>
                            <TableCell sx={{backgroundColor: '#ffb561', fontWeight: '700'}} align="right"><SpanEditDele>Remover &#10060;</SpanEditDele></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {categorias.map((row) => (
                        <TableRow
                           key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >   
                        
                            <TableCell component="th" scope="row">{row.name}</TableCell>
                            <TableCell align="right">{row.descripcion}</TableCell>
                            
                            <TableCell align="right"><Button onClick={() => editCat(row.id)}>Editar</Button></TableCell>
                            <TableCell align="right"><Button color="error" onClick={() => eliminarCat(row.id)}>Eliminar</Button></TableCell>
                            
                        </TableRow>

                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {deleteID==='' ? '' : <ModalDelete open={open} handleDeleteItem={handleDeleteItem} setOpen={setOpen} />}
            
        </>
    )
}

export default ListaCategorias

const SpanEditDele = styled('span')`
    white-space: nowrap;
`