"use client";

import Cards from "@/src/components/ui/card";
import Button from "@/src/components/ui/button";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Home(){
    const quoteParagraphRef = useRef<HTMLParagraphElement>(null);
    const orderButtonRef = useRef<HTMLButtonElement>(null);
    const readMoreButtonRef = useRef<HTMLButtonElement>(null);

    const headTitleHome = "Big flavor in every single bite.";
    const quoteTitle = "Crispy, saucy, and unforgettable. Taste the ultimate wing";
    const headTitleAbout = "Crispy, Saucy, perfection served to your table.";
    const paragraphAbout = "Our website brings you crispy, perfectly cooked chicken wings with bold, mouth-watering sauces that we delivered straight home.";

    const wordsHeadHome = headTitleHome.split(" ");
    const wordsQuote = quoteTitle.split(" ");
    const wordsHeadAbout = headTitleAbout.split(" ");
    const wordsParagraphAbout = paragraphAbout.split(" ");

    const orderButtonAction = () => {

    }

    const readMoreButtonAction = () => {

    }

    useGSAP(() => {
        const tl = gsap.timeline();
        const tr = gsap.timeline({                
                        scrollTrigger: {
                        trigger: ".about",
                        start: "top 50%",
                        end: "bottom 0%"
                }});

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
        ).fromTo(".paragraph", 
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
        ).fromTo(".order", 
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
        ).fromTo(".read", 
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

        tr.fromTo(".crispy",
            {
                y: 500,
                filter: "blur(20px)",
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
                duration: 1,
                ease: "power2.out",
                stagger: 0.3
            }
        ).fromTo(".ecommerce",
            {
                y: 400,
                opacity: 0,
                filter: "blur(20px)"
            },
            {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
                duration: 1,
                ease: "power2.out"
            },
            0
        ).fromTo(".ordertext", 
            {
                y: 100,
                filter: "blur(20px)",
                opacity: 0
            },
            {
                y: 0,
                filter: "blur(0px)",
                opacity: 1,
                duration: 0.3,
                stagger: 0.1,
                ease: "power2.out"
            },
            0
        ).fromTo(".ordersecond",
            {
                y: 100,
                opacity: 0,
                filter: "blur(20px)"
            },
            {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
                duration: 1,
                ease: "power2.out"
            },
            0
        ).fromTo(".readsecond",
            {
                y: 100,
                opacity: 0,
                filter: "blur(20px)"
            },
            {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
                duration: 2,
                ease: "power2.out"
            },
            0
        )

    }, [])

    return <>

        <section>
            <div className="flex items-center justify-center mt-30">
                <h1 className="text-6xl font-medium text-center tracking-wider">
                    {wordsHeadHome.map((word, i) => (
                        <span key={i}>
                            {i === wordsHeadHome.length -2 && <br />}
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


        <section className="about py-10 px-23 translate-y-100 font-black h-150 space-y-13">
            <p className="ecommerce font-medium mb-2">E-COMMERCE</p>
            <h1 className="text-7xl font-medium">
                {wordsHeadAbout.map((word, i) => (
                    <span key={i}>
                        {(i === 2 || i === 4) && <br />}
                        <span className="crispy inline-block leading-22 mr-5">
                            {(i > 3 || i < 2) && word}
                            {(i === 2 || i === 3) && <span className="text-[rgba(144,20,0,0.8)]">{word}</span>}
                        </span>
                    </span>
                ))}
            </h1>
            <p className="leading-7 font-medium">
                    {wordsParagraphAbout.map((word, i) => (
                        <span key={i}>
                            {(i === 7 || i === 12) && <br />}
                            <span  className="ordertext inline-block mr-1" style={{ transform: `translateY(${100 + (i + 5)}px)`}}>
                                {word}
                            </span>
                        </span>
                    ))}
            </p>

            <div className="aboutbutton">
                <Button ref={orderButtonRef} onClick={orderButtonAction} className="ordersecond bg-black font-medium border border-black rounded-2xl text-white px-6 py-2 text-xs" label="Order now" />
                <Button ref={readMoreButtonRef} onClick={readMoreButtonAction} className="readsecond font-medium bg-[rgba(203,192,198,0.23)] border border-[rgba(203,192,198,0.23)] rounded-2xl px-4 py-2 text-xs" label="Read More" />
            </div>
        </section>
    </>
}