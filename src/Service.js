
const appData={
    id: import.meta.env.VITE_APP_ID,
    key: import.meta.env.VITE_APP_KEY,

}

// https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=d919d1e2&app_key=%208d7abda183407373b9d85c1f064f7427%09

export const fetchData= async (defaultQuery) => {
    
    const {id,key}= appData;

    try {
        
        let url2=`https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${id}&app_key=${key}`

    
        const data=await fetch(url2)
        const response= await data.json()
        return response
        

            


    } catch (error) {
        return error
    }
}

export const fetchTabData= async (defaultQuery) => {
    const {id,key}= appData;

    try {
        const data = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${id}&app_key=${key}`)
        const response= await data.json()
        return response

    } catch (error) {
        return error
    }
}

