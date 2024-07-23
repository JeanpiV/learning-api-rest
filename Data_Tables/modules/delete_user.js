
import { render } from "../App.js"

export const delUser = async (id) =>{
    try {
        
        const response = await fetch(`https://retoolapi.dev/VJXfFV/data/${id}`, {method : "DELETE"})

        if (!response.ok) {
            throw new Error(`error generado en el metodo DELETE = ${ response.statusText}`)
        }
        const verificacion = await response.json()
    

        console.log(verificacion)
    } catch (error) {
        console.log(error)
    }

   await render()

}