// const BASE_URL = "http://ec2-16-170-208-138.eu-north-1.compute.amazonaws.com";
const BASE_URL = () => "https://" + window.location.hostname;
//const BASE_URL = "http://localhost:5269";

export const fetchData = async (endpoint) => {
    try{
        let response = await fetch(`${BASE_URL()}/${endpoint}`);
        let jsonData = await response.json();
        return jsonData;
    }catch(error) {
        console.error(`Error fetching data at ${endpoint} : ${error}` )
        throw error;
    }
}

export const postData = async (endpoint, data) => {
    try{
        const response = await fetch(`${BASE_URL()}/${endpoint}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })

        if(response.ok){
            let responseData = await response.json();
            return responseData;
        }else {
            throw new Error('Error posting data');
        }
    }catch(error){
        console.error(`Error posting data at ${endpoint}: ${error}` )
    }
}