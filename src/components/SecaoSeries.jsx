import CardSerie from "./CardSerie";

export default function series(props){
    const {series} = props
    console.log(series)
    return (
      <div className="flex flex-wrap">
          
          { series.map(series => <CardSerie series={series} />) }

      </div>
      
    )
}