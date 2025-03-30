// pages/MyProcess.tsx

import { useEffect, useState, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Sparkles, Compass, Layers, Settings, Users, Zap } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import BlurBlob from '../components/BlurBlob';

const steps = [
  { title: "1. Get Curious", icon: <Sparkles className="w-4 h-4 mr-2 text-indigo-500" /> },
  { title: "2. Define the System", icon: <Layers className="w-4 h-4 mr-2 text-indigo-500" /> },
  { title: "3. Prototype With Purpose", icon: <Zap className="w-4 h-4 mr-2 text-indigo-500" /> },
  { title: "4. Shape With Story", icon: <Compass className="w-4 h-4 mr-2 text-indigo-500" /> },
  { title: "5. Build & Collaborate", icon: <Users className="w-4 h-4 mr-2 text-indigo-500" /> },
  { title: "6. Reflect, Learn, Repeat", icon: <Settings className="w-4 h-4 mr-2 text-indigo-500" /> }
];

const fullSteps = [
  {
    title: "1. Get Curious",
    icon: <Sparkles className="w-6 h-6 text-indigo-500" />,
    image: "/lovable-uploads/alice-stash-running.png",
    description: "Every project starts with a question. I dig deep into the context—users, business goals, competitors—to understand what’s really going on. Curiosity drives the discovery process, uncovering hidden insights and framing better problems.",
    callout: {
      label: "Case Study: Ogma Therapy",
      description: "When building the Ogma Assistant, I ran 12+ user interviews and shadowed clinicians to deeply understand how note-taking interrupted their workflow. These insights shaped the tool’s initial feature set.",
      link: "/case-study/ogma-therapy"
    }
  },
  {
    title: "2. Define the System",
    icon: <Layers className="w-6 h-6 text-indigo-500" />,
    image: "/lovable-uploads/atom-journey-map.png",
    description: "Once we understand the why, we zoom out and look at the system. How do all the parts connect? I map out the landscape—flows, frictions, and opportunities—to align stakeholders and set the strategic foundation.",
    callout: {
      label: "Diagram: User Journey Flow",
      description: "In the Atom Learning rebrand, I visualised the brand experience across B2B and B2C audiences to resolve messaging clashes. This led to the modular brand system we launched.",
      link: "/case-study/atom-learning"
    }
  },
  {
    title: "3. Prototype With Purpose",
    icon: <Zap className="w-6 h-6 text-indigo-500" />,
    image: "/lovable-uploads/ab-test-snippet.png",
    description: "I believe in building to learn. Whether it’s a rough wireframe, a live demo, or a not-quite-right headline, I prototype to test assumptions, validate ideas, and get feedback early—so we don’t waste time on the wrong thing.",
    callout: {
      label: "Blog: Three A/B Tests That Changed How We Grow",
      description: "At Atom Learning, I ran conversion experiments on our pricing page that surfaced unexpected behaviour patterns—and helped double trial-to-signup rates.",
      link: "/blog/three-ab-tests"
    }
  },
  {
    title: "4. Shape With Story",
    icon: <Compass className="w-6 h-6 text-indigo-500" />,
    image: "/lovable-uploads/stash-checkpoint-sign.png",
    description: "Design isn’t just how it looks—it’s how it *feels*. I bring brand, tone, and narrative into the process to make sure we’re not just functional, but compelling. From microcopy to interaction moments, everything tells a story.",
    callout: {
      label: "Example: Stash Running Posters",
      description: "I wrote race descriptions, checkpoint signs, and emails in the same tone as the visuals. The result? A brand that felt cohesive across every touchpoint.",
      link: "/case-study/stash-running"
    }
  },
  {
    title: "5. Build & Collaborate",
    icon: <Users className="w-6 h-6 text-indigo-500" />,
    image: "/lovable-uploads/buildstuff-facilitation.png",
    description: "I work closely with engineers, designers, and stakeholders to get things shipped. My role is to keep momentum, remove blockers, and make sure everyone is aligned—not just on what we’re building, but *why*.",
    callout: {
      label: "Demo: BuildStuff Facilitation",
      description: "For BuildStuff, I built and shipped the MVP while also handling brand, ops, and community. I love when product and process meet.",
      link: "/case-study/buildstuff"
    }
  },
  {
    title: "6. Reflect, Learn, Repeat",
    icon: <Settings className="w-6 h-6 text-indigo-500" />,
    image: "/lovable-uploads/crews-retro.png",
    description: "Once something’s out in the world, we look at what worked—and what didn’t. I run retros, dig into data, and talk to users to surface learnings that drive the next iteration. The process never really ends—and that’s the fun part.",
    callout: {
      label: "Reflection: What I’d Do Differently",
      description: "After the first Crews to the Coast, I ran a full retrospective with captains and volunteers. Their input shaped the 2023 edition—and led to the idea of adding narrative arcs.",
      link: "/case-study/crews-to-the-coast"
    }
  }
];

