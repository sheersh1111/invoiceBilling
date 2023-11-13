import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import Logout from "./Logout";
import { gapi } from "gapi-script";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Invoices from './Invoices'

const clientId="333288399917-3a10ppd508cr3oq1n2s4j88m1ijbl0np.apps.googleusercontent.com";

function App() {
  useEffect(() => {
    function initGoogleAuth() {
      gapi.load("auth2", () => {
        gapi.auth2.init({
          client_id: clientId,
        }).then((auth2) => {
          // Handle the authentication instance, e.g., check if the user is already signed in
          if (auth2.isSignedIn.get()) {
            console.log("User is already signed in");
          } else {
            console.log("User is not signed in");
          }

          // You can access the auth instance using 'auth2'
          // For example, to sign in:
          // auth2.signIn().then((googleUser) => {
          //   console.log('User signed in:', googleUser);
          // });
        });
      });
    }

    initGoogleAuth();
  }, []); 
  const [email, setEmail] = useState(null);
  console.log(email)
  return (
    <div className="App bg-light">
      <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login setEmail={setEmail} />
          </Route>
          <Route path="/logout">
            <Logout email={email}setEmail={setEmail} />
          </Route>
          <Route path="/invoices">
            <Invoices email={email}/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
