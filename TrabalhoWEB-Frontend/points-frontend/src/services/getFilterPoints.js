import axios from "axios";

async function getFilterPoints(data){
    const stringnMaterials = data.materials.join("-");
    const response = await axios.get(`http://localhost:3333/points?city=${data.city}&materials=${stringnMaterials}`);
    return response.data;
}

export default getFilterPoints