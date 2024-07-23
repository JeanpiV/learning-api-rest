
export const getDataAll = async () =>{

    try {
        
        const resp = await fetch(`https://retoolapi.dev/VJXfFV/data`)
        
        if (!resp.ok) {

            throw new Error(`error traido por response: ${resp.statusText}`)
        }

        const data = await resp.json()
    console.log(data)
        return data
       

    } catch (error) {
     
        console.error(`Error no manejable: ${error}`)
    }



}