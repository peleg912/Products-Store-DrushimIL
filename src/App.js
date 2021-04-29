import './App.css';
import Products from './components/homePage/products';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import Menu from './components/homePage/menu/menu';
import Header from './components/homePage/header/header';

const App= ({location})=> {

    let routes = (
      <Switch>
      <Route path="/products" exact component={Products} /> 
      <Redirect to="/products"/>
      </Switch>
    );

  return (
    
    <div className="container-fluid">
      <Header/>
     <Menu/>
     {routes}
    </div>
  );
}

export default withRouter(App);
