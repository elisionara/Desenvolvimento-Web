import axios from "axios";

async function getPoints(){
    const response = await axios.get("http://localhost:3333/points");
    return response.data;
}

export default getPoints