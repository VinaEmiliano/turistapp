import Image from "next/image"
import axios from "axios"
import { toast } from "react-toastify";



const Orden = ({orden}) => {
    const {nombre, fecha, total, id, pedido} = orden
    
    const completarOrden = async () => {
        try {
            await axios.post(`/api/ordenes/${id}`)
            toast.success('Orden completada')
        } catch (error) {
            toast.error('Ocurrio un error')
        }
    }
    
  return (
    <div className="text-center w-8/12 m-auto my-4 p-3 shadow-2xl rounded-xl bg-card">
        <div className="mb-1">
            <p>Orden: <span>{id}</span></p>
            <p>Cliente: <span>{nombre}</span></p>
        </div>
        {pedido.map( entrada => (
            <div key={entrada.id} className="flex justify-around">
                <Image src={`/${entrada.imagen}.webp`} width={200} height={200} alt={`imagen entrada ${entrada.nombre}`} className="rounded-xl"/>
                <div className="flex flex-col justify-center gap-2">
                <p>{entrada.nombre}</p>
                <p>{entrada.precio}</p>
                <p>{entrada.cantidad}</p>
                </div>
            </div>
        ))}
        <div>
            <button
                type="button"
                onClick={completarOrden}
            >
                Completar orden
            </button>
        </div>
    </div>
  ) 
}

export default Orden