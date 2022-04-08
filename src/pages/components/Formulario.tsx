import { useState } from "react";
import Cliente from "../../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps{

    cliente:Cliente
    cancelado?: () => void
    clienteMudou?: (cliente:Cliente) => void
}

export default function Formulario(props:FormularioProps){
    const [nome,setNome] = useState(props.cliente?.nome ?? '');
    const [idade,setIdade] = useState(props.cliente?.idade ?? 0);
    const id = props.cliente?.id ?? null
    return(
        <div>
            {id ?(
                
                <Entrada texto="Código" tipo="text" valor={id} somenteLeitura={true}/>
            ) :false}
            <Entrada texto="Nome" tipo="text" valor={nome} valorMudou={setNome} className={`mb-4`}/>
            <Entrada texto="Idade" tipo="number" valor={idade} valorMudou={setIdade} className={`mb-4`}/>
                <div className="flex justify-end align-center mt-7">
                    <Botao onClick={()=> props.clienteMudou?.(new Cliente(nome,+idade,id))} cor='blue'  className={`mr-2`}>{id ? 'Alterar' : 'Salvar'}</Botao>
                    <Botao onClick={props.cancelado}>Cancelar</Botao>
                </div>
        </div>

    );
}