const MyProcess = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const offsets = stepRefs.current.map(ref => ref?.offsetTop || 0);
      const index = offsets.findIndex((offset, i) => {
        const nextOffset = offsets[i + 1] || Infinity;
        return scrollPos >= offset - 300 && scrollPos < nextOffset - 300;
      });
      if (index !== -1 && index !== currentStep) {
        setCurrentStep(index);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentStep]);

  const scrollToStep = (index: number) => {
    const element = stepRefs.current[index];
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 120; // offset for fixed navbar
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <Navbar />

      <div className="pt-28 pb-20 container max-w-6xl mx-auto px-4 sm:px-6 relative">
        <BlurBlob
          color="#5D7AFF"
          size={200}
          className="top-0 left-0 -translate-x-1/2 opacity-30 animate-pulse"
        />

        <SectionTitle
          title="My Process"
          description="How I approach product, design, and creative work—from first question to final launch."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 mt-16">
          <div className="hidden lg:block sticky top-32 self-start p-4 rounded-xl shadow-md bg-white/10 text-white/90">
            <div className="space-y-4 text-sm">
              {steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => scrollToStep(index)}
                  className={`flex items-center w-full text-left transition ${
                    currentStep === index ? 'text-indigo-400 font-semibold' : 'hover:text-indigo-400'
                  }`}
                >
                  {step.icon}
                  {step.title.replace(/^[0-9]+\.\s*/, '')}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-24">
            {fullSteps.map((step, index) => (
              <div
                key={index}
                ref={(el) => (stepRefs.current[index] = el)}
                className={`transition-all duration-700 transform ${
                  isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
              >
                <div className="p-6 rounded-xl shadow-lg bg-white/5 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-4 rounded-full bg-indigo-500/20 text-indigo-400 shadow">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-display font-semibold tracking-tight">
                      {step.title}
                    </h3>
                  </div>

                  <p className="max-w-2xl text-base leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {step.image && (
                    <div className="mt-4 mb-4">
                      <img
                        src={step.image}
                        alt={`Visual for ${step.title}`}
                        className="rounded-xl shadow-md w-full max-w-xl"
                      />
                    </div>
                  )}

                  {step.callout && (
                    <div className="flex justify-start">
                      <details className="mt-4 p-4 border-l-4 border-indigo-400 shadow-sm w-full max-w-xl rounded-lg bg-white/10">
                        <summary className="cursor-pointer text-sm font-medium">
                          {step.callout.label}
                        </summary>
                        <div className="mt-2">
                          <p className="text-sm mb-2">
                            {step.callout.description}
                          </p>
                          <a
                            href={step.callout.link}
                            className="text-sm text-indigo-400 hover:underline font-semibold"
                          >
                            View more →
                          </a>
                        </div>
                      </details>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white/10 text-white py-16 px-6 sm:px-8 mt-32 rounded-none text-center">
  <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
    Looking for a creative mind that ships?
  </h2>
  <p className="text-lg text-white/80 max-w-xl mx-auto mb-6">
    From strategy to pixels to process—I bring ideas to life and keep things moving. I'm looking for my next in-house adventure.
  </p>
  <a
    href="/case-studies"
    className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-6 py-3 rounded-full transition"
  >
    See My Work
  </a>
</div>

      </div>
      
      <Footer />
    </div>
  );
};

export default MyProcess;
