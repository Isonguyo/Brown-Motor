import React from "react";
import "../styles/globals.css";
import HeroBanner from "../components/HeroBanner";
import FeaturedInventory from "../components/FeaturedInventory";
import AboutSection from "../components/AboutSection";
import CallToAction from "../components/CallToAction";
import TestimonialSection from "../components/TestimonialSections";
import ContactSection from "../components/ContactSection";
import NewsletterSection from "../components/NewsletterSection";
// import Footer from "../components/Footer";

function Home() {
		return (
			<>
				<main>
					<HeroBanner />
					<AboutSection />
							<CallToAction />
					<FeaturedInventory />
					<TestimonialSection />
					<ContactSection />
					<NewsletterSection />
				</main>
				{/* <Footer /> */}
			</>
		);
}

export default Home;
