"use client";

import Navbar from "@/src/components/layouts/navbar";
import Cards from "@/src/components/ui/card";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

export default function Home(){
    const quoteParagraph = useRef<HTMLParagraphElement>(null);

    const headTitle = "Big flavor in every single bite.";
    const quoteTitle = "Crispy, saucy, and unforgettable. Taste the ultimate wing";

    const wordsHead = headTitle.split(" ");
    const wordsQuote = quoteTitle.split(" ");

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.fromTo(".word", 
            {opacity: 0,
             filter: "blur(10px)"},
            {opacity: 1,
             y: 0,
             stagger: 0.2,
             duration: 0.8,
             filter: "blur(0px)",
             ease: "power4.out"
            }
        )

        tl.fromTo(".paragraph", 
            {
             opacity: 0,
             filter: "blur(20px)",   
            },
            {
             opacity: 1,
             filter: "blur(0px)",
             y: 300,
             stagger: 0.1,
             duration: 0.5,
             ease: "power4.out"
            }
        )

    }, [])

    return <>
        <Navbar />

        <div className="flex items-center justify-center">
            <h1 className="text-6xl font-medium text-center tracking-wider">
                {wordsHead.map((word, i) => (
                    <span key={i}>
                        {i === wordsHead.length -2 && <br />}
                        <span  className="word inline-block mr-2 my-2" style={{transform: `translateY(${100 + (i + 10)}px)`}}>
                            {word}
                        </span>
                    </span>
                ))}
            </h1>
        </div>

        <div className="flex items-center justify-center">
            <Cards />
        </div>

        <div className="flex items-center justify-center" ref={quoteParagraph}>
            <p className="text-sm font-semibold text-center tracking-wider">
                {wordsQuote.map((word, i) => (
                    <span key={i}>
                        <span className="paragraph inline-block mr-2 my-2" style={{transform: `translateY(${500 + (i + 5)}px)`}}>
                            {word}
                        </span>
                    </span>
                ))}
            </p>
        </div>
    </>
}