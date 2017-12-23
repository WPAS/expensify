import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = (props) => (
  <div>
    <Link to={`/edit/${props.id}`}>
      <h3>{props.description}</h3>
    </Link>
    <p>{ `cost: ${props.amount/100} , created at: ${props.createdAt}` } </p>
  </div>
);

export default ExpenseListItem;
