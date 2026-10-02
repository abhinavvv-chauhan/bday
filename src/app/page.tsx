import Hero from "@/components/Hero";
import Memories from "@/components/Memories";
import Timeline from "@/components/Timeline";
import LoveLetter from "@/components/LoveLetter";
import FinalMoment from "@/components/FinalMoment";
import MusicToggle from "@/components/MusicToggle";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="bg-cream selection:bg-rose/30">
      <ScrollProgress />
      <MusicToggle />
      <Hero />
      <Memories />
      <Timeline />
      <LoveLetter />
      <FinalMoment />
    </main>
  );
}
