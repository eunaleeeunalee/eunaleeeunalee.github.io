import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Home from "./Routes/Home";

// import About from "./Routes/About";

const Mobile = 768;

const Wrapper =styled.div`
  display:flex; 
  @media only screen and (max-width: ${Mobile}px){

  }
`;


function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
    <Router>
      <Helmet>
        <title>Euna Lee</title>
      </Helmet>
      <Switch>

        <Wrapper>
          {/* <Right/> */}
          <Route path="/">
            <Home />
          </Route>
        </Wrapper>
      </Switch>

      

      
    </Router>
    </QueryClientProvider>
  );
}

export default App;