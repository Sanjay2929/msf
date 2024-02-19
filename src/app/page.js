import AbuseCase from "@/components/homepage/AbuseCase";
import Header from "@/components/homepage/Header";
import Hero from "@/components/homepage/Hero";
import Victim from "@/components/homepage/Victim";
import WhyChooseUs from "@/components/homepage/WhyChooseUs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogPost from "@/components/homepage/BlogPost";
import SexualAbuse from "@/components/homepage/SexualAbuse";
import ConsultationForm from "@/components/homepage/ConsultationForm";
import SupportAndJustice from "@/components/homepage/SupportAndJustice";
import Footer from "@/components/homepage/Footer";
import VictimsAcrossCalifornia from "@/components/homepage/VictimsAcrossCalifornia";
import AllLiableParties from "@/components/homepage/AllLiableParties";
import SexualAbuseLawyers from "@/components/homepage/SexualAbuseLawyers";
import FirmNews from "@/components/homepage/FirmNews";
import GlobalSettlement from "@/components/homepage/GlobalSettlement";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <Victim />
      <WhyChooseUs />
      <BlogPost />
      <SexualAbuse />
      <AbuseCase />
      <GlobalSettlement />
      <div className="relative">
        <div className="w-full md:h-[43%] h-[27%] absolute top-1/2 left-0 -translate-y-1/2 bg-extraLightBlue z-0"></div>
        <VictimsAcrossCalifornia />
        <AllLiableParties />
        <SexualAbuseLawyers />
      </div>
      <FirmNews />
      <ConsultationForm />
      <SupportAndJustice />
      <Footer />
    </div>
  );
}
