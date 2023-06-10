import Head from "next/head"
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



const AdminLayout = ({children, pagina}) => {
    return(
        <>
            <Head>
                <title>
                    TuristAppp - {pagina}
                </title>
                <meta name="description" content="compra de tickets online"/>
            </Head>
            <div className="text-center p-3 bg-title">
                <p>Lista de pedidos</p>
            </div>
            <main>
                {children}
            </main>
            <ToastContainer />
        </>
    )
}

export default AdminLayout