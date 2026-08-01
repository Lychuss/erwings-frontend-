import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { carouselImages, carouselImagesNextAnimation } from "../lib/content";

gsap.registerPlugin(ScrollTrigger);

function buildHomeTimeline() {
    const tl = gsap.timeline();

    tl.fromTo(
        ".word",
        { opacity: 0, filter: "blur(10px)" },
        {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            duration: 0.8,
            filter: "blur(0px)",
            ease: "power4.out",
        }
    )
        .fromTo(
            ".paragraph",
            { opacity: 0, filter: "blur(20px)", y: 300 },
            {
                opacity: 1,
                filter: "blur(0px)",
                y: 280,
                stagger: 0.1,
                duration: 0.5,
                ease: "power4.out",
            }
        )
        .fromTo(
            ".order",
            { y: 350, opacity: 0, filter: "blur(30px)" },
            { opacity: 1, filter: "blur(0px)", y: 300, duration: 0.8, ease: "power4.out" },
            "<"
        )
        .fromTo(
            ".read",
            { opacity: 0, filter: "blur(30px)", y: 350 },
            { opacity: 1, filter: "blur(0px)", y: 300, duration: 0.8, ease: "power4.out" },
            ">"
        );

    return tl;
}

function buildAboutTimeline() {
    const tr = gsap.timeline({
        scrollTrigger: {
            trigger: ".about",
            start: "top 20%",
            end: "bottom 0%",
        },
    });

    tr.fromTo(
        ".crispy",
        { y: 450, filter: "blur(20px)", opacity: 0 },
        { y: 420, opacity: 1, filter: "blur(0px)", duration: 1, ease: "power2.out", stagger: 0.3 }
    )
        .fromTo(
            ".ecommerce",
            { y: 430, opacity: 0, filter: "blur(20px)" },
            { y: 400, opacity: 1, filter: "blur(0px)", duration: 1, ease: "power2.out" },
            0
        )
        .fromTo(
            ".ordertext",
            { y: 440, filter: "blur(20px)", opacity: 0 },
            {
                y: 400,
                filter: "blur(0px)",
                opacity: 1,
                duration: 0.3,
                stagger: 0.1,
                ease: "power2.out",
            },
            0
        )
        .fromTo(
            ".ordersecond",
            { y: 400, opacity: 0, filter: "blur(20px)" },
            { y: 380, opacity: 1, filter: "blur(0px)", duration: 1, ease: "power2.out" },
            0
        )
        .fromTo(
            ".readsecond",
            { y: 400, opacity: 0, filter: "blur(20px)" },
            { y: 380, opacity: 1, filter: "blur(0px)", duration: 2, ease: "power2.out" },
            0
        );

    return tr;
}

function buildPricingTimeline() {
    const tr = gsap.timeline({
        scrollTrigger: {
            trigger: ".pricing",
            start: "top 20%",
            end: "bottom 0%",
        },
    });

    tr.fromTo(
        ".ownername",
        { y: 500, opacity: 0, filter: "blur(20px)" },
        { y: 480, opacity: 1, filter: "blur(0px)", duration: 1, ease: "power2.out", stagger: 0.3 }
    )
        .fromTo(
            ".headpricing",
            { y: 510, opacity: 0, filter: "blur(20px)" },
            {
                y: 480,
                opacity: 1,
                filter: "blur(0px)",
                duration: 1,
                ease: "power2.out",
                stagger: 0.3,
            },
            0
        )
        .fromTo(".embla", { y: 1000 }, { y: 450, duration: 1, ease: "power2.out" }, 0);

    return tr;
}

function buildContactTimeline() {
    const tr = gsap.timeline({
        scrollTrigger: {
            trigger: ".contact",
            start: "top 20%",
            end: "bottom 0%",
        },
    });

    tr.fromTo(
        ".quote_name",
        { filter: "blur(20px)", opacity: 0 },
        { filter: "blur(0px)", opacity: 1, stagger: 0.1 }
    )
        .fromTo(
            ".concard",
            { y: 0, scale: 0 },
            {
                y: (i: number) => carouselImages[i].y,
                x: (i: number) => carouselImages[i].x,
                stagger: 0.2,
                scale: 1,
                duration: 1,
            },
            0
        )
        .to(".concard", {
            rotate: (i: number) => carouselImages[i].rotate,
            y: 50,
            x: (i: number) => carouselImages[i].next_x,
            duration: 0.6,
        })
        .fromTo(
            ".social_icons",
            { filter: "blur(20px)", opacity: 0 },
            { filter: "blur(0px)", opacity: 1, stagger: 0.2 },
            0
        );

    return tr;
}

function buildShopTimeline() {
    const tr = gsap.timeline({
        scrollTrigger: {
            trigger: ".shop",
            start: "top 100%",
            end: "bottom 70%"
        },
    });

    tr.to(".concard", {
        y: (i: number) => carouselImagesNextAnimation[i].next_y,
        x: (i: number) => carouselImagesNextAnimation[i].next_x,
        rotate: 0,
        scale: 1.2,
        duration: 1,
    });

    return tr;
}

function buildReviewTimeline(){
    const row = gsap.utils.toArray<HTMLElement>(".rows");

    const tr = gsap.timeline({
        scrollTrigger: {
            trigger: row,
            start: "top 50%",
            end: "bottom 0%",
            scrub: 1
        }
    })

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".review",
            start: "top 80%",
            end: "bottom 50%",
            markers: true
        }
    })

    tl.fromTo(".reviewtitle", 
        {
            y: 40,
            filter: "blur(20px)"
        },
        {
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            stagger: 0.1,
            ease: "power2.out"
        }
    )

    tr.fromTo(".cardreview", 
        {
            y: 600,
            filter: "blur(10px)",
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            stagger: 0.2,
            ease: "power2.out"
        }
    );

    return tr;
}

export function usePageAnimations() {
    useGSAP(() => {
        buildHomeTimeline();
        buildAboutTimeline();
        buildPricingTimeline();
        buildContactTimeline();
        buildShopTimeline();
        buildReviewTimeline();
    }, []);
}