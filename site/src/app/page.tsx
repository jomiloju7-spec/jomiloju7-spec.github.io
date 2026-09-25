import { Nav } from '@/components/nav';
import { BackgroundMesh } from '@/components/background-mesh';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/sections/hero';
import { Experience } from '@/components/sections/experience';
import { Certifications } from '@/components/sections/certifications';
import { Hackathons } from '@/components/sections/hackathons';
import { Skills } from '@/components/sections/skills';
import { Projects } from '@/components/sections/projects';
import { About } from '@/components/sections/about';
import { Education } from '@/components/sections/education';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <BackgroundMesh />
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Certifications />
        <Hackathons />
        <Skills />
        <Projects />
        <About />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
