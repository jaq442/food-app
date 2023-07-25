import { AboutSection } from "../../sections/AboutSection";
import { BannerSection } from "../../sections/BannerSection";
import { Footer } from "../../Footer";
import { FormSection } from "../../sections/FormSection";
import { Header } from "../../Header";
import { RestaurantSection } from "../../sections/RestaurantSection";

export const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <BannerSection />
        <RestaurantSection />
        <AboutSection />
        <FormSection />
      </main>
      <Footer />
    </>
  );
};
