import { render } from "../App.js"
import { getDataAll } from "./get_data.js"
import { pagesData } from "./get_data_page.js"
import { editUser } from "./edit_user.js"


export const createTable = async (id) =>{

    let infoUsers

    infoUsers = await pagesData(id)

    if (id == 0) {
        
        infoUsers = await getDataAll()
    }
   
    const table = document.getElementById("table-data")

    table.innerHTML=``

    for(const user of infoUsers){
       table.innerHTML += `
        <tr>
            <td>${user.id}</td>
            <td>${user.nombre}</td>
            <td>${user.apellido}</td>
            <td>${user.email}</td>
            <td>
            <button type="button" class="get-info btn btn-primary" data-id="${user.id}">Edit</button>
            <button type="button" class="delete-user btn btn-warning">Delete</button>
            </td>
            
        </tr>`    
    }

    document.querySelectorAll(".get-info").forEach(button => {
        button.addEventListener("click",  function(e) {
            
            const id = button.getAttribute("data-id")
            editUser(id)
           
        });
    });


    document.querySelectorAll(".delete-user").forEach(button =>{
        button.addEventListener('click', async function (e){

            const row = e.currentTarget.closest("tr")

            const cells = row.querySelectorAll("td")
            
            const data = Array.from(cells).slice(0,1).map(cell => cell.textContent)
           
            delUser(data[0])

        })
    })
}