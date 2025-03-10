
import { useState } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import ChatPage from "@/components/ChatPage";
import ContactPage from "@/components/ContactPage";

// Create a dark-only Background component
const Background = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-950/70 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-circuit-pattern opacity-20" />
      </div>
    </div>
  );
};

const Index = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <ThemeProvider>
      <div className="flex flex-col h-screen">
        <Background />
        
        <Header showContact={showContact} setShowContact={setShowContact} />

        <main className="flex-1 overflow-y-auto container max-w-4xl mx-auto p-4 chat-container">
          {showContact ? <ContactPage /> : <ChatPage />}
        </main>
      </div>
      <Toaster />
    </ThemeProvider>
  );
}

export default Index;
