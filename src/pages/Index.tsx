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
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      <div 
        data-us-project="4csFUvvZF7FxYhlh0zqM" 
        className="w-full h-full"
      />
    </div>
  );
};

export default Index;
