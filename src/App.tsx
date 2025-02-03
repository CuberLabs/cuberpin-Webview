import { Router } from "./router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
