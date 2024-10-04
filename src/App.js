import logo from './logo.svg';
import './App.css';
import VacanciesList from "./Component/VacanciesList/VacanciesList";
import CandidateList from "./Component/CandidateList/CandidateList";

function App() {
  return (
    <div className="App">
        <VacanciesList></VacanciesList>
        <CandidateList></CandidateList>
    </div>
  );
}

export default App;
