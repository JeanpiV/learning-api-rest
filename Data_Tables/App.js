
import { createTable } from "./modules/create_table.js";
import { delUser } from "./modules/delete_user.js";
import { editUser } from "./modules/edit_user.js";
import { toggleModal } from "./modules/open_modal.js";

export async function render(pages) {
    //creando tabla inicial
    await createTable(pages)
    //botones modal 
    const btnModalOpen =  document.getElementById("btn-modal")

    const btnModalClose = document.getElementById("close-modal")

    //botones para el paginado 
    const btnAll = document.getElementById("all")

    const btnsPages = document.querySelectorAll(".pages")

    

    //enevnto apertura modal
    btnModalOpen.addEventListener('click', (e) => {
        toggleModal()
        
    })

    //evento de cierre de modal
    btnModalClose.addEventListener('click', (e) =>{
        toggleModal()
    })


    // evento paginado all
    btnAll.addEventListener('click', (e)=>{
        e.preventDefault()

        createTable(0)
    })

    //extraemos los botones y aplicamos un escucha para el paginado con su valor de page
    btnsPages.forEach(button =>{
        button.addEventListener("click", async function(e){

            let btn = e.currentTarget.closest("button").textContent
            
           await createTable(btn)

        })

    })


    //traemos todos los botones de edit y encerramos los valores de cada
     /* await  document.querySelectorAll(".get-info").forEach(button => {
        button.addEventListener("click", async function(e) {
            
            const row = e.currentTarget.closest("tr");


            const cells = row.querySelectorAll("td");
            const data = Array.from(cells).slice(0, 4).map(cell => cell.textContent);

            await editUser(data[0])


            
        });
    }); */

   
   /*  document.querySelectorAll(".delete-user").forEach(button =>{
        button.addEventListener('click', async function (e){

            const row = e.currentTarget.closest("tr")

            const cells = row.querySelectorAll("td")
            
            const data = Array.from(cells).slice(0,1).map(cell => cell.textContent)
           
            delUser(data[0])

        })
    }) */

    
   
}
render()