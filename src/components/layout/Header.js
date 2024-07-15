import Link from "next/link";

export default function Header() {
    return (
        <header className="flex items-center justify-between">
            <Link className="text-primary font-bold text-2xl" href="">
                Pizzrella
            </Link>
            <nav className="flex items-center gap-8 font-semibold text-gray-600">
                <Link href={''} className="hover:text-primary">Home</Link>
                <Link href={''} className="hover:text-primary">Menu</Link>
                <Link href={''} className="hover:text-primary" >Contact</Link>
                <Link href={''} className="hover:text-primary">About</Link>
                <Link href={''} className="bg-primary px-6 py-2 rounded-full text-white hover:text-black">Login</Link>
            </nav>
        </header>
    );
}