import React from 'react';
import { useNavigate } from "react-router-dom";

export function PersonaCard({ persona }) {

    const navigate = useNavigate()
    return (
        <div
        onClick={() => {
            navigate(`/personas/${persona.id}`)
        }} 
        className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer" >
            <h1 className="font-bold uppercase">{persona.nombre}</h1>
            <p className="text-slate-400">{persona.nacionalidad}</p>

        </div>
    );
};
