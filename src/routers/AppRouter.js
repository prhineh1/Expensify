import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AddExpensePage from '../components/AddExpensePage';
import AddBudgetPage from '../components/AddBudgetPage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import BudgetDashboardPage from '../components/BudgetDashboardPage';
import EditBudgetPage from '../components/EditBudgetPage';
import LoginPage  from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path='/' component={LoginPage} exact={true} />
                <PrivateRoute path='/dashboard/budgets' component={BudgetDashboardPage} exact={true} />
                <PrivateRoute path='/dashboard/expenses' component={ExpenseDashboardPage} exact={true} />
                <PrivateRoute path='/create/budget' component={AddBudgetPage} exact={true} />
                <PrivateRoute path='/create/expense' component={AddExpensePage} exact={true} />
                <PrivateRoute path='/edit/:id' component={EditExpensePage} exact={true} />
                <PrivateRoute path='/edit/budget/:id' component={EditBudgetPage} exact={true} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
  </Router>  
);

export default AppRouter;