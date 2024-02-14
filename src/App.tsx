import { Main } from "./main";
import GlobalProvider from "./providers/GlobalProvider";

function App() {
  return (
    <GlobalProvider>
      <Main />
    </GlobalProvider>
  );
}

export default App;
