import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";



const GuiaContext = createContext()

const GuiaProvider = ({children}) => {
    
    const router = useRouter()
    
    const [paises, setPaises] = useState([])
    const [paisActual, setPaisActual] = useState({})
    
    const [museo, setMuseo] = useState({})
    const [modal, setModal] = useState(false)
    
    const [pedido, setPedido] = useState([])
    
    const [nombre, setNombre] = useState('')
    
    const [total, setTotal] = useState(0)
    
    useEffect(() => {
        const obtenerPaises = async () => {
            const {data} = await axios("/api/paises")
            setPaises(data)
        }
        obtenerPaises()
    }, [])
    
    useEffect(()=> {
        setPaisActual(paises[0])
    },[paises])
    
    useEffect(() => {
        const actualizarTotal = pedido.reduce((total, producto) =>  (producto.precio * producto.cantidad) + total, 0)
        setTotal(actualizarTotal)
    },[pedido])
    
    const handleClickPais = id => {
        const currentPais = paises.filter( pai => pai.id === id)
        setPaisActual(currentPais[0])
        router.push("/")
    }
    const handleSetMuseo = producto => {
        setMuseo(producto)
    }
    const handleChangeModal = () => {
        setModal(!modal)
    }
    
    const handleAgregarPedido = producto => {
        if (pedido.some( ped => ped.id === producto.id)) {
            
            const actualizarProducto = pedido.map(ped => 
                ped.id === producto.id ? producto : ped
            )
            setPedido(actualizarProducto)
        } else {
            setPedido([...pedido, producto])
            toast.success("Ticket adquirido con exito!")
        }
        setModal(false)
    } 
    
    const handleEditarCantidad = id => {
        const actualizarModal = pedido.filter( producto => producto.id === id)
        
        setMuseo(actualizarModal[0])
        setModal(!modal)
    }
    
    const handleEliminarMuseo = id => {
        const eliminarMuseo = pedido.filter( producto => producto.id !==id)
        setPedido(eliminarMuseo)
    }
    
    const submitAlPedido = async (e) => {
        try {
            await axios.post("/api/ordenes", {pedido, nombre, total, fecha: Date.now().toString()})
            
            setPaisActual(paises[0])
            setPedido([])
            setNombre('')
            setTotal(0)
            
            toast.success('Pedido realizado con exito')
            
            setTimeout(() => {
                router.push('/')
            }, 1000);
        } catch (error) {
            console.log(error)
        }
    }
    
    return(
        <GuiaContext.Provider
            value={{
                paises,
                paisActual,
                handleClickPais,
                handleSetMuseo,
                modal,
                handleChangeModal,
                museo,
                handleAgregarPedido,
                pedido,
                handleEditarCantidad,
                handleEliminarMuseo,
                nombre,
                setNombre,
                submitAlPedido,
                total
            }}
        >
            {children}
        </GuiaContext.Provider>
    )
}

export {GuiaProvider}
export default GuiaContext