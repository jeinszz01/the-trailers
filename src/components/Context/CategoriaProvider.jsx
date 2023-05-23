import { useState, useEffect, useReducer, createContext } from "react";
import { obtenerCategoria, obtenerCategories } from "../infrastructure/Categorias";

const CategoriaContext = createContext()

export const CategoriaProvider = ({children}) => {
    // states inputs
    const [name, setName] = useState({value: '', valid: null})
    const [linkLogo, setLinkLogo] = useState({value: '', valid: null})
    const [descripcion, setDescripcion] = useState({value: '', valid: null})
    const [codSegurity, setCodSegurity] = useState({value: '', valid: null})

    const [alertError, setAlertError] = useState(false)
    const [alert, setAlert] = useState(false)
    const [alertas, setAlertas] = useState([{vid: false, cate: false, cateEdit: false} ])
    const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);

    const [categorias, setCategorias] = useState([])
    const [categoriaId, setCategoriaId] = useState({})

    const [editId, setEditId] = useState('')

    useEffect(() => {
        const listarCategorias = async() => {
            const data = await obtenerCategories()
            setCategorias(data)
        }
        listarCategorias()
    }, [reducerValue])

    useEffect(() => {
        if(editId !== '') {
            const selectCategoriaID = async() => {
                const data = await obtenerCategoria(editId)
                setCategoriaId([data])
            }
            selectCategoriaID()
        }
        setEditId('')
    }, [editId])

    useEffect(() => {
        if(categoriaId[0]?.id) {
            console.log('editando...',categoriaId)
            setName({value:categoriaId[0].name, valid: null})
            setLinkLogo({value:categoriaId[0].linkLogo, valid: null})
            setDescripcion({value:categoriaId[0].descripcion, valid: null})
            setCodSegurity({value:categoriaId[0].codSegurity, valid: null})
        }
    }, [categoriaId])
    

    const generarId = () => {
        const random = Math.random().toString(36).substr(2)
        const fecha = Date.now().toString(36)
        return random + fecha
    }
    const limpiarInputs = () => {
        setName({value: '', valid: null})
        setLinkLogo({value: '', valid: null})
        setDescripcion({value: '', valid: null})
        setCodSegurity({value: '', valid: null})
        setCategoriaId({})
    }

    return (
        <CategoriaContext.Provider
            value={{
                name,
                setName,
                linkLogo,
                setLinkLogo,
                descripcion,
                setDescripcion,
                codSegurity,
                setCodSegurity,
                alertError,
                setAlertError,
                alert,
                setAlert,
                categorias,
                setCategorias,
                limpiarInputs,
                setEditId,
                generarId,
                categoriaId,
                forceUpdate
            }}
        >
            {children}
        </CategoriaContext.Provider>
    )
}

export default CategoriaContext