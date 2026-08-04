import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

export default function Footer(){
    return <section className="flex flex-row py-12 px-18 bg-gray-200 rounded-xl space-x-50">
        <div className="space-y-10">
            <h1 className="text-3xl font-semibold">Our platform, your food.</h1>
            <p className="text-sm">Get ready for the crispiest, juiciest wings in<br></br> town tossed in bold, unforgettable flavors<br></br>
                 that will blow your mind. Grab a napkin and dive<br></br> into the ultimate comfort food experience 
                 your<br></br> taste buds have been waiting for.</p>
            
            <div className="flex space-x-5">
                <div className="rounded-full p-2 bg-white transition-transform hover:scale-120 duration-300">
                    <FaXTwitter />
                </div>

                <div className="rounded-full p-2 bg-white transition-transform hover:scale-120 duration-300">
                    <FaInstagram />
                </div>

                <div className="rounded-full p-2 bg-white transition-transform hover:scale-120 duration-300">
                    <FaFacebookF />
                </div>            
            </div>

        </div>

        <div>
            <ul className="space-y-7 text-sm font-medium">
                <li>Order Now</li>
                <li>Pricing</li>
                <li>Contact</li>
                <li>Solution</li>
                <li>E-Commerce</li>
            </ul>
        </div>

        <div>
            <ul className="space-y-7 text-sm font-medium">
                <li>Your Story</li>
                <li>Call Now</li>
            </ul>
        </div>

        <div>
            <ul className="space-y-7 text-sm font-medium">
                <li>Privacy & Policy</li>
                <li>Contact Us</li>
            </ul>
            <p className="mt-40 text-sm font-medium">&copy; 2026.All rights reserved.</p>
        </div>
    </section>
}