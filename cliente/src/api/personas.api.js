import axios from 'axios';

const personaApi = axios.create({
    baseURL: 'http://localhost:8000/personas/api/v1/personas/'
})

export const getAllPersonas = () => {
    return personaApi.get("/");
}

export const getPersona = (id) => {
    return personaApi.get(`/${id}/`);
}

export const createPersona = (persona) => {
    return personaApi.post("/", persona)
}

export const deletePersona = (id) => {
    return personaApi.delete(`/${id}/`)
}

export const updatePersona = (id, persona) => {
    return personaApi.put(`/${id}/`, persona)
}