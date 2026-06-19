"use client";

import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

export default function Navbar(){
    const navNavbar = useRef<HTMLElement>(null);

    useGSAP(() => {

        gsap.fromTo(".iconDiv",
            {opacity: 0, filter: "blur(20px)"},
            {opacity: 1, y: 0, duration: 1, filter: "blur(0px)", ease: "power1.out"}
        );

        gsap.fromTo(".aboutLi", 
            {opacity: 0, filter: "blur(20px)"},
            {opacity: 1, y: 0, duration: 2, filter: "blur(0px)", ease: "power1.out"}
        )

        gsap.fromTo(".pricingLi", 
            {opacity: 0, filter: "blur(20px)"},
            {opacity: 1, y: 0, duration: 2, filter: "blur(0px)", ease: "power2.out"}
        )
        
        gsap.fromTo(".contactLi", 
            {opacity: 0, filter: "blur(20px)"},
            {opacity: 1, y: 0, duration: 2, filter: "blur(0px)", ease: "power3.out"}
        )

        gsap.fromTo(".shopLi", 
            {opacity: 0, filter: "blur(20px)"},
            {opacity: 1, y: 0, duration: 2, filter: "blur(0px)", ease: "power4.out"}
        )

        gsap.fromTo(".gpsDiv", 
            {opacity: 0, filter: "blur(20px)"},
            {opacity: 1, y: 0, duration: 2, filter: "blur(0px)", ease: "power4.out"}
        )        

    }, {scope: navNavbar})

    return <>
        <nav className="flex py-10 px-15 items-center" ref={navNavbar}>

            <div className="iconDiv flex gap-3 w-200 items-center opacity-0 translate-y-[20px]">
                <img src="/icons/wing.png"></img>
                <h1 className="font-semibold text-xl">Erwings</h1>
            </div>

            <div className="flex font-medium items-center w-140">
                <ul className="flex space-x-20 text-md items-center">
                    <li className="aboutLi translate-y-[32px]">About</li>
                    <li className="pricingLi translate-y-[28px]">Pricing</li>
                    <li className="contactLi translate-y-[24px]">Contact</li>
                    <li className="shopLi translate-y-[20px]">Shop</li>
                </ul>
            </div>

            <div className="gpsDiv flex items-center translate-y-[20px]">
                <img src="icons/gps.png"></img>
            </div>
        </nav>
    </>
}