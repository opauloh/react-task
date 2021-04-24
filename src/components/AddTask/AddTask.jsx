import React from 'react';

export const AddTask = ({ onClick }) => {
  return (
    <div>
      <div>
        <button className="add-row" onClick={onClick}>
          +
        </button>
      </div>
      <hr />
    </div>
  );
};
