import React, { PropTypes } from 'react';

const Table = ({ heads, data }) => {
  return (
    <table className="u-full-width stripped" style={{color:'white'}}>
      <thead>
        <tr>
          {heads.map((head, i)=>(<th id={i}>{head}</th>))}
        </tr>
      </thead>
      <tbody>
        {data.map((entry, i)=>(<tr id={i}>{entry.map((column, j)=><td id={j}>{column}</td>)}</tr>))}
      </tbody>
    </table>
  )
};

Table.propTypes = {
  heads: PropTypes.array.isRequired,
  data: PropTypes.arrayOf(PropTypes.array).isRequired
};

export default Table;
