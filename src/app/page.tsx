import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import StickyScrollSection from "@/components/StickyScroll";
import GridBackgroundDemo from "@/components/grid";
import CardHoverEffect from "@/components/UpcomingWebinars";
import AnimatedTooltipAndWavyBackground from "@/components/Instructors";

export default function Home() {
  return (
    <>
   <HeroSection/>
   <FeaturedCourses/>
   <StickyScrollSection/>
   <GridBackgroundDemo/>
   <CardHoverEffect/>
   <AnimatedTooltipAndWavyBackground/>
   </>
  );
}
