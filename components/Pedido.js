import Image from "next/image"
import useGuia from "../hooks/useGuia"
import { formatearDinero } from "../helpers/helpers"


const Pedido = ({ped}) => {
  
  const {handleEditarCantidad, handleEliminarMuseo} = useGuia()
  
  return (
    <>
      <div className="flex flex-col gap-y-4 md:flex-row justify-around items-center text-center m-auto mb-4 w-8/12 p-3 shadow-2xl rounded-xl bg-card">
        <Image src={`/${ped.imagen}.webp`} width={200} height={200} alt={ped.nombre} className="rounded-xl"/>
        <div>
          <p>{ped.nombre}</p>
          <p>cantidad de tickets: {ped.cantidad}</p>
          <p>precio <span>{formatearDinero(ped.precio)}</span></p>
          <p>Subtotal: {formatearDinero(ped.precio * ped.cantidad)}</p>
        </div>
        <div className="flex md:flex-col gap-x-2">
          <button 
            className= 'bg-nav font-medium py-1 px-2 shadow-2xl rounded-lg'
            onClick={() => { handleEditarCantidad(ped.id) }}
          >
            Editar
          </button>
          <button 
            className= 'bg-nav font-medium md:mt-2 py-1 px-2 shadow-2xl rounded-lg'
            onClick={() => {handleEliminarMuseo(ped.id)}}
          > 
            Eliminar
          </button>
        </div>
      </div>
    </>
  )
}

export default Pedido