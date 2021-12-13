// import logo from './logo.svg'; removing logo
import './App.css';
import Form from './components/Form' //I don't need to add .js because Person is a functional component

function App() {
  return (
    <div className="App">
      <Form
        firstName={"Jane"} 
        lastName={"Doe"} 
        email={"leeroy.jenkins@email.com"}
        password={"password"} />
    </div>
  );
}

export default App;
