import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';

export default function CardSerie({series}) {

  const [favorito, setFavorito] = useState(false)
  const poster = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/" + series.poster_path

  return (
    <div className="flex flex-col p-3 w-56" >
      <div className='relative'>
        {
           favorito ?
           <FavoriteIcon className='absolute right-0 top-2 cursor-pointer' onClick={ () => setFavorito(false) } /> :
           <FavoriteBorderIcon className='absolute right-0 top-2 cursor-pointer' onClick={ () => setFavorito(true)} />
        }

        <img className="rounded-lg" src={poster} />

      </div>
      <h4 className="text-xl my-2 line-clamp-1 w-fit">{series.name}</h4>
      <div className="flex justify-center items-center">
        <StarIcon className='text-amber-400' />
        <span className="text-lg">{series.vote_average}</span>
      </div>
      <a href="#" className="rounded-lg bg-sky-500 p-2 text-center">Detalhes</a>

    </div>
  )
}