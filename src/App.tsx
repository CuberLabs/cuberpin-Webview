import { useEffect } from "react";
import { postMessage } from "./utils/messageUtil";
import { Router } from "./router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const BANNEREXIST = true;

function App() {
  useEffect(() => {
    const messageHandler = (event: MessageEvent) => {
      const { type } = JSON.parse(event.data);
      if (type === "checkBanner") {
        postMessage({ type, doesBannerExist: BANNEREXIST });
      }
    };

    document.addEventListener("message", messageHandler as EventListener);
    window.addEventListener("message", messageHandler);
    return () => {
      document.removeEventListener("message", messageHandler as EventListener);
      window.removeEventListener("message", messageHandler);
    };
  }, []);

  return (
    <QueryClientProvider client={new QueryClient()}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
