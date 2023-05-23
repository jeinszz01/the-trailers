
export async function addCategories(category) {
    try {
        const url = 'https://trailers-json.onrender.com/categorias'
        await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(category)
        })
    } catch (error) {
        console.log('erro al guardar categoria',error);
    }
}

export async function obtenerCategories() {
    try {
        const url = 'https://trailers-json.onrender.com/categorias'
        const request = await fetch(url)
        const data = await request.json()
        return data
    } catch (error) {
        console.log('error al obtener las categorias',error);
    }
}
export async function obtenerCategoria(id) {
    try {
        const url = `https://trailers-json.onrender.com/categorias/${id}`
        const request = await fetch(url)
        const data = await request.json()
        return data
    } catch (error) {
        console.log('error al obtener las categorias',error);
    }
}

export async function deleteCategory(id) {
    try {
        const url = `https://trailers-json.onrender.com/categorias/${id}`
        const request = await fetch(url, {
            method: 'DELETE',
        })
        await request.json()
    } catch (error) {
        console.log('error al eliminar categorias',error);
    }
}

export async function updateCategory(categoriaId) {
    try {
        const url = `https://trailers-json.onrender.com/categorias/${categoriaId.id}`
        const request = await fetch(url, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(categoriaId)
        })
        await request.json()
    } catch (error) {
        console.log('error al editar la categoria',error);
    }
}
