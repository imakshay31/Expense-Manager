import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        Error 404 !
        <Link to="/">
            GO Home
        </Link>
    </div>
);

export default NotFoundPage;