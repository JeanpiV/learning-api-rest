export const toggleModal = () =>{

    const modal = document.getElementById("modal")
    const main = document.getElementById("main")

      
        if (!modal.hasAttribute("open")) {
            main.classList.add("modal-is-opening")
            modal.setAttribute("open","")
            setTimeout(() => {
                main.classList.remove("modal-is-opening");
              }, 400);
            
        } else {
            main.classList.add("modal-is-closing")
            setTimeout(() => {
                modal.removeAttribute("open") 
                main.classList.remove("modal-is-closing");
              }, 400);
            
            
    
        }
        
}