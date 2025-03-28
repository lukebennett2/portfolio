
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, Clock, Users, Lightbulb, Zap } from 'lucide-react';
import { projects } from './CaseStudies';
import BlurBlob from './BlurBlob';

interface ProjectDetails {
  tagline: string;
  roles: string[];
  skills: string[];
  timeline: string;
  scale: string;
  challenge: string;
  process: string[] | string;
  tools: string[];
  outcome: string;
  reflection: string;
  link?: string; // ✅ Optional now
}


// Updated project images using the uploaded images
const projectImages = {
  'atom-learning': {
    image1: "/lovable-uploads/Atom Learning Image 1.png", // First Atom Learning image
    image2: "/lovable-uploads/Atom Learning Image 2.png",  // Second Atom Learning image
    image3: "/lovable-uploads/Atom learning new side.png"
  },
  'stash-running': {
    image1: "/lovable-uploads/stash-running-1.png", // Stash with orange hat
    image2: "/lovable-uploads/stash running 2.png",  // Stash with ribbon
    image3: "/lovable-uploads/stash running 3.png"
  },
  'buildstuff': {
    image1: "/lovable-uploads/builstuff pink.png", // Buildstuff website welcome page
    image2: "/lovable-uploads/Buildstuff image 2 New.png", // Buildstuff pink logo
    image3: "/lovable-uploads/Buildstuff image 3.png"
    
  },
  'rally': {
    image1: "/lovable-uploads/Rally Image 1.png", // People at coffee shop
    image2: "/lovable-uploads/Rally Image 2.png",  // Person running
    image3: "/lovable-uploads/Rally image 3.png"
  },
  'ogma-therapy': {
    image1: "/lovable-uploads/Ogma Header Different.png", // Ogma purple logo
    image2: "/lovable-uploads/Ogma Image 2.png",
    image3: "/lovable-uploads/Ogma Image 3.png"
    
  }
};

const CaseStudyPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, [slug]);
  
  const project = projects.find(p => p.slug === slug);
  
  if (!project) {
    return <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h1 className="text-3xl font-display font-bold mb-4">Case Study Not Found</h1>
          <p className="mb-6">Oops! This case study seems to have gone on vacation. Let's get you back home.</p>
          <Link to="/" className="pill-button">
            Take me home
          </Link>
        </div>
      </div>;
  }

  // Find next and previous projects
  const currentIndex = projects.findIndex(p => p.slug === slug);
  const nextProject = projects[currentIndex + 1] || projects[0];
  const prevProject = projects[currentIndex - 1] || projects[projects.length - 1];

  // Custom project data
  const projectData: { [key: string]: ProjectDetails } = {
    'atom-learning': {
      tagline: "Bringing clarity and character to edtech.",
      roles: ["Brand Strategist",],
      skills: ["Brand Strategy", "Visual Identity", "Design System"],
      timeline: "6 months",
      scale: "Used by 150,000+ students",
      challenge: "Atom Learning was a fast-growing edtech platform with a powerful adaptive learning engine—but its brand lagged behind. The visual identity felt generic, the messaging lacked emotional resonance, and it struggled to differentiate in a crowded market of test-prep solutions. Internally, there was also confusion: we were speaking to parents in our B2C offering, schools and teachers in B2B partnerships, and education administrators through a new testing product line. Each audience had distinct motivations, yet the brand treated them uniformly. We needed a system that could flex, inspire trust, and speak directly to each user group.",
      process: [
      "I led the end-to-end rebrand, beginning with in-depth discovery. We conducted interviews with internal teams, customers, and stakeholders across all audience groups—parents, teachers, and school leaders—to understand their pain points, aspirations, and how they perceived Atom’s value.",
      "We then ran a competitor audit, revealing a sea of cold, corporate branding in the edtech space. Our strategy became clear: Atom would stand out not by looking “techy,” but by building emotional connection and clarity. This insight led us to define the brand promise as 'The Building Blocks for Bright Futures' —a phrase that resonated across use cases and age groups while reinforcing Atom's educational mission.",
      "We ran workshops with the founders and marketing team to co-develop core messaging pillars and tone of voice guidelines. From there, I led the design sprint that transformed this strategy into a full visual identity system—balancing childlike wonder with academic credibility. We introduced vibrant modular shapes (a nod to 'building blocks'), clean typographic hierarchy, and a color system tailored for each audience. I also designed a sub-brand identity for our testing solutions arm, giving it enough differentiation to signal its function, but still clearly part of the Atom family.",
      "Throughout, we prototyped and tested designs across digital channels—from landing pages to parent dashboards to school sales decks—to ensure consistency and usability."
      ],
      tools: ["Brand Workshops", "Design Sprints", "User Testing", "Stakeholder & Customer Interviews", "Messaging Frameworks", "Competitor Audits",],
      outcome: "The rebrand launched across Atom’s website, learning platform, B2B materials, and social channels. Within three months, parent signups increased by 40%, and brand recognition in key school networks significantly improved. The new brand system also enabled faster turnaround for marketing assets and more effective internal alignment—saving hours of design and copy back-and-forth. Most importantly, the brand finally reflected the quality and care of the product itself.",
      reflection: "This project taught me that a rebrand is never just visual—it's strategic, systemic, and deeply tied to how a product is understood. The biggest challenge wasn't just designing a new identity, but building a brand that could flex across wildly different audiences without losing coherence. I learned how to navigate competing internal priorities, turn research into clarity, and design a system that scaled. Perhaps most importantly, I saw how design can shift perception: what once felt like a transactional test-prep tool began to feel like a trusted learning partner. That shift wasn’t about aesthetics—it was about building trust.",
    },
    
    'stash-running': {
      tagline: "Where running meets creativity and community.",
      roles: ["Founder", "Brand Designer", "Event Producer"],
      skills: ["Brand Identity", "Event Design", "Community Building"],
      timeline: "Ongoing since 2024",
      scale: "250+ active participants",
      challenge:"The running world is full of energy, but many events feel... the same. Standard races tend to be overly corporate, rigid, and lack a sense of personality or local flavour. They cater to seasoned runners but often fail to inspire newcomers or creatives who don’t see themselves reflected in that culture. I saw an opportunity to flip the script—to create events that felt more like a block party than a stopwatch, and that celebrated both movement and expression.",
      process: [
        "Stash Running started as a side project and quickly became a living, breathing brand. I developed everything from the visual identity to the event architecture, building a brand that felt fresh, offbeat, and welcoming.",
        "Each race was treated as a standalone creative experience—not just a route to be run, but a story to be told. I designed races around playful concepts, custom medals, interactive checkpoints, curated playlists, and unexpected twists. Post-race afterparties became as integral to the experience as the race itself.",
        "To round the events in their local communities, I collaborated with artists, DJs, coffee shops, breweries, and running crews across London. This helped Stash stand out—not just as an event series, but as a culture."],
      tools: ["Community Engagement", "Experience Design", "Social Strategy", "DIY Ethos", "Photography", "Videography",],
      outcome: "What began as a casual meetup has evolved into a sell-out race series with scores of runners and a distinctive following. Stash is now recognized for its aesthetic identity, inclusive energy, and community-first ethos. The impact goes beyond race day. We've built a loyal base that continues to engage through limited merch drops, off-season training groups, and spontaneous local runs. More than a race — it’s become a shared ritual for creative, curious runners across the city.",
      reflection:  "Building Stash Running showed me how much power design thinking has when applied to real-world experiences. Branding wasn’t just a layer—it was the mechanism that made running feel fun, fresh, and accessible again. The biggest insight? You don’t need to be “a runner” to show up. You just need the right invitation.",
      link: "https://stashrunning.com/"
    },

    'buildstuff': {
      tagline: "Unleashing creativity through constrained sprints.",
      roles: ["Concept Developer", "Event Organizer", "Facilitator"],
      skills: ["Event Production", "Workshop Design", "Creative Direction"],
      timeline: "Quarterly events since 2024",
      scale: "20-30 participants per event",
      challenge: "Creative people are often their own worst enemy. Perfectionism, overthinking, and fear of judgment can stall even the best ideas before they begin. I wanted to create a space that pushed past that—to short-circuit the inner critic and unlock momentum. BuildStuff was born as an antidote: a creative sprint that rewards speed, boldness, and imperfection in the name of making something—anything—now.",
      process: ["I developed a high-energy format where participants have just 2–3 hours to conceive and create something tangible based on a surprise theme. The prompts are intentionally strange, open-ended, and split in two halves—forcing participants to interpret, remix, and adapt in real time.",
              "Each sprint includes structured constraints—limited tools, time boxing, and no solo work if possible—that paradoxically increase creative output. These boundaries create urgency, dissolve hesitation, and lead to surprising outcomes. I continuously evolve the framework based on participant feedback, experimenting with new rules, themes, and group dynamics to keep things fresh and generative.",        
              "BuildStuff events are low-pressure but high-vibe, encouraging play over polish, energy over ego."],
      tools: ["Rapid Prototyping", "Time Boxing", "Creative Facilitation", "Brand Building", "Design", "Marketing"],
      outcome: "BuildStuff has grown into a recurring creative ritual for designers, developers, and makers. Many projects seeded in the sprints have evolved into full products, personal projects, or portfolio centerpieces. Beyond individual impact, the format has caught the attention of design teams looking to re-energize their internal innovation processes. Several companies have now adopted BuildStuff-style sessions as a team-building and idea-generation tool. The core idea—make fast, learn fast, have fun—seems to resonate far and wide.",
      reflection: "Creating BuildStuff taught me that creativity thrives under constraint. By designing a space where people had no time to overthink, I saw ideas flow more freely, collaborations spark more naturally, and confidence build with each messy, joyful output. It shifted how I think about facilitation, showing me that structure isn't the enemy of creativity—it's often the catalyst.",
      link: "https://buildstuff.uk/"
    },
    'rally': {
      tagline: "Making spontaneous gatherings frictionless and fun.",
      roles: ["Product Designer", "UX Lead"],
      skills: ["UI/UX Design", "Prototyping", "User Research"],
      timeline: "3-month design sprint",
      scale: "Early stage expansion",
      challenge: "Most social apps make it weirdly hard to hang out. Between endless group chats, calendar links, and half-hearted “maybe” RSVPs, spontaneous plans often fall apart before they begin. Rally was designed to solve that—removing the friction from casual meetups while ensuring invites reached the right people, at the right time.",
      process: ["I led user research sessions to identify pain points in social coordination. Using rapid prototyping methods, we tested multiple interaction models to find the simplest possible user flow. The final design incorporated behavioral insights about social commitment and FOMO (fear of missing out) to drive engagement.",
        "The final design hinges on speed and simplicity. Users can mark themselves as “free now” or “free later,” and create light-touch invites in seconds. Behind the scenes, behavioral insights around FOMO and social inertia shaped how and when invites get sent—making it easier for people to say “yes” in the moment.",
        "What made Rally different was how it embraced casual intent. Instead of rigid start times, formal RSVPs, or location overload, the app leaned into ambiguity—encouraging fluid plans and letting people opt in with just one tap. It wasn’t about logistics; it was about permission. The permission to say “I’m free,” without needing to orchestrate everything else."
      ],
      tools: ["User Interviews", "Interactive Prototyping", "A/B Testing", "Design", "Brand Building"],
      outcome: "Rally is still in early-stage development, but initial feedback has been promising. The simplified flow has resonated with users looking for a more lightweight way to make plans, and early testers reported feeling more inclined to reach out and say “who’s around?” The concept has sparked interest from friends, creatives, and social connectors who see the value in making spontaneity easier.",
      reflection: "This project taught me that successful social products often succeed by removing features rather than adding them. The breakthrough came when we eliminated several 'standard' event planning fields and replaced them with smart defaults based on user context.",
   
    },
    'ogma-therapy': {
      tagline: "Humanizing AI to transform speech therapy outcomes.",
      roles: ["Product Manager", "Growth Strategist"],
      skills: ["Product Strategy", "Healthcare UX", "Growth Marketing"],
      timeline: "12 months",
      scale: "Deployed in 12 therapy centers",
      challenge: "Speech therapy tools have long struggled to strike a balance between clinical depth and user experience. Many existing platforms were either overly technical, frustrating therapists and slowing down their workflow, or they focused too much on gamification, missing the mark on real therapeutic outcomes. Ogma set out to do both. On the therapist side, the goal was to build a trusted AI assistant that could help automate clinical note-taking and progress tracking—saving time and reducing burnout.On the child-facing side, we aimed to design an engaging, interactive experience—led by a virtual character called Og, or the “Therapet”—that would guide kids through their therapy in a way that felt like play, not homework.",
      process: ["This project required deep cross-functional collaboration across clinical, technical, and creative domains. I worked at the intersection of:",
        "- Clinical expertise – collaborating closely with speech and language therapists to understand their workflows, pain points, and goals.",
        "- AI engineering – working alongside machine learning engineers to align outputs with clinical safety standards and therapist expectations.",
        "- Product and UX design – crafting intuitive, joyful interfaces that worked for both adults and children.",
        "For the therapist-facing AI assistant, we ran rounds of feedback and shadowing with SLTs to refine how reports were generated, edited, and stored—ensuring we were reducing cognitive load, not adding to it.",
        "For Og, the Therapet, we prototyped and tested interactive exercises with real children and parents, gathering insights on what kept them engaged and what actually supported therapeutic progress. The design evolved to be adaptive, friendly, and focused on building daily speech habits through gentle nudges and game-like rewards.",],
      tools: ["Service Design", "Clinical Validation", "Engagement Analytics", "Service Design", "Conversational UX", "Clinical Validation & Safety Testing","Engagement Analytics", "AI-Powered Content Generation","User Testing",
        
        ],
      outcome: "Ogma Therapy’s platform launched with two integrated products designed to serve both clinicians and children. The Ogma Assistant, built for therapists, uses AI to generate clinical notes, session summaries, and progress reports in minutes—leading to a 40% reduction in admin time, faster onboarding of new clients, and increased confidence in documentation accuracy. On the child-facing side, Og the Therapet became a lovable virtual companion guiding kids through speech exercises in a way that felt playful and motivating. In early trials, Og drove a 40% increase in session engagement and helped children reach their speech goals 25% faster, with many kids genuinely looking forward to their “Og time.",
      reflection: "This was one of the most fulfilling products I’ve worked on—because it blended clinical impact with human-centered design at every step. I learned that AI isn’t valuable just because it’s powerful—it’s valuable when it disappears into the background and makes people feel supported, seen, and understood. Whether it was helping a therapist save precious hours each week, or designing a virtual pet that could gently encourage a child to try again, the work always came back to the same question: “Does this make therapy feel easier, safer, and more rewarding for the person using it? For Ogma, the answer became yes.",
    },
  };
  
  const currentProject = projectData[slug as keyof typeof projectData];
  const currentImages = projectImages[slug as keyof typeof projectImages];
  
  return <div className="bg-cream min-h-screen pt-24">
      {/* Header */}
      <div className="relative overflow-hidden">
        <BlurBlob color={project.color} size={300} className="left-0 top-10 -ml-32 opacity-50" />
        <BlurBlob color="#5D7AFF" size={250} className="right-0 top-40 -mr-32 opacity-30" />
        
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 py-16 relative z-10">
          <div className={`mb-4 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <Link to="/" className="inline-flex items-center text-dark/60 hover:text-dark transition-colors text-sm font-medium mb-4">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to all projects
            </Link>
          </div>
          
          <div className={`transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-4" style={{
            backgroundColor: `${project.color}20`,
            color: project.color
          }}>
              {project.subtitle}
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">{project.title}</h1>
            <p className="text-xl md:text-2xl text-dark/80 max-w-3xl font-medium">{currentProject.tagline}</p>
          </div>
        </div>
      </div>
      
      {/* Hero Image */}
      <div className={`relative -mt-8 z-20 container max-w-5xl mx-auto px-4 sm:px-6 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="aspect-[16/9] rounded-2xl overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>
        {currentProject.link && (
  <div className="mt-6">
    <a
      href={currentProject.link}
      target="_blank"
      rel="noopener noreferrer"
      className="pill-button inline-flex items-center"
    >
      Visit live site
      <ArrowRight className="ml-2 w-4 h-4" />
    </a>
  </div>
)}
      </div>
      
      {/* Project Details */}
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className={`grid md:grid-cols-3 gap-8 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <h3 className="text-lg font-display font-bold mb-3">Roles</h3>
            <ul className="space-y-1">
              {currentProject.roles.map((role, index) => <li key={index} className="text-dark/70">{role}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-display font-bold mb-3">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {currentProject.skills.map((skill, index) => <span key={index} className="inline-flex items-center text-xs px-2 py-1 rounded-full bg-dark/10">
                  {skill}
                </span>)}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-display font-bold mb-3">Timeline & Scale</h3>
            <div className="space-y-2">
              <div className="flex items-center text-dark/70">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{currentProject.timeline}</span>
              </div>
              <div className="flex items-center text-dark/70">
                <Users className="w-4 h-4 mr-2" />
                <span>{currentProject.scale}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`mt-16 transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              {currentProject.challenge}
            </p>
          </div>
        </div>
        
        <div className="mt-16 transition-all duration-700 delay-500">
  <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">The Process</h2>

  <div className="grid md:grid-cols-2 gap-10 items-start">
    {/* Text first */}
    <div className="prose prose-lg max-w-none space-y-4">
      {Array.isArray(currentProject.process)
        ? currentProject.process.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))
        : <p>{currentProject.process}</p>}
    </div>

    {/* Then image on the right */}
    <div className="rounded-xl overflow-hidden aspect-[3/4]">
      <img
        src={currentImages.image3}
        alt={`${project.title} process visual`}
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* Tools */}
  <div className="bg-white/30 rounded-xl p-6 mt-10">
    <h3 className="text-xl font-display font-bold mb-4">Tools & Approaches</h3>
    <div className="flex flex-wrap gap-3">
      {currentProject.tools.map((tool, index) => (
        <div
          key={index}
          className="flex items-center px-3 py-2 rounded-full bg-white/50 text-sm"
        >
          <Zap className="w-4 h-4 mr-2" style={{ color: project.color }} />
          {tool}
        </div>
      ))}
    </div>
  </div>
</div>


        <div className={`mt-16 transition-all duration-700 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">The Outcome</h2>
          <div className="prose prose-lg max-w-none mb-10">
            <p>
              {currentProject.outcome}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="aspect-[4/3] rounded-xl overflow-hidden">
              <img 
                alt={`${project.title} detail 1`} 
                className="w-full h-full object-cover" 
                src={currentImages.image1} 
              />
            </div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden">
              <img 
                alt={`${project.title} detail 2`} 
                className="w-full h-full object-cover" 
                src={currentImages.image2} 
              />
            </div>
          </div>
        </div>
        
        <div className={`mt-16 transition-all duration-700 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Reflection</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              {currentProject.reflection}
            </p>
          </div>
        </div>
      </div>
      
      {/* Next Project */}
      <div className="bg-dark text-white py-16">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-white/60 text-sm mb-2">Up next</p>
              <h3 className="text-2xl md:text-3xl font-display font-bold">{nextProject.title}</h3>
            </div>
            <div className="mt-4 md:mt-0">
              <Link to={`/case-study/${nextProject.slug}`} className="inline-flex items-center text-white hover:text-white/80 transition-colors">
                Check it out
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>;
};

export default CaseStudyPage;
