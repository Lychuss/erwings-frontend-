export const headTitleHome = "Big flavor in every single bite.";
export const quoteTitle = "Crispy, saucy, and unforgettable. Taste the ultimate wing";
export const headTitleAbout = "Crispy, Saucy, perfection served to your table.";
export const paragraphAbout = "Our website brings you crispy, perfectly cooked chicken wings with bold, mouth-watering sauces that we delivered straight home.";
export const quoteName = "OWNED BY RAPHAEL MHARCUS SAN JUAN"; 
export const headTitlePricing = "Flavor big prices small.";
export const mainQuoteContact =
    "One bite of our mouthwatering chicken wings changes everything. Contact us today ☎︎ and treat yourself to irresistible flavor 🍗 and satisfaction!";

export interface CarouselImage {
    alt: string;
    src: string;
    rotate: number;
    x: number;
    y: number;
    next_x: number;
}

export const carouselImages: CarouselImage[] = [
    { alt: "carousel1", src: "images/carousel_1.jpg", rotate: -30, x: 50, y: 0, next_x: 5 },
    { alt: "carousel2", src: "images/carousel_2.jpg", rotate: -20, x: 40, y: 10, next_x: 10 },
    { alt: "carousel3", src: "images/carousel_3.jpg", rotate: -10, x: 30, y: 30, next_x: 15 },
    { alt: "carousel4", src: "images/carousel_4.jpg", rotate: 0, x: 20, y: 50, next_x: 20 },
    { alt: "carousel5", src: "images/carousel_5.jpg", rotate: 10, x: 10, y: 70, next_x: 25 },
    { alt: "carousel4", src: "images/carousel_4.jpg", rotate: 20, x: 5, y: 90, next_x: 30 },
    { alt: "carousel5", src: "images/carousel_5.jpg", rotate: 30, x: 0, y: 110, next_x: 35 },
];

export interface CarouselNextAnimation {
    alt: string;
    src: string;
    next_y: number;
    next_x: number;
}

export const carouselImagesNextAnimation: CarouselNextAnimation[] = [
    { alt: "carousel1", src: "images/carousel_1.jpg", next_y: 500, next_x: -600 },
    { alt: "carousel2", src: "images/carousel_2.jpg", next_y: 570, next_x: -400 },
    { alt: "carousel3", src: "images/carousel_3.jpg", next_y: 640, next_x: -200 },
    { alt: "carousel4", src: "images/carousel_4.jpg", next_y: 710, next_x: 0 },
    { alt: "carousel5", src: "images/carousel_5.jpg", next_y: 780, next_x: 200 },
    { alt: "carousel4", src: "images/carousel_4.jpg", next_y: 850, next_x: 400 },
    { alt: "carousel5", src: "images/carousel_5.jpg", next_y: 920, next_x: 600 },
];