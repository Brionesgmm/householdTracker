import React, { useState } from "react";

const AddItemComponent = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [lastDate, setLastDate] = useState("");
  const [checked, setChecked] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLastDateChange = (e) => {
    setLastDate(e.target.value);
  };

  const handleCheckedChange = (e) => {
    setChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemData = {
      name,
      lastDate,
      checked,
    };
    onAdd(itemData);
    setName("");
    setLastDate("");
    setChecked(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <label
          htmlFor="itemName"
          className="block text-sm font-medium text-gray-700"
        >
          Item Name:
        </label>
        <input
          type="text"
          id="itemName"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="itemLastDate"
          className="block text-sm font-medium text-gray-700"
        >
          Last Date:
        </label>
        <input
          type="date"
          id="itemLastDate"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          value={lastDate}
          onChange={handleLastDateChange}
          required
        />
      </div>
      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          id="itemChecked"
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          checked={checked}
          onChange={handleCheckedChange}
        />
        <label
          htmlFor="itemChecked"
          className="ml-2 block text-sm text-gray-900"
        >
          Already Have
        </label>
      </div>
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded-md"
      >
        Save Item
      </button>
    </form>
  );
};

export default AddItemComponent;
