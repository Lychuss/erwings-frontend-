"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const cards = [
    {id: 1, img: "images/card-1.jpg", title: "card1"},
    {id: 2, img: "images/card-2.jpg", title: "card1"},
    {id: 3, img: "images/card-3.jpg", title: "card1"},
    {id: 4, img: "images/card-4.jpg", title: "card1"},
    {id: 5, img: "images/card-5.jpg", title: "card1"},
    {id: 6, img: "images/card-6.jpg", title: "card1"},
    {id: 7, img: "images/card-7.jpg", title: "card1"},
]

const position_phase1 = [
    {x: 360, rotate: 12, y:  130},
    {x: 280, rotate: 4, y: 140},
    {x: 140, rotate: 4, y: 135},
    {x: 0, rotate: -2, y: 125},
    {x: -150, rotate: -5, y: 135},
    {x: -250, rotate: -9, y: 120},
    {x: -360, rotate: -10, y: 160},
]

const position_phase2 = [
    {x: 1080, y:  1310},
    {x: 900, y: 1230},
    {x: 720, y: 1150},
    {x: 540, y: 1070},
    {x: 360, y: 990},
    {x: 180, y: 910},
    {x: -10, y: 830},
]

gsap.registerPlugin(ScrollTrigger);

export default function Cards(){

    useGSAP(() => {

        const tl1 = gsap.timeline();
        const tl2 = gsap.timeline({
                        scrollTrigger: {
                        trigger: ".card",
                        start: "top 25%",
                        end: "center 0%",
                        scrub: true,
                        markers: true
                }
        })

        tl1.fromTo(".card", 
            {
                y: 400
            },
            {
                x: 0, 
                y: 150, 
                duration: 1, 
                ease: "power2.out", 
                rotate: 0
            }
        ).to(".card", 
            {
                x: (i) => position_phase1[i].x,
                y: (i) => position_phase1[i].y,
                rotate: (i) => position_phase1[i].rotate,
                duration: 5,
                ease: "power4.out",
                scale: 0.8
            }
        )
        
        tl2.fromTo(".card", 
            {
                y: 150
            },
            {
                x: (i) => 0,
                y: 750,
                rotate: (i) => 0,
                scale: 1,
                duration: 3,
                ease: "power2.out"
            }
        ).fromTo(".card", 
            {
                y: 750
            },
            {
                y: (i) => position_phase2[i].y,
                x: (i) => position_phase2[i].x,
                scale: 1.1,
                rotate: 0,
                duration: 4,
                ease: "power2.out"
            }
        )
    });

    return <>
        {cards.map((card) => (
            <div key={card.id} 
                className={`card absolute font-black w-60 h-60 border rounded-2xl overflow-hidden`}
                style={{ transform: `translateY(${card.id === 5  ? 0: 0}px) translateX(${card.id === 5 ?  1.5: 0}px) rotate(-20.5deg)`,
                zIndex: 10 - card.id}}>
                <img src={card.img} className="w-full h-full object-cover"></img>             
            </div>
        ))}
    </>
}