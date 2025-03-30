// pages/MyProcess.tsx

import { useEffect, useState, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Sparkles, Compass, Layers, Settings, Users, Zap, ClipboardList, PenTool, MonitorSmartphone,
  BookOpen, MapPin, Grid, Layout, Clipboard, Code, Server, MousePointer, Github, MessageCircle, Image, Square
} from 'lucide-react';

import SectionTitle from '../components/SectionTitle';
import BlurBlob from '../components/BlurBlob';
import ToolPill from '@/components/ToolPill';

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
    image: "/lovable-uploads/luke_curious.png",
    description: "Every project starts with a question. I dig deep into the context — the users, the business goals, the competitors — to understand what’s really going on. Curiosity always drives the discovery process, and I try to uncover hidden insights and frame problems differently.",
    callout: {
      label: "See an example: Ogma Therapy",
      description: "When building the Ogma Assistant, I ran 12+ user interviews and shadowed clinicians to deeply understand how note-taking interrupted their workflow. These insights shaped the tool’s initial feature set.",
      link: "/case-study/ogma-therapy"
    }
  },
  {
    title: "2. Define the System",
    icon: <Layers className="w-6 h-6 text-indigo-500" />,
    image: "/lovable-uploads/luke_system.png",
    description: "Once we understand the why, we zoom out and look at the system. How do all the parts connect? I map out the landscape—flows, frictions, and opportunities—to align stakeholders and set the strategic foundation.",
    callout: {
      label: "See and example: User Journey Flow",
      description: "In the Atom Learning rebrand, I visualised the brand experience across B2B and B2C audiences to resolve messaging clashes. This led to the modular brand system we launched.",
      link: "/case-study/atom-learning"
    }
  },
  {
    title: "3. Prototype With Purpose",
    icon: <Zap className="w-6 h-6 text-indigo-500" />,
    image: "/lovable-uploads/luke_prototyping.png",
    description: "I'm a big believer that we can build to learn (and should). Sometimes it’s a rough wireframe, a live demo, or a not-quite-right headline, but I prototype to test assumptions, validate ideas, and get feedback early. That way, we don’t waste time on the wrong thing.",
    callout: {
      label: "See an example: Three A/B Tests That Changed How We Grow",
      description: "At Atom Learning, I ran conversion experiments on our pricing page that surfaced unexpected behaviour patterns—and helped double trial-to-signup rates.",
      link: "/blog/three-ab-tests"
    }
  },
  {
    title: "4. Shape With Story",
    icon: <Compass className="w-6 h-6 text-indigo-500" />,
    image: "/lovable-uploads/luke_planning_2.png",
    description: "As the saying goes, design isn’t just how it looks — it’s how it *feels*. I bring brand, tone, and narrative into the process to make sure we’re not just functional, but compelling. From microcopy to interaction moments, everything tells a story.",
    callout: {
      label: "See an example: Stash Running Posters",
      description: "I wrote race descriptions, checkpoint signs, and emails in the same tone as the visuals. The result? A brand that felt cohesive across every touchpoint.",
      link: "/case-study/stash-running"
    }
  },
  {
    title: "5. Build & Collaborate",
    icon: <Users className="w-6 h-6 text-indigo-500" />,
    image: "/lovable-uploads/Luke Workshop.png",
    description: "I work closely with engineers, designers, and stakeholders to get things shipped. My role is to keep momentum, remove blockers, and make sure everyone is aligned. In this stage, I'm not just guiding what we're building, but remindng others why we're building it.",
    callout: {
      label: "See and example: BuildStuff Facilitation",
      description: "For BuildStuff, I built and shipped the MVP while also handling brand, ops, and community. I love when product and process meet.",
      link: "/case-study/buildstuff"
    }
  },
  {
    title: "6. Reflect, Learn, Repeat",
    icon: <Settings className="w-6 h-6 text-indigo-500" />,
    image: "/lovable-uploads/Luke Retro 2.png",
    description: "Once something’s out in the world, we look at what worked, and, of course, at what didn’t. I run retros, dig into the data, and talk to our users to surface learnings that drive my next iteration. The process never really ends, which is all part of the fun.",
    callout: {
      label: "See an example: What I’d Do Differently",
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
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <Navbar />

      <div className="pt-28 pb-20 container max-w-6xl mx-auto px-4 sm:px-6 relative">
        <BlurBlob color="#5D7AFF" size={200} className="top-0 left-0 -translate-x-1/2 opacity-30 animate-pulse" />
        <SectionTitle title="My Process" description="How I approach product, design, and creative work — from first question to final launch." />

        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 mt-16">
          <div className="hidden lg:block sticky top-32 self-start p-4 rounded-xl shadow-md bg-white/10 text-white/90">
            <div className="space-y-4 text-sm">
              {steps.map((step, index) => (
                <button key={index} onClick={() => scrollToStep(index)} className={`flex items-center w-full text-left transition ${currentStep === index ? 'text-indigo-400 font-semibold' : 'hover:text-indigo-400'}`}>{step.icon}{step.title.replace(/^[0-9]+\.\s*/, '')}</button>
              ))}
            </div>
          </div>
          <div className="space-y-24">
            {fullSteps.map((step, index) => (
              <div key={index} ref={(el) => (stepRefs.current[index] = el)} className={`transition-all duration-700 transform ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <div className="p-6 rounded-xl shadow-lg bg-white/5 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-4 rounded-full bg-indigo-500/20 text-indigo-400 shadow">{step.icon}</div>
                    <h3 className="text-2xl font-display font-semibold tracking-tight">{step.title}</h3>
                  </div>
                  <p className="max-w-2xl text-base leading-relaxed mb-4">{step.description}</p>
                  {step.image && (<div className="mt-4 mb-4"><img src={step.image} alt={`Visual for ${step.title}`} className="rounded-xl shadow-md w-full max-w-xl" /></div>)}
                  {step.callout && (<div className="flex justify-start"><details className="mt-4 p-4 border-l-4 border-indigo-400 shadow-sm w-full max-w-xl rounded-lg bg-white/10"><summary className="cursor-pointer text-sm font-medium">{step.callout.label}</summary><div className="mt-2"><p className="text-sm mb-2">{step.callout.description}</p><a href={step.callout.link} className="text-sm text-indigo-400 hover:underline font-semibold">View more →</a></div></details></div>)}
                </div>
              </div>
            ))}
          </div>
        </div>

       {/* Stack Section */}
<div className="bg-cream text-dark py-20 px-6 sm:px-10 mt-32 rounded-xl">
  <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">The Tools That Power the Process</h2>
  <p className="text-base text-dark/80 mb-10 max-w-2xl">
    Here’s a look at my current stack across strategy, design, prototyping, and collaboration.
  </p>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Strategy & Research */}
    <div>
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <ClipboardList className="w-5 h-5 mr-2 text-dark/60" /> Strategy & Research
      </h3>
      <div className="flex flex-wrap gap-2">
        <ToolPill name="Notion" tooltip="Organized note-taking and project management" icon={<BookOpen className="w-4 h-4 mr-1 text-blue-700" />} color="bg-blue-50 text-blue-800" />
        <ToolPill name="Maze" tooltip="User testing platform for quick insights" icon={<MapPin className="w-4 h-4 mr-1 text-blue-700" />} color="bg-blue-50 text-blue-800" />
        <ToolPill name="Airtable" tooltip="Flexible database and collaboration" icon={<Grid className="w-4 h-4 mr-1 text-blue-700" />} color="bg-blue-50 text-blue-800" />
        <ToolPill name="Miro" tooltip="Visual brainstorming and whiteboarding" icon={<Layout className="w-4 h-4 mr-1 text-blue-700" />} color="bg-blue-50 text-blue-800" />
        <ToolPill name="Google Forms" tooltip="Simple surveys and data collection" icon={<Clipboard className="w-4 h-4 mr-1 text-blue-700" />} color="bg-blue-50 text-blue-800" />
      </div>
    </div>

    {/* Design & Prototyping */}
    <div>
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <PenTool className="w-5 h-5 mr-2 text-dark/60" /> Design & Prototyping
      </h3>
      <div className="flex flex-wrap gap-2">
        <ToolPill name="Figma" tooltip="UI layouts & early wireframes" icon={<PenTool className="w-4 h-4 mr-1 text-pink-700" />} color="bg-pink-50 text-pink-800" />
        <ToolPill name="Framer" tooltip="Interactive prototypes, dev-friendly" icon={<Layers className="w-4 h-4 mr-1 text-pink-700" />} color="bg-pink-50 text-pink-800" />
        <ToolPill name="Midjourney" tooltip="AI-powered design exploration" icon={<Image className="w-4 h-4 mr-1 text-pink-700" />} color="bg-pink-50 text-pink-800" />
        <ToolPill name="Canva" tooltip="Quick and accessible design work" icon={<Square className="w-4 h-4 mr-1 text-pink-700" />} color="bg-pink-50 text-pink-800" />
        <ToolPill name="Adobe Illustrator" tooltip="Detailed vector design & branding" icon={<PenTool className="w-4 h-4 mr-1 text-pink-700" />} color="bg-pink-50 text-pink-800" />
      </div>
    </div>

    {/* Build & Collaborate */}
    <div>
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <MonitorSmartphone className="w-5 h-5 mr-2 text-dark/60" /> Build & Collaborate
      </h3>
      <div className="flex flex-wrap gap-2">
        <ToolPill name="VS Code" tooltip="Code editor for rapid development" icon={<Code className="w-4 h-4 mr-1 text-green-700" />} color="bg-green-50 text-green-800" />
        <ToolPill name="Supabase" tooltip="Real-time backend for apps" icon={<Server className="w-4 h-4 mr-1 text-green-700" />} color="bg-green-50 text-green-800" />
        <ToolPill name="Cursor" tooltip="AI-assisted coding workspace" icon={<MousePointer className="w-4 h-4 mr-1 text-green-700" />} color="bg-green-50 text-green-800" />
        <ToolPill name="GitHub" tooltip="Version control and team collab" icon={<Github className="w-4 h-4 mr-1 text-green-700" />} color="bg-green-50 text-green-800" />
        <ToolPill name="Slack" tooltip="Team messaging and coordination" icon={<MessageCircle className="w-4 h-4 mr-1 text-green-700" />} color="bg-green-50 text-green-800" />
      </div>
    </div>
  </div>
</div>
</div>

<div className="bg-white/10 text-white py-16 px-6 sm:px-8 mt-32 rounded-none text-center">
  <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Want to dive deeper into how I work?</h2>
  <p className="text-lg text-white/80 max-w-xl mx-auto mb-6">
    I regularly share reflections on process, product thinking, and creative strategy. 
    You can find more stories and insights over on my blog.
  </p>
  <a
    href="/blog"
    className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-6 py-3 rounded-full transition"
  >
    Visit the blog →
  </a>
</div>



      <Footer />
    </div>
  );
};

export default MyProcess;
