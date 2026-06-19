"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const cards = [
    {id: 1, img: "images/card-1.jpg", title: "card1"},
    {id: 2, img: "images/card-2.jpg", title: "card1"},
    {id: 3, img: "images/card-3.jpg", title: "card1"},
    {id: 4, img: "images/card-4.jpg", title: "card1"},
    {id: 5, img: "images/card-5.jpg", title: "card1"},
    {id: 6, img: "images/card-6.jpg", title: "card1"},
    {id: 7, img: "images/card-7.jpg", title: "card1"},
]

const position = [
    {x: 360, rotate: 12, y:  140},
    {x: 280, rotate: 4, y: 140},
    {x: 140, rotate: 4, y: 135},
    {x: 0, rotate: -2, y: 125},
    {x: -150, rotate: -5, y: 135},
    {x: -250, rotate: -9, y: 120},
    {x: -360, rotate: -10, y: 160},
]

export default function Cards(){

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.to(".card", 
            {x: 0, y: 150, duration: 1, ease: "power2.out", rotate: 0}
        );

        tl.to(".card", 
            {x: (i) => position[i].x,
             y: (i) => position[i].y,
             rotate: (i) => position[i].rotate,
             duration: 5,
             ease: "power4.out",
             scale: 0.8
            }
        )
    });

    return <>
        {cards.map((card) => (
            <div key={card.id} 
                className={`card absolute font-black w-60 h-60 border rounded-2xl overflow-hidden`}
                style={{ transform: `translateY(${card.id === 5  ? 1001.5 : 1000}px) translateX(${card.id === 5 ?  1.5: 0}px) rotate(-20.5deg)`,
                zIndex: 10 - card.id}}>
                <img src={card.img} className="w-full h-full object-cover"></img>             
            </div>
        ))}
    </>
}