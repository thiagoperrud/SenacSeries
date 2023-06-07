import TheatersIcon from '@mui/icons-material/Theaters';
import Link from 'next/link';

export default function Header() {
    return (
    <header className="flex justify-between w-100 bg-slate-800">

            <Link href='/' className="flex m-4 text-amber-400">
            <TheatersIcon className="text-4xl" />
            <h1 className="text-4xl">Senac Séries</h1>
            </Link>

        <Link className="m-4" href="/sobre">Sobre</Link>
    </header>
    )
}