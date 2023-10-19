"use client"

import Link from "next/link";
import { signIn, useSession, signOut } from "next-auth/react";
// import { useRouter } from "next/router";

function Navbar () {

    const { data: session } = useSession()
    //const router = useRouter()

    return (
        <nav className="bg-slate-900 flex justify-between items-center py-3 px-24 text-white">
            <Link href="/">
                <h1 className="bg-purple-700 p-4 rounded border-white border">Next-Google</h1>
            </Link>
            { session?.user ? (
                <div className="flex gap-x-2 items-center">
                    <Link href="/dashboard">Dashboard</Link>
                    <p className="px-5 bg-gray-500 txt-white rounded-xl">{session.user.name} {session.user.email}</p>
                    <img src={session.user.image} alt={session.user.name} className="w-10 h-10 rounded-full cursor-pointer"/>
                    <button onClick={async () => { await signOut({callbackUrl: "/"}); /*router.push('/')*/ }} className="bg-red-500 px-3 py-2 rounded-md">Logout</button>
                </div>
            ) : (
                <div className="flex gap-x-2 items-center">
                    <button onClick={ () => signIn()} className="bg-sky-400 px-3 py-2 rounded">Sign in</button>
                </div>
            )}
        </nav>
    )
}

export default Navbar;
