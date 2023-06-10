import Layout from "../../layout/Layout"
import useGuia from "../../hooks/useGuia"
import Museo from "../../components/Museo"

export default function Home() {
  
  const { paisActual } = useGuia()

  return (
    <>
      <Layout
        pagina={paisActual?.nombre}
      >
        <main className="w-10/12 m-auto">
        <div className="">
          <p className="text-2xl md:text-3xl my-4 w-4/5 m-auto">{paisActual?.nombre}</p>
          <p className="text-xl md:text-2xl">Selecciona los museos de tu interes</p>
        </div>
          <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 md:justify-items-center">
          {paisActual?.museos?.map( mus => (
            <Museo 
              key={mus.id}
              mus={mus}
            />
          ))}
          </div>
        </main>
      </Layout>
    </>
  )
}
