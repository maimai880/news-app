import {AppProvider} from "./providers/app.tsx";
import {Header} from "@/components/Header";

const App = () => {
  return (
    <AppProvider>
      <Header/>
    </AppProvider>
  );
};

export default App
//TODO: ./の@への置き換え
