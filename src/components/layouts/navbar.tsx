"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Navbar(){
    const iconDiv = useRef<HTMLDivElement>(null);

    useEffect(() => {

        gsap.fromTo(iconDiv.current,
            {opacity: 0, filter: "blur(20px)"},
            {opacity: 1, y: 0, duration: 1, filter: "blur(0px)", ease: "power2.out"}
        );

    }, [])

    return <>
        <nav className="flex py-10 px-15 text-black items-center">

            <div ref={iconDiv} className="flex gap-3 w-200 items-center opacity-0 translate-y-[20px]">
                <img src="/icons/wing.png"></img>
                <h1 className="font-semibold text-xl">Erwings</h1>
            </div>

            <div className="flex font-medium items-center w-140">
                <ul className="flex space-x-20 text-md items-center">
                    <li>About</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                    <li>Shop</li>
                </ul>
            </div>

            <div className="flex items-center">
                <img src="icons/gps.png"></img>
            </div>

        </nav>
    </>
}