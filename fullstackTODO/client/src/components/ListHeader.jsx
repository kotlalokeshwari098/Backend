import React from 'react'

function ListHeader(prop) {
  return (
    <div className="list-header p-[20px] flex justify-between">
      <h1 className='font-bold text-2xl'>{prop.listName}</h1>
    </div>
  );
}

export default ListHeader
