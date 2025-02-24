
import React from 'react';
import { Window } from './Window';
import { FolderOpen, Globe, Mail, User, Github, Award, School, Briefcase } from 'lucide-react';

const RetroPage = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="desktop-icon flex flex-col items-center space-y-2 p-2 hover:bg-white/10 rounded"
      >
        <Globe className="w-10 h-10 text-vista-accent" />
        <span className="text-sm text-center">My Website</span>
      </button>

      {isOpen && (
        <Window title="KARTIK PANDEY - Personal Website" onClose={() => setIsOpen(false)}>
          <div className="h-full overflow-auto bg-[#000080] text-[#00FF00] font-['VT323',monospace] p-6">
            <div className="max-w-3xl mx-auto">
              <header className="text-center mb-8">
                <h1 className="text-4xl mb-2 animate-pulse text-[#FF00FF]">*** KARTIK PANDEY ***</h1>
                <h2 className="text-2xl text-[#FFFF00] mb-2">GRAND CHAMPION @ GOOGLE</h2>
                <div className="text-[#FFFF00] text-xl">
                  ==========================================
                </div>
              </header>

              <section className="mb-8">
                <h2 className="text-2xl text-[#FF00FF] mb-4">&gt; CONTACT INFO &lt;</h2>
                <div className="bg-black/50 p-4 border-2 border-[#00FF00]">
                  <p className="mb-2">&gt; Location: USC, Los Angeles, CA</p>
                  <p className="mb-2">&gt; Phone: 213-561-7298</p>
                  <p className="mb-2">&gt; Email: kartikpandeykapie@gmail.com</p>
                  <p>&gt; LinkedIn: /in/kartik-pandey-kp/</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl text-[#FF00FF] mb-4">&gt; FEATURED PROJECTS &lt;</h2>
                <div className="space-y-4">
                  <div className="bg-black/50 p-4 border-2 border-[#00FF00]">
                    <h3 className="text-[#FFFF00] mb-2">&gt; NabuAI - AI Research Assistant</h3>
                    <p className="mb-2">- SBHacks Winner</p>
                    <p className="mb-2">- Led team of 4 to build AI research assistant</p>
                    <p>- Tech: Next.js, Flask, Firebase, GPT-4</p>
                  </div>
                  
                  <div className="bg-black/50 p-4 border-2 border-[#00FF00]">
                    <h3 className="text-[#FFFF00] mb-2">&gt; AI Commentator & Highlighter</h3>
                    <p className="mb-2">- Grand Champion @ GOOGLE</p>
                    <p className="mb-2">- Raised $75,000 funding</p>
                    <p>- Tech: Next.js, Flask, Python, OpenAI</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl text-[#FF00FF] mb-4">&gt; EDUCATION &lt;</h2>
                <div className="bg-black/50 p-4 border-2 border-[#00FF00]">
                  <p className="mb-2">&gt; USC - M.S. Computer Science</p>
                  <p className="mb-2">&gt; Expected: May 2025</p>
                  <p>&gt; Thapar Institute - B.E. Computer Engineering</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl text-[#FF00FF] mb-4">&gt; QUICK LINKS &lt;</h2>
                <div className="grid gap-4">
                  <a 
                    href="https://www.linkedin.com/in/kartik-pandey-kp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black/50 p-4 border-2 border-[#00FF00] hover:bg-[#00FF00]/20 transition-colors flex items-center gap-3"
                  >
                    <User className="w-6 h-6" />
                    <span>&gt; LinkedIn Profile</span>
                  </a>
                  <a 
                    href={`mailto:kartikpandeykapie@gmail.com`}
                    className="bg-black/50 p-4 border-2 border-[#00FF00] hover:bg-[#00FF00]/20 transition-colors flex items-center gap-3"
                  >
                    <Mail className="w-6 h-6" />
                    <span>&gt; Contact Me</span>
                  </a>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl text-[#FF00FF] mb-4">&gt; SKILLS &lt;</h2>
                <div className="bg-black/50 p-4 border-2 border-[#00FF00]">
                  <p className="text-[#FFFF00]">Python | C++ | JavaScript | TypeScript | React</p>
                  <p className="text-[#FFFF00]">Machine Learning | AI | Full-Stack | Cloud</p>
                </div>
              </section>

              <footer className="text-center text-[#FFFF00] mt-8">
                <div>==========================================</div>
                <p className="mt-2">© 2024 - All rights reserved</p>
                <p className="text-xs mt-2 animate-pulse">Best viewed with Netscape Navigator</p>
              </footer>
            </div>
          </div>
        </Window>
      )}
    </>
  );
};

export default RetroPage;
