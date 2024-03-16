import { CustomTable } from "./components/CustomTable";
import data from "./data/data.json";

const options = [5, 10, 15];

const App = () => {
  return (
    <>
      <CustomTable items={data} options={options} />
    </>
  );
};

export default App;
