
import React from 'react';
import { Window } from './Window';
import { FolderOpen, Globe, Mail, User } from 'lucide-react';

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
        <Window title="My Personal Website - Welcome to the 80s!" onClose={() => setIsOpen(false)}>
          <div className="h-full overflow-auto bg-[#000080] text-[#00FF00] font-['VT323',monospace] p-6">
            <div className="max-w-3xl mx-auto">
              <header className="text-center mb-8">
                <h1 className="text-4xl mb-2 animate-pulse text-[#FF00FF]">*** WELCOME TO MY PAGE ***</h1>
                <div className="text-[#FFFF00] text-xl">
                  ==========================================
                </div>
              </header>

              <section className="mb-8">
                <h2 className="text-2xl text-[#FF00FF] mb-4">&gt; ABOUT ME &lt;</h2>
                <div className="bg-black/50 p-4 border-2 border-[#00FF00]">
                  <p className="mb-2">&gt; Name: John Doe</p>
                  <p className="mb-2">&gt; Location: Cyberspace</p>
                  <p>&gt; Status: Online</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl text-[#FF00FF] mb-4">&gt; MY LINKS &lt;</h2>
                <div className="grid gap-4">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-black/50 p-4 border-2 border-[#00FF00] hover:bg-[#00FF00]/20 transition-colors flex items-center gap-3"
                  >
                    <FolderOpen className="w-6 h-6" />
                    <span>&gt; GitHub Projects</span>
                  </a>
                  <a 
                    href="mailto:example@email.com"
                    className="bg-black/50 p-4 border-2 border-[#00FF00] hover:bg-[#00FF00]/20 transition-colors flex items-center gap-3"
                  >
                    <Mail className="w-6 h-6" />
                    <span>&gt; Contact Me</span>
                  </a>
                  <a 
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black/50 p-4 border-2 border-[#00FF00] hover:bg-[#00FF00]/20 transition-colors flex items-center gap-3"
                  >
                    <User className="w-6 h-6" />
                    <span>&gt; LinkedIn Profile</span>
                  </a>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl text-[#FF00FF] mb-4">&gt; VISITOR COUNTER &lt;</h2>
                <div className="bg-black/50 p-4 border-2 border-[#00FF00] text-center">
                  <span className="text-[#FFFF00]">000001</span>
                </div>
              </section>

              <footer className="text-center text-[#FFFF00] mt-8">
                <div>==========================================</div>
                <p className="mt-2">© 1985 - All rights reserved</p>
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
