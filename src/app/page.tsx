"use client";

import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import PricingSection from "../components/home/PricingSection";
import ContactSection from "../components/home/ContactSection";
import ShopSection from "../components/home/ShopSection";
import ReviewSection from "../components/home/ReviewSection";

import { usePageAnimations } from "../hooks/usePageAnimation";
import { useCarousel } from "../hooks/useCarousel";

export default function Home() {
    usePageAnimations();
    const { emblaRef, goToPrev, goToNext } = useCarousel();

    const handleOrder = () => {
        // order button action
    };

    const handleReadMore = () => {
        // read more button action
    };

    return (
        <>
            <HeroSection onOrder={handleOrder} onReadMore={handleReadMore} />
            <AboutSection onOrder={handleOrder} onReadMore={handleReadMore} />
            <PricingSection emblaRef={emblaRef} goToPrev={goToPrev} goToNext={goToNext} />
            <ContactSection />
            <ShopSection />
            <ReviewSection />
        </>
    );
}