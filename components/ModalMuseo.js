import useGuia from "../hooks/useGuia"
import { useState, useEffect } from "react"
import { formatearDinero } from "../helpers/helpers"
import Image from "next/image"

const ModalMuseo = () => {
    
    const {pedido, museo, handleAgregarPedido, handleChangeModal} = useGuia()
    const [cantidad, setCantidad] = useState(1)
    const [edicion, setEdicion] = useState(false)
    
    useEffect(() => {
        if (pedido.some( (ped) => ped.id === museo.id)) {
            const museoEdicion = pedido.find( (ped) => ped.id === museo.id)
            setEdicion(true)
            setCantidad(museoEdicion.cantidad)
        }
    },[pedido, museo])
    
  return (
    <div className="flex flex-col text-center p-5 border-2 rounded-lg bg-card">
        <button
            className="text-end mb-3"
            onClick={handleChangeModal}
        >
            X
        </button>
        <Image src={`/${museo.imagen}.webp`} width={200} height={200} alt={`Imagen ${museo.nombre}`} className="m-auto rounded-xl mb-2"/>
        <p className="text-xl text-white font-bold">{museo.nombre}</p>
        <p className="font-semibold text-white text-lg">{formatearDinero(museo.precio * cantidad)}</p>
        <div className="flex justify-center items-center gap-x-4">
            <button
                type="button"
                onClick={() => {
                    if (cantidad <= 1) return
                    setCantidad(cantidad - 1)
                }}
                className=" font-bold text-white text-5xl"
            >
                -
            </button>
                <p className="font-bold text-white text-3xl">{cantidad}</p>
            <button
                type="button"
                onClick={() => {
                    if (cantidad >= 3) return
                    setCantidad(cantidad + 1)
                }}
                className="font-bold text-white text-5xl"
            >
                +
            </button>
        </div>
        <button
            type="button"
            className= 'bg-nav font-medium mt-2 py-1 px-2 shadow-2xl rounded-lg'
            onClick={() => 
                handleAgregarPedido({...museo, cantidad})
            }
        >
            {edicion ? "Guardar cambios" : "Agregar pedido"}
        </button>
    </div>
  )
}

export default ModalMuseo