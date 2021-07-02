import React from 'react';

const DataEvent = () => {
  return (
    <div>
      <form>
        <label htmlFor="name">Название</label>
        <input id="name" value="Name" />
        <label htmlFor="date">Дата и время</label>
        <input id="date" value="Date and tyme" />
        <button type="submit">Create</button>
      </form >
    </div>
  )
}

export default DataEvent;