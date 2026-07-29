import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MousePointer2, ArrowRight, ShieldCheck, Cpu, Activity, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top -50',
        end: 99999,
        toggleClass: { className: 'bg-background/80 backdrop-blur-xl border-dark/10 text-dark', targets: navRef.current },
        onToggle: self => {
          if(!self.isActive) {
            gsap.set(navRef.current, { backgroundColor: 'transparent', borderColor: 'transparent', color: '#F2F0E9' });
          }
        }
      });
    }, navRef);
    return () => ctx.revert();
  }, []);

  return (
    <nav ref={navRef} className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full border border-transparent transition-colors duration-300 flex items-center gap-12 text-[#F2F0E9]">
      <div className="font-title font-bold text-xl tracking-tight">LivrExpress</div>
      <div className="hidden md:flex items-center gap-8 font-title text-sm font-medium">
        <a href="#features" className="interactive-link">Fonctionnalités</a>
        <a href="#manifesto" className="interactive-link">Manifeste</a>
        <a href="#protocol" className="interactive-link">Protocole</a>
      </div>
      <button className="magnetic-btn bg-accent text-background px-5 py-2 rounded-full font-title text-sm font-semibold flex items-center gap-2">
        <span>Rejoindre</span>
        <div className="bg-layer"></div>
      </button>
    </nav>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRefs.current, {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.08,
        ease: 'power3.out',
        delay: 0.2
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-[100dvh] w-full overflow-hidden flex items-end pb-24 px-8 md:px-16">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2000&auto=format&fit=crop" alt="Dark Forest" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-5xl">
        <h1 className="flex flex-col gap-2 text-background">
          <span ref={el => textRefs.current[0] = el} className="font-title font-semibold text-2xl md:text-4xl tracking-tight text-background/80">
            LivrExpress est la
          </span>
          <span ref={el => textRefs.current[1] = el} className="font-dramatic italic text-7xl md:text-[9rem] leading-none text-background">
            Vitesse.
          </span>
        </h1>
        <p ref={el => textRefs.current[2] = el} className="mt-8 text-lg md:text-xl font-body max-w-md text-background/70">
          Livraison rapide de colis en 2 heures à Dakar. Le protocole organique de la logistique moderne.
        </p>
        <div ref={el => textRefs.current[3] = el} className="mt-10">
          <button className="magnetic-btn bg-accent text-background px-8 py-4 rounded-full font-title text-base font-semibold flex items-center gap-3">
            <span>Rejoindre la liste d'attente</span>
            <ArrowRight size={20} />
            <div className="bg-layer"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-32 px-6 md:px-16 bg-background relative z-10 rounded-t-[3rem] -mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Mélangeur Diagnostique */}
          <div className="bg-[#EBE9E0] rounded-[2rem] p-8 shadow-sm border border-dark/5 flex flex-col h-[400px]">
            <h3 className="font-title font-semibold text-xl mb-2">I.A. Avancée</h3>
            <p className="font-body text-dark/70 text-sm mb-8">Routage prédictif et optimisation en temps réel.</p>
            <div className="flex-1 relative flex items-center justify-center">
              <div className="absolute w-full max-w-[200px] aspect-square rounded-full border border-primary/20 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                 <Activity size={32} className="text-primary opacity-50" />
              </div>
              <div className="absolute w-full max-w-[140px] aspect-square rounded-full border border-accent/30 flex items-center justify-center animate-[spin_7s_linear_infinite_reverse]">
                 <Cpu size={24} className="text-accent" />
              </div>
            </div>
          </div>

          {/* Card 2: Machine à Écrire Télémétrie */}
          <div className="bg-[#EBE9E0] rounded-[2rem] p-8 shadow-sm border border-dark/5 flex flex-col h-[400px]">
            <h3 className="font-title font-semibold text-xl mb-2">Interface Intuitive</h3>
            <p className="font-body text-dark/70 text-sm mb-8">Télémétrie de livraison en direct.</p>
            <div className="flex-1 bg-dark rounded-xl p-6 font-data text-xs text-primary/80 overflow-hidden relative shadow-inner">
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                <span className="text-[10px] text-background/50 uppercase">Live Flux</span>
              </div>
              <div className="mt-8 flex flex-col gap-2">
                <p>{'>'} INIT_TRACKING_SEQ</p>
                <p>{'>'} PACKAGE_LOC_FOUND</p>
                <p>{'>'} ETA: 120_MINUTES</p>
                <p>{'>'} STATUS: <span className="text-background">IN_TRANSIT</span></p>
                <p className="flex items-center">{'>'} AWAITING_DROP<span className="w-2 h-4 bg-accent ml-1 animate-pulse"></span></p>
              </div>
            </div>
          </div>

          {/* Card 3: Planificateur Protocole Curseur */}
          <div className="bg-[#EBE9E0] rounded-[2rem] p-8 shadow-sm border border-dark/5 flex flex-col h-[400px] overflow-hidden group">
            <h3 className="font-title font-semibold text-xl mb-2">Sécurité Inégalée</h3>
            <p className="font-body text-dark/70 text-sm mb-8">Garantie de bout en bout.</p>
            <div className="flex-1 relative flex flex-col justify-end bg-background/50 rounded-xl p-4 border border-dark/5">
               <div className="grid grid-cols-5 gap-2 mb-4">
                  {[...Array(15)].map((_, i) => (
                    <div key={i} className={`aspect-square rounded-md ${i === 7 || i === 12 ? 'bg-primary/20' : 'bg-dark/5'}`}></div>
                  ))}
               </div>
               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-accent opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-8 group-hover:translate-y-0">
                  <ShieldCheck size={48} />
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Manifesto = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
    }, textRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="manifesto" className="relative py-40 bg-dark text-background overflow-hidden px-6 md:px-16">
      <div className="absolute inset-0 z-0 opacity-20">
        <img src="https://images.unsplash.com/photo-1615800098779-1be32e60cca3?q=80&w=2000&auto=format&fit=crop" alt="Texture" className="w-full h-full object-cover" />
      </div>
      <div ref={textRef} className="relative z-10 max-w-4xl mx-auto text-center flex flex-col gap-12">
        <p className="font-title text-xl md:text-2xl text-background/60 font-medium">
          La plupart des services de livraison se concentrent sur : l'attente incertaine et la logistique rigide.
        </p>
        <p className="font-dramatic italic text-5xl md:text-7xl leading-tight">
          Nous nous concentrons sur : la <span className="text-accent not-italic font-title font-bold tracking-tight px-2">fluidité</span> organique.
        </p>
      </div>
    </section>
  );
};

