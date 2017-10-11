import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

//containers
import Home from './Home';
import Sins from './Sins';
import SinsPage from './SinsPage';
import AddSins from './AddSins';
import Calendar from './Calendar';
import CalendarSins from './CalendarSins';

//components
import Header from '../components/Header';

class App extends React.Component{
    render(){
        return(
            <div className="wrapper">
                <Header/>
                <main className="main">
                    <div className="container">
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route exact path='/sins' component={Sins}/>
                            <Route path='/sins/:id' component={SinsPage}/>
                            <Route path='/addsins' component={AddSins} />
                            <Route exact path='/calendar' component={Calendar} />
                            <Route path='/calendar/sins' component={CalendarSins} />
                        </Switch>
                        <div className={this.props.isLoading ? 'loader visible' : 'loader'}>
                            <svg className="icon icon--cross"> 
                                <use xlinkHref="images/svg-symbols.svg#cross"></use> 
                            </svg>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
} 

const mapStateToProps = state => {
    return {
         isLoading: state.loading
    }
}

export default connect(
    mapStateToProps,
    null,
    null, 
    {
        pure:false
    }
)(App);