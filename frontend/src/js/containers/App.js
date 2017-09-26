import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

//containers
import Home from './Home';
import Sins from './Sins';
import SinsPage from './SinsPage';
import AddSins from './AddSins';

//components
import Header from '../components/Header';

const App = () => (
    <div className="wrapper">
        <Header/>
        <main>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/sins' component={Sins}/>
                <Route path='/sins/:id' component={SinsPage}/>
                <Route path='/addsins' component={AddSins} />
            </Switch>
        </main>
    </div>
)

export default App