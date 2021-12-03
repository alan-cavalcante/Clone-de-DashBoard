import { useContext } from "react";
import AppContext from "../context/AppContext"; //Importa o contexto criado

const useAppData = () => useContext(AppContext)

export default useAppData