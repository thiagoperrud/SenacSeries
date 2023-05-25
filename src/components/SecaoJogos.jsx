import CardJogo from "./CardJogo";

export default function jogos(props){
    const {jogos} = props
    console.log(jogos)
    return (
      <div className="flex flex-wrap">
          
          { jogos.map(jogo => <CardJogo jogo={jogo} />) }

      </div>
      
    )
}