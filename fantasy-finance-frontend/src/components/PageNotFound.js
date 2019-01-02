import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
<div>
  <center><h1 style={{color:"black"}}>404 ERROR page not found</h1></center>
  <center><Link to="/">Return to Home Page</Link></center>
</div>
);
export default PageNotFound
