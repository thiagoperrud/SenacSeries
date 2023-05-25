import CardFilme from "@/components/CardJogo"
import SecaoJogos from "@/components/SecaoJogos"
import Titulo from "@/components/Titulo"
import Header from "@/components/header"


export default function Home() {

  const jogos = [
    {
      titulo: "The Witcher 3",
      nota: "9.0",
      poster: "https://upload.wikimedia.org/wikipedia/pt/0/06/TW3_Wild_Hunt.png"
    },
    {
      titulo: "Dark Souls 3",
      nota: "9.5",
      poster: "https://1.bp.blogspot.com/-9b6F82v_5h4/VYLFCSiOOyI/AAAAAAAAR9w/xSwijRG_uSg/s1600/dark-souls-iii-capa.png"
    }
  ]

  return (
    <>
      <Header />




      <div>
        <img className="h-72 brightness-50 object-cover w-screen" src="https://www.wallpapertip.com/wmimgs/14-143488_kategorien-wallpapertags-abstract-data-src-most-popular-battlefield.jpg" />
      </div>

      <main className="flex min-h-screen flex-col justify-between px-24">

        <Titulo>Jogos em Alta</Titulo>
        <SecaoJogos jogos={jogos} />

        <Titulo>Gameplays em Alta</Titulo>
        <Titulo>Lançamentos</Titulo>


      </main>
    </>
  )
}
