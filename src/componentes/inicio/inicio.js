import {Header} from "../header/header.js"
import "../inicio/inicio.css"
import { Titulo } from "../titulo/titulo.js"
export const Inicio=()=>{
    return(
        <div className="inicio">
            <Header></Header>
            <Titulo></Titulo>
        </div>
    )
}