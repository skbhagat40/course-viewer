import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import About from './about'
import Home from './home';
import NoMatch from './NoMatch';
import coursesList from './coursesList';
import AddCourse from './AddCourse'
function Navbar() {
    return (<Router>
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul>
                    <li>
                        <NavLink exact activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }} to='/'>Home</NavLink>
                    </li>
                    <li><NavLink activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }} to='/courses'>Courses</NavLink> </li>
                    <li><NavLink activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }} to='/about'>About</NavLink> </li>
                </ul>
            </nav>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route path='/courses' component={coursesList}></Route>
                <Route path='/about' component={About}></Route>
                <Route path='/course/:slug' component={AddCourse}></Route>
                <Route path='/course' component={AddCourse}></Route>
                <Route path='*' component={NoMatch}></Route>
            </Switch>
        </div>
    </Router>)
}
export default Navbar