import { useRouter } from "next/router"

const Rutas = () => {
    const router = useRouter() 
    
    const turistaRutas = [
        {ruta:1, nombre:"Inicio", url:"/"},
        {ruta:2, nombre:"Resumen", url:"/resumen"},
        {ruta:3, nombre:"Total", url:"/total"}
    ]
    
    
    return (
    <div className={`flex justify-around p-3 text-2xl font-semibold bg-card`}>
        {turistaRutas.map( route => (
            <button
                key={route.ruta}
                onClick={() => {
                    router.push(route.url)
                }}
                className= 'bg-nav py-1 px-2 shadow-2xl rounded-xl hover:bg-title border-2 border-transparent hover:text-white hover:border-white hover:border-2'
            >
                {route.nombre}
            </button>
        ))}
    </div>
  )
}

export default Rutas