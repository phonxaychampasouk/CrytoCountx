import React from 'react';

const DataRange = ({ handleSubmit, endDate, startDate, handleChange }) => (
    <form onSubmit={handleSubmit}>
    <label>
      Start Date:
      <input type="text" name="startDate" value={startDate} onChange={handleChange} />
    </label>
    <label>
      End Date:
      <input type="text" name="endDate" value={endDate} onChange={handleChange} />
    </label>
    <input type="submit" value="Submit" />
  </form>
)

export default DataRange;