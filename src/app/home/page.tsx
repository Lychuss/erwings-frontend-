"use client";

import Cards from "@/src/components/ui/card";
import Button from "@/src/components/ui/button";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

export default function Home(){
    const quoteParagraphRef = useRef<HTMLParagraphElement>(null);
    const orderButtonRef = useRef<HTMLButtonElement>(null);
    const readMoreButtonRef = useRef<HTMLButtonElement>(null);

    const headTitle = "Big flavor in every single bite.";
    const quoteTitle = "Crispy, saucy, and unforgettable. Taste the ultimate wing";

    const wordsHead = headTitle.split(" ");
    const wordsQuote = quoteTitle.split(" ");

    const orderButtonAction = () => {

    }

    const readMoreButtonAction = () => {

    }

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
             y: 280,
             stagger: 0.1,
             duration: 0.5,
             ease: "power4.out"
            }
        )

        tl.fromTo(".order", 
            {
             opacity: 0,
             filter: "blur(30px)",   
            },
            {
             opacity: 1,
             filter: "blur(0px)",
             y: -80,
             duration: 0.8,
             ease: "power4.out"
            }, 
            "<"
        )

        tl.fromTo(".read", 
            {
             opacity: 0,
             filter: "blur(30px)",   
            },
            {
             opacity: 1,
             filter: "blur(0px)",
             y: -80,
             duration: 0.8,
             ease: "power4.out"
            }, 
            ">"
        )

    }, [])

    return <>

        <section>
            <div className="flex items-center justify-center mt-30">
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

            <div className="flex items-center justify-center" ref={quoteParagraphRef}>
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

            <div className="flex items-center justify-center translate-y-100 gap-2">
                <Button ref={orderButtonRef} onClick={orderButtonAction} className="order bg-black border border-black rounded-2xl text-white px-6 py-2 text-xs" label="Order now" />
                <Button ref={readMoreButtonRef} onClick={readMoreButtonAction} className="read bg-[rgba(203,192,198,0.23)] border border-[rgba(203,192,198,0.23)] rounded-2xl px-4 py-2 text-xs" label="Read More" />
            </div>

        </section>


        <section className="py-10 px-23 translate-y-100 font-black h-150 space-y-13">
            <p className="ecommerce font-medium mb-2">E-COMMERCE</p>
            <h1 className="cripsy text-7xl font-medium leading-22 max-w-[15ch]">Crispy, Saucy,<span className="text-[rgba(144,20,0,0.8)]"> perfection served</span> to your table.</h1>
            <p className="ordertext max-w-[30ch] leading-7 font-medium">Our website brings you crispy, perfectly cooked chicken wings with bold, mouth-watering sauces delivered straight home.</p>

            <div>
                <Button ref={orderButtonRef} onClick={orderButtonAction} className="ordersecond bg-black font-medium border border-black rounded-2xl text-white px-6 py-2 text-xs" label="Order now" />
                <Button ref={readMoreButtonRef} onClick={readMoreButtonAction} className="readsecond font-medium bg-[rgba(203,192,198,0.23)] border border-[rgba(203,192,198,0.23)] rounded-2xl px-4 py-2 text-xs" label="Read More" />
            </div>
        </section>
    </>
}