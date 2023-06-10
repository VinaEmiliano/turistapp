import Head from "next/head"
import Modal from "react-modal"
import Navegacion from "../components/Navegacion"
import Rutas from "../components/Rutas";
import ModalMuseo from "../components/ModalMuseo";
import useGuia from "../hooks/useGuia";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding:'0px',
    },
  };
  Modal.setAppElement('#__next');


const Layout = ({children, pagina}) => {
    const {modal} = useGuia()
    
  return (
    <>
        <Head>
            <title>
                TuristAppp - {pagina}
            </title>
            <meta name="description" content="compra de tickets online"/>
        </Head>
        <div>
          <div className="text-center p-3 bg-title">
            <p className="text-2xl">Bienvenido a TuristApp</p>
          </div>
            <Rutas />
            <Navegacion />
            <main>
                {children}
            </main>
        </div>
        {modal && (
          <Modal
            isOpen={modal}
            style={customStyles}
          >
            <ModalMuseo />
          </Modal>
        )}
        
        <ToastContainer />
    </>
  )
}

export default Layout