import Layout from "../../layout/Layout"
import useGuia from "../../hooks/useGuia"
import Pedido from "../../components/Pedido"

const Resumen = () => {
  
  const {pedido} = useGuia()
  
  return (
    <>
      <Layout
        pagina={'Resumen'}
      >
        <h1 className="text-xl md:text-3xl my-4 w-4/5 m-auto">Resumen del pedido</h1>
        <div>
          {pedido.length === 0 ? <p className="flex justify-center text-xl md:text-3xl my-10 w-3/6 m-auto">aun no hay productos</p> : pedido.map(ped => (
            <Pedido 
              key={ped.id}
              ped={ped}
            />
          ))}
        </div>
      </Layout>
    </>
  )
}

export default Resumen