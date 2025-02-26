import React, { useState } from 'react';
import { Window } from './Window';
import { FileText, Mail, Briefcase, Award, GraduationCap, Code, BookOpen, Trophy } from 'lucide-react';

const RetroResume = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="desktop-icon flex flex-col items-center space-y-2 p-2 rounded hover:bg-white/10 transition-colors"
      >
        <FileText className="w-12 h-12 text-white drop-shadow-lg" />
        <span className="text-white text-sm font-segoe text-center drop-shadow-[1px_1px_2px_rgba(0,0,0,0.8)]">
          My Portfolio
        </span>
      </button>

      {isOpen && (
        <Window
          title="KARTIK PANDEY - Portfolio"
          onClose={() => setIsOpen(false)}
          initialPosition={{ x: 100, y: 50 }}
        >
          <div className="h-full overflow-auto bg-[#000080] text-[#00FF00] font-['VT323',monospace] p-6">
            <div className="max-w-4xl mx-auto">
              <header className="text-center mb-8">
                <h1 className="text-4xl mb-2 animate-pulse text-[#FF00FF]">*** KARTIK PANDEY ***</h1>
                <h2 className="text-2xl text-[#FFFF00] mb-2">GRAND CHAMPION @ GOOGLE</h2>
                <div className="flex justify-center items-center gap-4 text-[#00FF00] mb-2">
                  <Mail className="w-4 h-4" /> kartikpandeykapie@gmail.com |
                  <Trophy className="w-4 h-4" /> 213-561-7298
                </div>
                <a 
                  href="https://www.linkedin.com/in/kartik-pandey-kp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00FFFF] hover:text-[#FFFF00] transition-colors"
                >
                  linkedin.com/in/kartik-pandey-kp
                </a>
              </header>

              <section className="mb-8">
                <h2 className="text-2xl text-[#FF00FF] mb-4 border-b-2 border-[#FF00FF]">&gt; PROJECTS &lt;</h2>
                {[
                  {
                    title: "NabuAI - AI-Powered Research Assistant",
                    subtitle: "SBHacks Winner (January 2025)",
                    points: [
                      "Led a team of 4 to build an AI research assistant",
                      "Automated citation generation and summarization from 250M+ scholarly dataset",
                      "Created Next.js + Flask platform with Firebase for AI-driven search",
                      "Open-sourced features of NotebookLM, improving accessibility",
                      "Tech Stack: Next.js, Flask, Firebase, GPT-4, SingleStore, Aryn API"
                    ]
                  },
                  {
                    title: "RoundUp for Impact (RuFi)",
                    subtitle: "HackSC Winner (November 2024)",
                    points: [
                      "Led team of 4 to develop AI-powered investment platform",
                      "Designed system and engineered AI agent for custom trading algorithms",
                      "Developed full-stack platform with DAIN-powered voice commands",
                      "Automated transaction data aggregation from multiple financial institutions",
                      "Tech Stack: React, SingleStore, DAIN, Google Cloud, Python, JavaScript"
                    ]
                  },
                  {
                    title: "AI Commentator & Highlighter",
                    subtitle: "Grand Champion @ GOOGLE (October 2024)",
                    points: [
                      "Led development of AI-powered sports media production platform",
                      "Implemented real-time commentary using digital twin commentators",
                      "Raised $75,000 funding from Google for Startup in 24 hours",
                      "Tech Stack: Next.js, Flask, Python, OpenAI, GPT, Gemini, LLMs"
                    ]
                  },
                  {
                    title: "Stock Trading System",
                    subtitle: "February 2024-May 2024",
                    points: [
                      "Developed Android app and website for stock trading",
                      "Implemented symbol search, stock views, virtual trading",
                      "Enhanced UI/UX with HTML5, CSS, Bootstrap, SQL and Angular",
                      "Combined 5+ Highcharts APIs for interactive visualization"
                    ]
                  },
                  {
                    title: "Weenix Operating System",
                    subtitle: "January 2024-May 2024",
                    points: [
                      "Led team of 4 to build UNIX operating system",
                      "Implemented processes, threads, VFS, VM, shadow objects",
                      "Created user/kernel shell and crash-resilient file system"
                    ]
                  }
                ].map((project, index) => (
                  <div key={index} className="bg-black/50 p-4 border-2 border-[#00FF00] mb-4">
                    <h3 className="text-[#FFFF00] text-xl mb-2">&gt; {project.title}</h3>
                    <p className="text-[#00FFFF] mb-2">{project.subtitle}</p>
                    <ul className="list-none">
                      {project.points.map((point, idx) => (
                        <li key={idx} className="mb-1">&gt; {point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>

              <section className="mb-8">
                <h2 className="text-2xl text-[#FF00FF] mb-4 border-b-2 border-[#FF00FF]">&gt; EXPERIENCE &lt;</h2>
                {[
                  {
                    title: "Student Software Developer / Researcher",
                    company: "Information Science Institute, Los Angeles, CA",
                    period: "July 2023-Present",
                    points: [
                      "Researched symbiotic relationship between humans and LLMs",
                      "Developed CAVE with 75.7% accuracy and 0.99 consistency",
                      "Distilled GPT-4-TURBO outputs into LLAMA-3-8B",
                      "Created HMM for map matching with improved speed and accuracy",
                      "Reduced data cleaning and processing times by 90%"
                    ]
                  },
                  {
                    title: "AI Engineering Intern",
                    company: "Mercer Mettl, Gurugram",
                    period: "January 2023-June 2023",
                    points: [
                      "Built scalable ID Card recognition system with 98% accuracy",
                      "Optimized pipeline for large-scale datasets",
                      "Integrated with AWS services for production environment"
                    ]
                  },
                  {
                    title: "Research Intern",
                    company: "Carnegie Mellon University",
                    period: "September 2022-March 2023",
                    points: [
                      "Worked on mutational signatures in cancer genomes",
                      "Developed algorithms using autoencoders for improved accuracy"
                    ]
                  },
                  {
                    title: "Summer Research Intern",
                    company: "IIIT-Hyderabad",
                    period: "May 2022-June 2022",
                    points: [
                      "Invented GAN algorithms for pairwise similarity datasets",
                      "Enhanced model robustness against adversarial attacks",
                      "Achieved over 95% accuracy in experiments"
                    ]
                  },
                  {
                    title: "Research Intern",
                    company: "Moonplexus, Pune",
                    period: "August 2021-February 2022",
                    points: [
                      "Engineered YOLO-based model with 97% accuracy",
                      "Optimized for real-time vehicle systems",
                      "Improved performance by 30% for large-scale data"
                    ]
                  },
                  {
                    title: "Software Developer Intern",
                    company: "Samsung - SRIB, Bengaluru",
                    period: "May 2021-November 2021",
                    points: [
                      "Led team of four for hand gesture recognition system",
                      "Achieved 98% accuracy and 30+ FPS",
                      "Deployed model in Android app with 60% performance improvement"
                    ]
                  },
                  {
                    title: "Undergraduate Researcher",
                    company: "Thapar University",
                    period: "March 2021-June 2021",
                    points: [
                      "Led team for precision agriculture project",
                      "Designed plant disease and weed detection system",
                      "Achieved 98% accuracy with self-built datasets"
                    ]
                  }
                ].map((exp, index) => (
                  <div key={index} className="bg-black/50 p-4 border-2 border-[#00FF00] mb-4">
                    <h3 className="text-[#FFFF00] text-xl mb-1">&gt; {exp.title}</h3>
                    <p className="text-[#00FFFF] mb-2">{exp.company} | {exp.period}</p>
                    <ul className="list-none">
                      {exp.points.map((point, idx) => (
                        <li key={idx} className="mb-1">&gt; {point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>

              <section className="mb-8">
                <h2 className="text-2xl text-[#FF00FF] mb-4 border-b-2 border-[#FF00FF]">&gt; PUBLICATIONS &lt;</h2>
                <div className="bg-black/50 p-4 border-2 border-[#00FF00]">
                  <h3 className="text-[#FFFF00] text-xl mb-2">&gt; CAVE: Controllable Authorship Verification Explanations</h3>
                  <p className="text-[#00FFFF] mb-2">NAACL 2025 (January 2025)</p>
                  <p>Engineered an offline, privacy-preserving Llama-3-8B model for authorship verification, leveraging structured, verifiable free-text rationales to improve label-consistent interpretability and predictive accuracy.</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl text-[#FF00FF] mb-4 border-b-2 border-[#FF00FF]">&gt; EDUCATION &lt;</h2>
                <div className="bg-black/50 p-4 border-2 border-[#00FF00]">
                  <div className="mb-4">
                    <h3 className="text-[#FFFF00] text-xl">&gt; University of Southern California</h3>
                    <p className="text-[#00FFFF]">M.S. in Computer Science | 2023-2025</p>
                    <p>Key Courses: Algorithms, Database Systems, NLP, OS</p>
                  </div>
                  <div>
                    <h3 className="text-[#FFFF00] text-xl">&gt; Thapar Institute of Engineering</h3>
                    <p className="text-[#00FFFF]">B.E. in Computer Engineering | GPA: 9.35/10</p>
                    <p>Specialization: Robotics and Edge AI (Nvidia)</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl text-[#FF00FF] mb-4 border-b-2 border-[#FF00FF]">&gt; SKILLS &lt;</h2>
                <div className="bg-black/50 p-4 border-2 border-[#00FF00] text-[#FFFF00]">
                  <p className="mb-2">&gt; Languages: Python, C/C++, JavaScript, TypeScript, Java</p>
                  <p className="mb-2">&gt; Web: React, Next.js, Angular, Node.js, Flask</p>
                  <p className="mb-2">&gt; AI/ML: TensorFlow, PyTorch, Computer Vision, NLP</p>
                  <p>&gt; Tools: Docker, Kubernetes, AWS, Git, Linux</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl text-[#FF00FF] mb-4 border-b-2 border-[#FF00FF]">&gt; HONORS &lt;</h2>
                <div className="bg-black/50 p-4 border-2 border-[#00FF00]">
                  <ul className="list-none">
                    <li className="mb-2">&gt; Grand Champion @ Google HQ - $75,000 Prize</li>
                    <li className="mb-2">&gt; Winner of HackSC SoCal Tech Week 2024</li>
                    <li className="mb-2">&gt; Winner of SB Hacks</li>
                    <li>&gt; Top 10 nationally at Geoffrey Hinton Fellowship</li>
                  </ul>
                </div>
              </section>

              <footer className="text-center text-[#FFFF00] mt-8">
                <div>==========================================</div>
                <p className="text-xs mt-2 animate-pulse">© 2024 - Best viewed with Netscape Navigator</p>
              </footer>
            </div>
          </div>
        </Window>
      )}
    </>
  );
};

export default RetroResume;
