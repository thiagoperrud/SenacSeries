import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Link from 'next/link';

export default function Header() {
    return (
    <header className="flex justify-between w-100 bg-slate-800">

            <Link href='/' className="flex m-4 text-amber-400">
            <SportsEsportsIcon className="text-4xl" />
            <h1 className="text-4xl">Senac Jogos</h1>
            </Link>

        <Link className="m-4" href="/sobre">Sobre</Link>
    </header>
    )
}