import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Load Unicorn Studio script
    const win = window as any;
    if (!win.UnicornStudio) {
      win.UnicornStudio = { isInitialized: false };
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js";
      script.onload = () => {
        if (!win.UnicornStudio.isInitialized) {
          win.UnicornStudio.init();
          win.UnicornStudio.isInitialized = true;
        }
      };
      (document.head || document.body).appendChild(script);
    }
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden font-nunito">
      <div
        data-us-project="4csFUvvZF7FxYhlh0zqM" 
        className="w-full h-full [&_a[href*='unicorn.studio']]:!hidden"
      />
      
      {/* Glassmorphic footer bar */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-6 py-4 flex items-center justify-center gap-6 z-50 shadow-2xl shadow-blue-500/20">
        <a
          href="https://x.com/bellaondoma"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600/80 hover:bg-blue-600 backdrop-blur-sm border border-white/30 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/40"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          <span className="font-semibold">Follow on X</span>
        </a>
        
        <a
          href="https://app.youform.com/forms/rzhbjdka"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-full bg-white text-blue-600 hover:bg-blue-50 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/40"
        >
          Join Early Access
        </a>
      </div>
    </div>
  );
};

export default Index;