const Protocol = () => {
  const containerRef = useRef(null);
  
  return (
    <section id="protocol" ref={containerRef} className="py-32 px-6 md:px-16 bg-background">
      <div className="max-w-3xl mx-auto flex flex-col gap-16">
        <h2 className="font-title font-bold text-4xl md:text-5xl text-dark text-center mb-16">Protocole Opérationnel</h2>
        
        <div className="sticky top-32 bg-[#EBE9E0] rounded-[2rem] p-10 md:p-16 shadow-xl border border-dark/10 flex flex-col gap-4 transform transition-all">
          <div className="font-data text-accent text-sm font-semibold">STEP_01</div>
          <h3 className="font-title text-3xl font-bold">Requête Initiale</h3>
          <p className="font-body text-dark/70 text-lg">L'algorithme analyse la position et alloue le vecteur le plus rapide en 0.4s.</p>
        </div>

        <div className="sticky top-40 bg-primary text-background rounded-[2rem] p-10 md:p-16 shadow-xl border border-primary/20 flex flex-col gap-4 transform transition-all">
          <div className="font-data text-accent text-sm font-semibold">STEP_02</div>
          <h3 className="font-title text-3xl font-bold">Transit Actif</h3>
          <p className="font-body text-background/70 text-lg">Le colis entre dans le flux physique. Télémétrie en temps réel activée.</p>
        </div>

        <div className="sticky top-48 bg-dark text-background rounded-[2rem] p-10 md:p-16 shadow-xl flex flex-col gap-4 transform transition-all">
          <div className="font-data text-accent text-sm font-semibold">STEP_03</div>
          <h3 className="font-title text-3xl font-bold">Terminaison</h3>
          <p className="font-body text-background/70 text-lg">Livraison effectuée avec précision biométrique et confirmation signée.</p>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dark text-background pt-24 pb-12 px-8 md:px-16 rounded-t-[4rem] relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
        <div className="flex flex-col gap-6">
          <div className="font-title font-bold text-3xl">LivrExpress</div>
          <p className="font-dramatic italic text-2xl text-background/70 max-w-sm">La précision organique de la livraison.</p>
        </div>
        <div className="flex gap-16 font-title text-sm font-medium">
          <div className="flex flex-col gap-4 text-background/60">
            <a href="#" className="interactive-link hover:text-background">Accueil</a>
            <a href="#features" className="interactive-link hover:text-background">Système</a>
            <a href="#protocol" className="interactive-link hover:text-background">Protocole</a>
          </div>
          <div className="flex flex-col gap-4 text-background/60">
            <a href="#" className="interactive-link hover:text-background">Légal</a>
            <a href="#" className="interactive-link hover:text-background">Confidentialité</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center border-t border-background/10 pt-8 text-sm font-data text-background/40">
        <div>© 2026 LivrExpress. Dakar, SN.</div>
        <div className="flex items-center gap-3 bg-background/5 px-4 py-2 rounded-full">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span>SYSTÈME OPÉRATIONNEL</span>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="w-full relative">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Manifesto />
        <Protocol />
      </main>
      <Footer />
    </div>
  );
}

export default App;
