export const createUser = async () =>{

    try {
        
        const response = await fetch(`https://retoolapi.dev/VJXfFV/data`, {method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error(`error generado en la creacion de datos create_user ${response.statusText }`)
        }

        const validator = response.json()
        console.log(validator)

    } catch (error) {

        console.log(error)
        
    }
}