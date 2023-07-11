import { useEffect, useState } from 'react';
import { getAllPersonas } from "../api/personas.api"
import { PersonaCard } from "./PersonaCard"


export function PersonaList() {
    const [personas, setPersonas] = useState([])
    useEffect(() => {
        async function loadPersonas() {
            const res = await getAllPersonas()
            setPersonas(res.data)
        }
        loadPersonas();
    }, []);

    return (
        <div>
            <h1>Listado de Personas</h1>
            <div className="grid grid-cols-3 gap-3">
                {personas.map(persona => (
                    <PersonaCard persona={persona} key={persona.id} />
                ))}

            </div>
        </div>
    );
};
