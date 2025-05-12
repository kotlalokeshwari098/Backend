import React from 'react'

function ListHeader(prop) {
  return (
    <div className="list-header">
      <h1>{prop.listName}</h1>
    </div>
  );
}

export default ListHeader
