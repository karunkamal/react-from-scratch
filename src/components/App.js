import { Component, Fragment } from 'react'
import { SkiDayCount } from './SkiDayCount'
import { SkiDayList } from './SkiDayList'
import { Whoops404 } from './Whoops404'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allSkiDays: [
                {
                    resort: "Mt Everest",
                    date: new Date("3/2/2018"),
                    powder: true,
                    backcountry: false
                },
                {
                    resort: "hotel kirkwood",
                    date: new Date("4/12/2018"),
                    powder: false,
                    backcountry: false
                },
                {
                    resort: "hotel transylvania",
                    date: new Date("6/1/2018"),
                    powder: true,
                    backcountry: true
                }
            ]
        }
    }

    countDays (filter) {
        const { allSkiDays } = this.state
        return allSkiDays.filter(
            (day) => (filter) ? day[filter] : day ).length
    }

// Note: Right now, the code renders Routes which are matching at the moment.
// i.e. "/" and Route without path
// when you link to -> days, it displays all three components as  routes ("/" and "/days" and no path) are matching
// basically here all routes are rendering i.e. if path doesnt match Route returns null 

//Added <Switch> to render only first match found with browser url
//Notice it always shows SkiDayCount with path="/" even though the location url is changing
//thats because Switch renders first child which matches location and in this case "/" alsways matches


//Using exact makes the rendering of correct component here 
// CAUTION: As i have "/days" and i add another route "/days/jan"
// this will again have the error of first match component been rendered always. 
// So 'exact' might resolve that issue

    render() {
        return <Router>
                <div>
                    <Switch>
                        <Route exact path="/" render={props => (
                            <Fragment>
                                <SkiDayCount total= {25} />
                            </Fragment>
                        )} />
                        <Route path="/days" render={props => (
                            <Fragment>
                                <SkiDayList days={this.state.allSkiDays} />
                            </Fragment>
                        )} />
                        <Route component={Whoops404} />
                    </Switch>
                    <div>
                    <ul>
                        <li>
                            <Link to="/">SkiDayCount</Link>
                        </li>
                        <li>
                            <Link to="/days">SkiDayList</Link>
                        </li>
                        <li>
                            <Link to="/boo">404</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </Router>
    }
}