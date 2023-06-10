import { useContext } from "react";
import GuiaContext from "../context/GuiaProvider";

const useGuia = () => {
    return useContext(GuiaContext)
}

export default useGuia