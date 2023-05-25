import Header from "@/Components/Header";

export default function Sobre() {
    return (
        <>
        <Header />
        <div className="flex flex-col items-center">
           <h1 className="text-4xl text-bold">Sobre o Senac Jogos</h1>
          <p className="text-2xl">Sistema realizado para estudos de React.</p>
        </div>
        </>
    )
}