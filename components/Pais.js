import Image from 'next/image'
import useGuia from '../hooks/useGuia'

const Pais = ({pais}) => {
  
  const {nombre, icono, id} = pais
  const {handleClickPais, paisActual} = useGuia()
  
  return (
    <div className={`${paisActual?.id === id ? 'bg-card' : 'bg-fondo'} mb-2 m-auto w-fit shadow-2xl rounded-xl`}>
        <button
          className='p-3'
          type='button'
          onClick={() => {handleClickPais(id)}}
        >
          <Image src={`/${icono}.webp`} width={90} height={90} alt={`logo ${pais.nombre}`}/>
          <p>{nombre}</p>
        </button>
    </div>
  )
}

export default Pais