// import logo from './logo.svg'; removing logo
import './App.css';
import PersonCard from './components/PersonCard' //I don't need to add .js because Person is a functional component

function App() {
  return (
    <div className="App">
      <PersonCard
        firstName={"Jane"} 
        lastName={"Doe"} 
        hairColor={"Black"} 
        initialAge={45}/>
      <PersonCard
        firstName={"John"} 
        lastName={"Smith"} 
        initialAge={88}
        hairColor={"Brown"} />
      <PersonCard
        firstName={"Millard"} 
        lastName={"Fillmore"} 
        initialAge={58}
        hairColor={"Brown"} />
      <PersonCard
        firstName={"Maria"} 
        lastName={"Smith"} 
        initialAge={62}
        hairColor={"Brown"} />
    </div>
  );
}

export default App;
