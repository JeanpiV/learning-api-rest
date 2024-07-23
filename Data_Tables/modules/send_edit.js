import { render } from "../App.js";
import { toggleModal } from "./open_modal.js";

export const sendEditUser = async (user) =>{

    //el parametro lo volvemos legible o maipulable
    let data = user
    
    try {

        const response = await fetch(`https://retoolapi.dev/VJXfFV/data/${data.id}`, {
            method: "PUT",
            headers:{
                "Content-Type": "application/json",
                "Accept" : "application/json"
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            alert(`ocurrio un error intente nuevamente`)
            throw new Error(
                `ocurrio un problema en METHOD PUT ${response.statusText}`
            );

            
        }

            toggleModal()
            alert(`se actualizo correctamente ${response.ok}`)

 
        
    } catch (error) {
        console.log(`error en el editar usuario: ${error}`)
    }

    await render()

}