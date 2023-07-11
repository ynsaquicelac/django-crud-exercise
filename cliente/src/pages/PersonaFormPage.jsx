import { useEffect } from "react"
import { useForm, set } from "react-hook-form"
import { createPersona, deletePersona, updatePersona, getPersona } from "../api/personas.api"
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'

export function PersonaFormPage() {
    const { register, handleSubmit, formState: {
        errors
    }, setValue } = useForm();
    const navigate = useNavigate();
    const { id } = useParams()

    const onSubmit = handleSubmit(async data => {
        if (id) {
            await updatePersona(id, data)
            toast.success('Persona Actualizada', {
                position: "bottom-right",
            });
        } else {
            await createPersona(data)
            toast.success('Persona Creada', {
                position: "bottom-right",
            });
        }
        navigate("/personas")
    })

    useEffect(() => {
        async function loadPersona() {
            if (id) {
                const res = await getPersona(id)
                console.log(res)
                setValue('nombre', res.data.nombre)
                setValue('edad', res.data.edad)
                setValue('sexo', res.data.sexo)
                setValue('nacionalidad', res.data.nacionalidad)
            }
        }
        loadPersona()

    }, [])

    return (
        <div className="maw-w-xl mx-auto">
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="nombre"
                    className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                    {...register("nombre", { required: true })}
                />
                {errors.nombre && <span>This field is required</span>}
                <input type="number" placeholder="edad"
                    className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                    {...register("edad", { required: true })} />
                {errors.edad && <span>This field is required</span>}
                <select placeholder="sexo"
                    className="bg-zinc-700 p-3 rounded-lg block w-full mb-3" 
                    {...register("sexo", { required: true })}>
                    <optgroup label = "Seleccione Sexo">

                    <option value="femenino">Femenino</option>
                    <option value="masculino">Masculino</option>
                    </optgroup>
                </select>
                {errors.sexo && <span>This field is required</span>}
                <input type="text" placeholder="nacionalidad"
                    className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                    {...register("nacionalidad", { required: true })} />
                {errors.nacionalidad && <span>This field is required</span>}
                <button
                    className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">
                    Guardar
                </button>

            </form>
            {id &&
                <div className="flex justify-end">
                    <button
                        className="bg-red-500 p-3 rounded-lg w-48 mt-3"
                        onClick={async () => {
                            const accepted = window.confirm('Estas seguro?');
                            if (accepted) {
                                await deletePersona(id)
                                toast.success('Persona eliminada', {
                                    position: "bottom-right",
                                });
                                navigate('/personas')
                            }
                        }}>Eliminar</button>
                </div>}
        </div>
    )
}