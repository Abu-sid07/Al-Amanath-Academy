"use client";

import React, { useRef, useState } from "react";

export default function OurProudMoments() {
  // 1. Create a reference to the video element
  const videoRef = useRef<HTMLVideoElement>(null);
  // 2. State to track if video is playing to hide/show the play button
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayToggle = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <span className="text-xs uppercase tracking-widest text-emerald-700 font-bold block mb-2">
          DOCUMENTARY
        </span>
        <h2 className="text-4xl font-extrabold text-slate-900 mb-3 relative inline-block">
          Our Proud Moments
          <span className="absolute left-1/4 right-1/4 bottom-[-8px] h-[3px] bg-amber-500 rounded-full"></span>
        </h2>
        <p className="text-slate-600 mt-4">
          A glimpse into the legacy and achievements of Al Amanath English Academy
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text content */}
          <div className="space-y-6 text-left">
            <h3 className="text-3xl font-bold text-slate-900">Al Amanath's Legacy</h3>
            
            <p className="text-slate-600 leading-relaxed">
              Al Amanath English Academy stands as a beacon of educational excellence in Melapalayam. 
              Since its establishment, we have been committed to transforming lives through quality education 
              and fostering confident communicators.
            </p>
            
            <p className="text-slate-600 leading-relaxed">
              With over 1000+ students trained, 10+ prestigious awards, and 20+ successful Eloquent 
              Speaker Awards events, our academy continues to set benchmarks in English education. We take 
              pride in our free education initiative that makes quality learning accessible to all, 
              regardless of financial background.
            </p>

            <p className="text-slate-600 leading-relaxed">
              Our dedicated team of experienced trainers, supportive staff, and enthusiastic student 
              coordinators work tirelessly to ensure every student achieves their communication goals 
              and builds lasting confidence.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 text-sm font-semibold border border-emerald-100">
              ✨ Excellence in English Education ✨
            </div>
          </div>

          {/* Right Column: Interactive Video Wrapper */}
          <div className="flex flex-col items-center">
            <div 
              onClick={handlePlayToggle}
              className="relative aspect-video w-full max-w-lg rounded-2xl overflow-hidden bg-black shadow-lg cursor-pointer group"
            >
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                controls={isPlaying} // Shows native bar only after clicking play
              >
                <source src="/al-amanath-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Custom Play Overlay: Disappears smoothly when video plays */}
              {!isPlaying && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 group-hover:bg-black/50">
                  <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center shadow-md transform group-hover:scale-110 transition duration-300">
                    <svg 
                      className="w-8 h-8 text-white fill-current ml-1" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
            
            <p className="text-sm text-slate-500 mt-3 italic">
              {isPlaying ? "Click video to pause" : "Click to play our academy documentary"}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}