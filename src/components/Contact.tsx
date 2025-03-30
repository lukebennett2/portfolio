import { useState, useEffect, useRef } from 'react';
import SectionTitle from './SectionTitle';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    const mailtoLink = `mailto:luke.bennett888@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" ref={sectionRef} className="py-0 bg-cream section-reveal">
      <div className="container-section">
        <SectionTitle title="Let's Connect" description="Have a project in mind? I'd love to hear from you. Let's discuss how we can work together." />

        <div className="max-w-3xl mx-auto mt-16">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-dark/20 focus:border-dark focus:ring-1 focus:ring-dark outline-none transition-all bg-transparent"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-dark/20 focus:border-dark focus:ring-1 focus:ring-dark outline-none transition-all bg-transparent"
                  placeholder="Your email"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                rows={5}
                value={message}
                onChange={e => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-dark/20 focus:border-dark focus:ring-1 focus:ring-dark outline-none transition-all bg-transparent"
                placeholder="Tell me about your project"
                required
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button type="submit" className="pill-button">
                Send Message
              </button>
            </div>
          </form>

          <div className="mt-16 pt-10 border-t border-dark/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-medium mb-2">Email</h4>
                <a href="mailto:luke.bennett888@gmail.com" className="text-dark/70 hover:text-dark transition-colors">
                  luke.bennett888@gmail.com
                </a>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-2">Follow me</h4>
                <div className="flex space-x-4">
                  {/* Add actual links below */}
                  <a href="https://www.linkedin.com/in/lukebennett888/" className="text-dark/70 hover:text-dark transition-colors">LinkedIn</a>
                  <a href="https://www.instagram.com/lukebshoots/" className="text-dark/70 hover:text-dark transition-colors">Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
