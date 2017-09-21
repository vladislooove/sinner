import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Home from './Home';
import Sins from './Sins';
import SinsPage from './SinsPage';
import AddSins from './AddSins';

const App = () => (
    <div className="wrapper">
        <header className="main-header">
            header and nav
            <Link to='/'>Home</Link>
            <Link to='/sins'>Sins</Link>
            <Link to='/addsins'>Add Sins</Link>
        </header>
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