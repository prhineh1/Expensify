//Higher order component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info.</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const requireQuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : 'You must be an Admin to see this info.'}
        </div>
    );
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireQuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info="some info" />, document.getElementById('app'));