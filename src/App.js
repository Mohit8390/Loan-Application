import logo from './logo.svg';
import './App.css';
import LoginLI from './Pages/LoginLI';
import LoginCs from './Pages/LoginCs';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Register from './Component/Register';
import ViewAllLoans from '../src/Component/ViewAllLoans'
import ViewLoan from './Component/ViewLoan';
import LoanApplication from './Pages/LoanApplication';
import ApplyLoan from './Component/ApplyLoan';
import Profile from './Component/Profile';
import Navbar from './Component/Navbar';
import UpdateCustomer from './Pages/UpdateCustomer';


function App() {
  return (
    <div className="App">
      <Router>
     <Switch>
       <Route exact path="/" component={LoginCs}></Route>
       <Route  path="/register" component={Register}></Route>
       <Route  path="/loanApplication" component={LoanApplication}></Route>
       <Route  path="/applyLoan" component={ApplyLoan}></Route>
       <Route  path="/LoginIssuer" component={LoginLI}></Route>
       <Route  path="/viewAllLoans" component={ViewAllLoans}></Route>
       <Route  path="/viewLoan" component={ViewLoan}></Route>
       <Route path="/profile" component={Profile}></Route>
       <Route path='/navbar' component={Navbar}></Route>
       <Route path="/updateCustomer" component={UpdateCustomer}></Route>
     </Switch>
     </Router>
    </div>
  );
}

export default App;
