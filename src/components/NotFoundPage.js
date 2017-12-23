import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <p>This is not the page you are looking for :)</p>
    <Link to="/">Go to the main page</Link>
  </div>
);

export default NotFoundPage;
