import useGuia from "../hooks/useGuia"
import Pais from "./Pais"

const Navegacion = () => {
    
    const { paises } = useGuia()
    
  return (
    <header>
        <nav className="h-36 overflow-y-scroll md:overflow-y-hidden md:w-full md:flex md:justify-around items-center p-3 text-center rounded-xl shadow-xl bg-nav">
            {paises.map(pais => (
                <Pais 
                    key={pais.id}
                    pais={pais}
                />
            ))}
        </nav>
    </header>
  )
}

export default Navegacion