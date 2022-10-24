import Card from "./components/Card";
import { text } from "./helpers/text";

function App() {
  return (
    <main className="box-border h-screen w-full flex items-center justify-center bg-LightGray text-body">
      <Card title={text.title} para={text.para}/>
    </main>
  );
}

export default App;
