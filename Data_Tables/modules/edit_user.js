import { getUserId } from "./get_user.js"
import { toggleModal } from "./open_modal.js"
import { sendEditUser } from "./send_edit.js"

export const editUser = async (id) =>{

    toggleModal()
    const user = await getUserId(id)
    
    let inputName = document.getElementById("name")
    let inputApellido = document.getElementById("apellido")
    let inputEmail = document.getElementById("email")
    

    inputName.value = user.nombre
    inputApellido.value = user.apellido
    inputEmail.value = user.email
    


    await document.getElementById("btn-edit-confirm").addEventListener("click",  async (e)=>{
        e.preventDefault()

        const dataUser = {id: id, nombre: inputName.value, apellido: inputApellido.value, email: inputEmail.value}
       
        await sendEditUser(dataUser)
    })
    
}