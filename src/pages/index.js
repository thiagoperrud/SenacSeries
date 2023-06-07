import CardSerie from "@/components/CardSerie"
import SecaoSeries from "@/components/SecaoSeries"
import Titulo from "@/components/Titulo"
import Header from "@/components/header"
import { useState } from "react"


export default function Home() {
  const [series, setSeries] = useState([])
  const [seriesAmazon, setAmazon] = useState([])

  const url = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_watch_providers=amazon';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNWRmZjU3YjRmOWNjMDFiYjNlYWVkMzJkYzU5Yzc1ZiIsInN1YiI6IjY0ODEwNzNlOTkyNTljMDBhY2NhZDFiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dMUF8czUM67HQ5BZB_pAqiqRhwsdiuPs5BtfZDuDoi8'
    }
  };

  fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=pt-BR&page=1&sort_by=popularity.desc', options)
    .then(response => response.json())
    .then(response => setSeries(response.results))
    .catch(err => console.error(err));

  fetch(url, options)
    .then(res => res.json())
    .then(res => setAmazon(res.results))
    .catch(err => console.error(err));

  return (
    <>
      <Header />




      <div>
        <img className="h-72 brightness-50 object-cover w-screen" src="https://wallpapers.com/images/featured/9pvmdtvz4cb0xl37.jpg" />
      </div>

      <main className="flex min-h-screen flex-col px-24">

        <Titulo>Seriados em Alta</Titulo>
        <SecaoSeries series={series} />

        <Titulo>Series da Amazon</Titulo>
        <SecaoSeries series={seriesAmazon} />


      </main>
    </>
  )
}
