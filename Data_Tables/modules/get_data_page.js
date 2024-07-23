export const pagesData = async (page = 1) => {

    try {
        
        const response = await fetch(`https://retoolapi.dev/VJXfFV/data?_page=${page}&_limit=10`)
            
        if(!response.ok){
            throw new Error(`error generado en la paginacion ${response.statusText}`)
        }

        const data = await response.json()

        console.log(data)
        return data

    } catch (error) {
        console.log(error)
    }
}