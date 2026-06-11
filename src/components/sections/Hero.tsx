import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden"
    >
      <video
        src="/hero/banner-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay just in case the video is too bright for the navbar, optional but often good for contrast */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-10">
        <span className="font-accent text-sm text-white drop-shadow-md">Scroll to explore</span>
        <div className="w-5 h-8 border-2 border-white/80 rounded-full flex justify-center pt-1.5 drop-shadow-md">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
