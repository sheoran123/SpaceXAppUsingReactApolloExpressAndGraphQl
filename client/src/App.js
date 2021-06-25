import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import logo from './logo.jpg'
import Launches from './components/Launches';
import Launch from './components/Launch';
import {BrowserRouter as Router ,Route} from 'react-router-dom'


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});



function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img src={logo} alt="SpaceX" style={{width:150,display:'block' ,margin:'auto'}} />
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:id" component={Launch} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
