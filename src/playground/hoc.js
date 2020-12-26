// Higher Order Component -> Components which render another components
// Reuse Code
// Render hijacking
// Props manipulation
// Abstract state


import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => ( 
    <div>
        <h1>Info</h1>
        <p> THis Info is : {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponents) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is Private Info</p>}
            <WrappedComponents {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponents) => {
    return (props) => (
        <div>
        { props.isAuthenticate ? (
            <div>
                <p>This is Private Info</p>
                <WrappedComponents {...props}/>
            </div>) : ( 
                <p>Log In Two See Info</p>
            )}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

const appRoot = document.getElementById('app');
// ReactDOM.render(<AdminInfo isAdmin= {false}info = "DETAILS"/>,appRoot);
ReactDOM.render(<AuthInfo isAuthenticate =  {true}info = "DETAILS"/>,appRoot);