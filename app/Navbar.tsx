"use client"

import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const currentPath = usePathname();

    const links = [
        { label: "Dashbaord", href: "/" },
        { label: "Issues", href: "/issues" },
    ];

    return (
        <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
            <Link href="/"><AiFillBug /></Link>
            <ul className="flex space-x-6">
                { links.map((item, index) => (
                    <li key={index}>
                        <Link href={ item.href } className={`${ (item.href === currentPath) ? "text-zinc-900" : "text-zinc-500" }  hover:text-zinc-800 transition-colors`}>{ item.label }</Link>
                    </li>
                )) }
            </ul>
        </nav>
    )
}

export default Navbar