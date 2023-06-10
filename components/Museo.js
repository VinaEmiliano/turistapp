import { formatearDinero } from "../helpers/helpers"
import useGuia from "../hooks/useGuia"
import Image from "next/image"

const Museo = ({mus}) => {
    const {id, nombre, imagen, precio, paisId} = mus
    const { handleChangeModal, handleSetMuseo} = useGuia()

  return (
    <div className="flex flex-col mt-8 w-2/3 h-66 lg:h-96 p-3 text-center shadow-2xl rounded-xl bg-card">    
        <Image src={`/${imagen}.webp`} width={300} height={200} alt={nombre} className="rounded-xl h-48 m-auto"/>
        <p className="text-md lg:text-xl text-white font-bold">{nombre}</p>
        <p className="text-lg">Valor del ticket <span>{formatearDinero(precio)}</span></p>
        <button
            className="bg-nav w-2/3 m-auto py-1 px-2 shadow-2xl rounded-xl"
            type="button"
            onClick={ () => {
                handleSetMuseo(mus),
                handleChangeModal()
            }}
        >
            Comprar ticket
        </button>
    </div>
  )
}

export default Museo