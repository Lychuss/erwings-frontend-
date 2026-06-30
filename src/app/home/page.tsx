"use client";

import Cards from "@/src/components/ui/card";
import Button from "@/src/components/ui/button";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

gsap.registerPlugin(ScrollTrigger);


const headTitleHome = "Big flavor in every single bite.";
const quoteTitle = "Crispy, saucy, and unforgettable. Taste the ultimate wing";
const headTitleAbout = "Crispy, Saucy, perfection served to your table.";
const paragraphAbout = "Our website brings you crispy, perfectly cooked chicken wings with bold, mouth-watering sauces that we delivered straight home.";
const quoteName = "OWNED BY RAPHAEL MHARCUS SAN JUAN" // can be changed after the erwings agreed to get the website
const headTitlePricing = "Flavor big prices small.";
const mainQuoteContact = "One bite of our mouthwatering chicken wings changes everything. Contact us today and treat yourself to irresistible flavor and satisfaction!"

const wordsHeadHome = headTitleHome.split(" ");
const wordsQuote = quoteTitle.split(" ");
const wordsHeadAbout = headTitleAbout.split(" ");
const wordsParagraphAbout = paragraphAbout.split(" ");
const wordsQouteName = quoteName.split(" ");
const wordsHeadPricing = headTitlePricing.split(" ");
const wordsQuoteContact = mainQuoteContact.split(" ");

const carouselImages = [
    { alt: "carousel1", src: "images/carousel_1.jpg"},
    { alt: "carousel2", src: "images/carousel_2.jpg"},
    { alt: "carousel3", src: "images/carousel_3.jpg"},
    { alt: "carousel4", src: "images/carousel_4.jpg"},
    { alt: "carousel5", src: "images/carousel_5.jpg"},
]


