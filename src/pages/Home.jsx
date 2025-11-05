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
						<FeaturedInventory />
					<AboutSection />
							<CallToAction />
					<TestimonialSection />
					<ContactSection />
					<NewsletterSection />
				</main>
				{/* <Footer /> */}
			</>
		);
}

export default Home;
