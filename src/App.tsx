import './App.css';
import { WeatherRepositoryContext } from './contexts';
import { WeatherRepository } from './repositories/WeatherRepository';
import { WeatherReport } from './components/pages/WeatherReport/WeatherReport';

function App() {
  return (
    <div className="bg-white">
      <WeatherRepositoryContext.Provider value={new WeatherRepository()}>
        <WeatherReport />
      </WeatherRepositoryContext.Provider>
    </div>
  );
}

export default App;
