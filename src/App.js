import "./App.css";
import Table from "./Components/Table";
import FormPage from "./Pages/FormPage";

function App() {
  return (
    <div className="bg-[#242B2E] flex flex-col h-full items-center gap-4">
      <FormPage />
      <Table />
    </div>
  );
}

export default App;
