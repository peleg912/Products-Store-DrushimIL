import './App.css';
import AllProducts from './components/homePage/allProducts';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import FilteredProducts from './components/homePage/filteredProducts';
import Menu from './components/homePage/menu/menu';
import Header from './components/homePage/header/header';

const App= ({location})=> {

    let routes = (
      <Switch>
      <Route path="/products/filter"  component={FilteredProducts} /> 
      <Route path="/products" exact component={AllProducts} /> 
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
