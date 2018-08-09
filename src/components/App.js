import { Fragment } from 'react'
import { SkiDayCount } from './SkiDayCount'
import { AllSkiDays } from './AllSkiDays'
import { Whoops404 } from './Whoops404'
import { NavigationMenu } from './NavigationMenu'
import { Route, Switch } from 'react-router-dom'
import { AddDayForm } from './AddDayForm';

export const App = () => (
    <Fragment>
        <NavigationMenu />
        <hr />
        <Switch>
            <Route exact path="/" render={props => (
                    <SkiDayCount total= {25} />
            )} />
            <Route path="/list-days" component={AllSkiDays} />
            <Route path="/add-day" component={AddDayForm} />
            <Route component={Whoops404} />
        </Switch>
    </Fragment>
)