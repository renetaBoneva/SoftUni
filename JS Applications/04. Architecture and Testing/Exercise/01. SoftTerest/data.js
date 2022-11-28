import * as api from "./api.js";

const endpoint = {
    "getAllIdeas": "data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc",
    "getDetailsData": "data/ideas/"
    
}

export async function getAllIdeas(){
    let ideas = await api.get(endpoint.getAllIdeas)
    return ideas;
}

export async function getDetailsData(_id){
    let detailsData = await api.get(endpoint.getDetailsData + _id)
    return detailsData;
}