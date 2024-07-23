export const getUserId = async(id) =>{

    try {
        
        const resp = await fetch(`https://retoolapi.dev/VJXfFV/data/${id}`)

        if(!resp.ok){
            throw new Error(`respuesta de la api = ${resp.statusText}`)
        }

        let user = resp.json()

        return user

    } catch (error) {
        console.log(error)
    }
}