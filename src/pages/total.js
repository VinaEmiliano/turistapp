import Layout from "../../layout/Layout"
import useGuia from "../../hooks/useGuia"
import { useEffect, useCallback } from "react"
import { formatearDinero } from "../../helpers/helpers"

const Total = () => {
  
  const {pedido, nombre, setNombre, submitAlPedido, total} = useGuia()
  
  const comprobarPedido = useCallback(() => {
    return pedido.length === 0 || nombre === '' || nombre.length < 3
  },[pedido, nombre])
  
  useEffect (() => {
    comprobarPedido()
  }, [pedido])
  
  
  return (
    <>
      <Layout>
          <h1 className="text-xl md:text-3xl my-4 w-4/5 m-auto">Total</h1>
          <div>
            <form
              onSubmit={() => {submitAlPedido()}}
              className="flex flex-col gap-y-4 w-8/12 md:gap-y-6 md:w-6/12 lg:w-5/12 m-auto text-lg md:text-xl p-9 bg-card rounded-2xl"
            >
              <label htmlFor="nombre" className="block font-semibold text-white">
                Ingresa tu nombre
              </label>
              <input 
                type="text"
                id="nombre"
                placeholder="Emiliano"
                value={nombre}
                onChange={e => setNombre(e.target.value)}
                className="text-center rounded-md"
              />
              <p className="text-white">Total a pagar: <span className="font-semibold text-white">{formatearDinero(total)}</span></p>
              <input 
              type="submit"
              value="Realizar pedido"
              className={`${comprobarPedido() ? 'bg-black' : 'bg-nav'} rounded-md shadow-2xl`}
              disabled={comprobarPedido()}
              />
            </form>
          </div>
      </Layout>
    </>
  )
}

export default Total