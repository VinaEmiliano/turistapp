import Image from "next/image"
import axios from "axios"
import { toast } from "react-toastify";
import { formatearDinero } from "../helpers/helpers";



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
    <div className="text-center w-8/12 md:w-5/12 lg:w-3/12 m-auto my-4 p-3 shadow-2xl rounded-xl bg-card">
        <div className="mb-1 text-white font-bold">
            <p>Orden: <span>{id}</span></p>
            <p>Cliente: <span>{nombre}</span></p>
        </div>
        {pedido.map( entrada => (
            <div key={entrada.id} className="flex flex-col items-center justify-around border-2 border-white p-2 rounded-xl mb-2">
                <Image src={`/${entrada.imagen}.webp`} width={200} height={200} alt={`imagen entrada ${entrada.nombre}`} className="rounded-xl"/>
                <div className="flex flex-col justify-center gap-1 text-white font-medium">
                <p>{entrada.nombre}</p>
                <p>Precio: <span className="font-semibold">{formatearDinero(entrada.precio)}</span></p>
                <p>Cantidad: <span className="font-semibold">{entrada.cantidad}</span></p>
                </div>
            </div>
        ))}
        <div>
            <button
                type="button"
                onClick={completarOrden}
                className= 'bg-nav font-medium py-1 px-2 shadow-2xl rounded-lg'
            >
                Completar orden
            </button>
        </div>
    </div>
  ) 
}

export default Orden