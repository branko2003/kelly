import axios from "./axios";

export const getReparacionesRequest = async () => axios.get("/proyectos");

export const getReparacionesclientesRequest = async (id) => axios.get(`/proyectos/cliente/${id}`);

export const createReparacionRequest = async (reparacion) => axios.post("/proyectos", reparacion);

export const updateReparacionRequest = async (id, reparacion) => axios.put(`/proyectos/${id}`, reparacion);

export const calificacionReparacionRequest = async (id, reparacion) => axios.patch(`/proyectos/${id}`, reparacion);

export const deleteReparacionRequest = async (id) => axios.delete(`/proyectos/${id}`);

export const getReparacionRequest = async (id) => axios.get(`/proyectos/${id}`);
