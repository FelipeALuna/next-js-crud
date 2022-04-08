import { useState } from "react";

export default function useSwitch() {
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
    const exibirFormulario = ()=> setVisivel('form')
    const exibirTabela = ()=> setVisivel('tabela')

    return{
        formularioVisivel : visivel === 'form',
        tabelaVisivel: visivel === 'tabela',
        exibirTabela,
        exibirFormulario
    }
}