import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';




export const fetchApi = async (url) => {
    

    
    const {data} = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'ef44e041demshcabfa1f30cfdbf8p1994b8jsn98cafa3d52e0'
        }
    })
    return data;
}

