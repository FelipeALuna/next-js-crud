import { useEffect, useState } from "react"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import useSwitch from "./useSwitch"

export default function useClientes() {
    const repo: ClienteRepositorio = new ColecaoCliente()
    
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])
    const {exibirTabela , exibirFormulario,tabelaVisivel,formularioVisivel} = useSwitch();
    useEffect(obterTodos, [])

    function obterTodos() {
        repo.obterTodos()
            .then((data) => {
                setClientes(data)
                exibirTabela()
            })

    }
    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente)
        exibirFormulario()

    }
    function novoCliente() {
        setCliente(Cliente.vazio())
        exibirFormulario()

    }
    async function excluirCliente(cliente: Cliente) {
        await repo.excluir(cliente)
        obterTodos();
    }

    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente)
        obterTodos()
    }
    return {
        salvarCliente,
        selecionarCliente,
        excluirCliente,
        novoCliente,
        obterTodos,
        cliente,
        clientes,
        tabelaVisivel,
        formularioVisivel,
        exibirTabela
    }

}