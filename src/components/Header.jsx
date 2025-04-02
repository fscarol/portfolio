import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <div className="w-100 flex justify-between">
                <Link href="/home">Home</Link>
                <h2>NavBar</h2>
            </div>
        </header>
    )
}
