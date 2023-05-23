
export async function  addVideo (video) {
    try {
        const url = 'https://trailers-json.onrender.com/videos'
        await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(video)
        })
    } catch (error) {
        console.log('erro al guardar video',error);
    }
}

