import axios from "../config/axios";

export async function getNewsTypeList(){
    try {
        const data = await axios.get("/api/newsType");
        return data.data;
    } catch (error) {
        return error
    }
}

export async function insertType({code, name, des}){

    try {
        const data = await axios.post("/api/newsType",{
            code,
            name,
            des,
        });
        return data.status;
    } catch (error) {
        return error;
    }
}
export async function deleteType(id){
    try {
        let data = await axios.put(`/api/newsType/${id}`);
        return data;
    } catch (error) {
        return error;
    }
}