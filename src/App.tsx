import { useSelector } from "react-redux";
import "./App.css";
import { SeriesSelection } from "./components/SeriesSelection";
import { SeriesState } from "./slices/series-slice";
import { Series } from "./components/Series";

function App() {
  const currentSeries = useSelector((state: { series: SeriesState }) => state.series.selected);
  return (<>
    {!currentSeries && <SeriesSelection />}
    {currentSeries && <Series />}
  </>)
}

export default App;