export default function Home(){
    const quoteParagraphRef = useRef<HTMLParagraphElement>(null);
    const orderButtonRef = useRef<HTMLButtonElement>(null);
    const readMoreButtonRef = useRef<HTMLButtonElement>(null);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

    const goToPrev = () => emblaApi?.scrollPrev()
    const goToNext = () => emblaApi?.scrollNext()

    useEffect(() => {
        if (!emblaApi) return
            emblaApi.plugins().autoplay?.play()
    }, [emblaApi])

    const orderButtonAction = () => {

    }

    const readMoreButtonAction = () => {

    }

    useGSAP(() => {
        const tl = gsap.timeline();
        const trAbout = gsap.timeline({                
                scrollTrigger: {
                trigger: ".about",
                start: "top 20%",
                end: "bottom 0%",
                markers: true
            }
        });
        const trPricing = gsap.timeline({
                scrollTrigger: {
                trigger: ".pricing",
                start: "top 20%",
                end: "bottom 0%",
                markers: true
            }
        });

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
             y: 300 
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
             y: 350,
             opacity: 0,
             filter: "blur(30px)",   
            },
            {
             opacity: 1,
             filter: "blur(0px)",
             y: 300,
             duration: 0.8,
             ease: "power4.out"
            }, 
            "<"
        ).fromTo(".read", 
            {
             opacity: 0,
             filter: "blur(30px)",  
             y: 350 
            },
            {
             opacity: 1,
             filter: "blur(0px)",
             y: 300,
             duration: 0.8,
             ease: "power4.out"
            }, 
            ">"
        )

        trAbout.fromTo(".crispy",
            {
                y: 450,
                filter: "blur(20px)",
                opacity: 0
            },
            {
                y: 420,
                opacity: 1,
                filter: "blur(0px)",
                duration: 1,
                ease: "power2.out",
                stagger: 0.3
            }
        ).fromTo(".ecommerce",
            {
                y: 430,
                opacity: 0,
                filter: "blur(20px)"
            },
            {
                y: 400,
                opacity: 1,
                filter: "blur(0px)",
                duration: 1,
                ease: "power2.out"
            },
            0
        ).fromTo(".ordertext", 
            {
                y: 440,
                filter: "blur(20px)",
                opacity: 0
            },
            {
                y: 400,
                filter: "blur(0px)",
                opacity: 1,
                duration: 0.3,
                stagger: 0.1,
                ease: "power2.out"
            },
            0
        ).fromTo(".ordersecond",
            {
                y: 400,
                opacity: 0,
                filter: "blur(20px)"
            },
            {
                y: 380,
                opacity: 1,
                filter: "blur(0px)",
                duration: 1,
                ease: "power2.out"
            },
            0
        ).fromTo(".readsecond",
            {
                y: 400,
                opacity: 0,
                filter: "blur(20px)"
            },
            {
                y: 380,
                opacity: 1,
                filter: "blur(0px)",
                duration: 2,
                ease: "power2.out"
            },
            0
        )

        trPricing.fromTo(".ownername",
            {
                y: 500,
                opacity: 0,
                filter: "blur(20px)"
            },
            {
                y: 480,
                opacity: 1,
                filter: "blur(0px)",
                duration: 1,
                ease: "power2.out",
                stagger: 0.3
            }
        ).fromTo(".headpricing",
            {
                y: 510,
                opacity: 0,
                filter: "blur(20px)"
            },
            {
                y: 480, 
                opacity: 1,
                filter: "blur(0px)",
                duration: 1,
                ease: "power2.out",
                stagger: 0.3
            },
            0
        ).fromTo(".embla",
            {
                y: 1000,
            },
            {
                y: 480,
                duration: 1,
                ease: "power2.out"
            },
            0
        )

    }, [])

    return <>

        <section className="home">
            <div className="flex items-center justify-center mt-30">
                <h1 className="text-6xl font-medium text-center tracking-wider">
                    {wordsHeadHome.map((word, i) => (
                        <span key={i}>
                            {i === wordsHeadHome.length -2 && <br />}
                            <span  className="word inline-block mr-2 my-2">
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
                            <span className="paragraph inline-block mr-2 my-2">
                                {word}
                            </span>
                        </span>
                    ))}
                </p>
            </div>

            <div className="flex items-center justify-center gap-2">
                <Button ref={orderButtonRef} onClick={orderButtonAction} className="order bg-black border border-black rounded-2xl text-white px-6 py-2 text-xs" label="Order now" />
                <Button ref={readMoreButtonRef} onClick={readMoreButtonAction} className="read bg-[rgba(203,192,198,0.23)] border border-[rgba(203,192,198,0.23)] rounded-2xl px-4 py-2 text-xs" label="Read More" />
            </div>

        </section>


        <section className="about py-10 px-23 font-black h-150 space-y-13">
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
                            <span  className="ordertext inline-block mr-1">
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

        <section className="pricing px-20 py-5">
                    <div className="flex flex-col gap-1">
                        <h1 className="font-medium tracking-wider">
                            {wordsQouteName.map((word, i) => (
                                <span key={i}>
                                    <span  className="ownername inline-block mr-3" style={{ transform: `translateY(${500 + (i + 5)}px)`}}>
                                        {word}
                                    </span>
                                </span>
                            ))}
                        </h1>
                        <h1 className="font-medium tracking-wider text-6xl my-1">
                            {wordsHeadPricing.map((word, i) => (
                                <span key={i}>
                                    {i === 2 && <br></br>}
                                    <span  className="headpricing inline-block mr-3 my-1" style={{ transform: `translateY(${500 + (i + 5)}px)`}}>
                                        {word}
                                    </span>
                                </span>
                            ))}
                        </h1>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="embla w-[80%] translate-y-125">
                            <div className="embla__viewport" ref={emblaRef}>
                                <div className="embla__container">
                                {carouselImages.map((images, i) => (
                                    <img key={i} className="embla__slide h-110 flex items-center justify-center rounded-2xl bg-red-200" 
                                        src={images.src} alt={images.alt} ></img>
                                ))}
                                </div>
                            </div>

                            <button onClick={goToPrev} className="absolute z-10 right-35 top-90 border rounded-full border-[rgba(229,229,229,0.8)] bg-[rgba(229,229,229,0.8)]">
                                <img src="images/left-arrow-icon.png" alt="prev-icon"></img>
                            </button>
                            <button onClick={goToNext} className="absolute z-10 right-25 top-90 border rounded-full border-[rgba(229,229,229,0.8)] bg-[rgba(229,229,229,0.8)]">
                                <img src="images/right-arrow-icon.png" alt="next-icon"></img>
                            </button>
                        </div>
                    </div>
        </section>
        
        <section className="">
            <div>
                <h1>
                    {wordsQuoteContact.map((word, i) => (
                        <span className="">
                            <span key={i}>
                                {word}
                            </span>
                        </span>
                    ))}
                </h1>
            </div>
        </section>
    </>
}