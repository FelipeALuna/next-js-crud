
import Layout from './components/Layout'
import Tabela from './components/Tabela'
import Botao from './components/Botao'
import Formulario from './components/Formulario'
import useClientes from '../hooks/useClientes'

export default function Home() {

  const {
    tabelaVisivel,
    excluirCliente,
    salvarCliente,
    selecionarCliente,
    novoCliente,
    cliente,
    clientes,
    exibirTabela,
  } = useClientes();

  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500 text-white
    `}>
      <Layout titulo="Cadastro Simples">

        {tabelaVisivel ? (

          <>
            <div className={`flex justify-end align-center`}>
              <Botao className="mb-4" cor='green' onClick={() => novoCliente()}>Novo cliente</Botao>
            </div>
            <Tabela clientes={clientes} clienteSelecionado={selecionarCliente} clienteExcluido={excluirCliente}></Tabela>
          </>
        ) : (
          <Formulario cliente={cliente} cancelado={() => { exibirTabela }} clienteMudou={salvarCliente}></Formulario>
        )}
      </Layout>
    </div>
  )
}
