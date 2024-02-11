import React, { useState } from "react";

const ItemComponent = ({ items, onEdit, onDelete }) => {
  const [editItemId, setEditItemId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: "",
    lastDate: "",
    checked: false,
  });

  const handleEditClick = (item) => {
    setEditItemId(item._id);
    setEditFormData({
      name: item.name,
      lastDate: item.lastDate,
      checked: item.checked,
    });
  };

  const handleEditFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setEditFormData({ ...editFormData, [name]: val });
  };

  const handleCheckedChange = (item, isChecked) => {
    const updatedItem = { ...item, checked: isChecked };
    onEdit(item._id, updatedItem);
  };

  const formatDateForInput = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };

  // New function to simply split the date string and rearrange it for display
  const formatDateDisplay = (dateString) => {
    // First, extract the date part before the "T" character.
    const datePart = dateString.split("T")[0];

    // Now, split the date part into year, month, and day.
    const [year, month, day] = datePart.split("-");

    // Return the date in "MM/DD/YYYY" format.
    return `${month}/${day}/${year}`;
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    onEdit(editItemId, editFormData);
    setEditItemId(null);
  };

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item._id}
          className={`p-4 border border-gray-200 rounded-md ${
            item.checked ? "bg-green-100" : "bg-red-100"
          }`}
        >
          {editItemId === item._id ? (
            // Presumably, the edit form includes a checkbox for "Already Have" similar to AddItemComponent
            <form
              onSubmit={handleEditFormSubmit}
              className="flex flex-col space-y-2"
            >
              <input
                type="text"
                name="name"
                value={editFormData.name}
                onChange={handleEditFormChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              />
              <input
                type="date"
                name="lastDate"
                value={formatDateForInput(editFormData.lastDate)}
                onChange={handleEditFormChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              />
              <div className="flex items-center justify-between">
                <label className="flex items-center text-sm text-gray-900">
                  <input
                    type="checkbox"
                    name="checked"
                    checked={editFormData.checked}
                    onChange={handleEditFormChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  Already Have
                </label>
                <button
                  type="submit"
                  className="text-white bg-blue-500 hover:bg-blue-700 text-sm p-2 rounded-md"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setEditItemId(null)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-900 text-sm p-2 rounded-md transition duration-150 ease-in-out"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div className="flex items-center justify-between">
              <div>
                <span className="block text-sm font-medium text-gray-900">
                  {item.name}
                </span>
                <span className="block text-sm text-gray-500">
                  {formatDateDisplay(item.lastDate)}
                  {/* Use the new display format */}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <label className="flex items-center text-sm text-gray-900">
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => handleCheckedChange(item, !item.checked)}
                    className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  Already Have
                </label>
                <button
                  onClick={() => handleEditClick(item)}
                  className="bg-blue-500 hover:bg-blue-700 text-white text-sm p-2 rounded-md"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(item._id, item)}
                  className="bg-red-500 hover:bg-red-700 text-white text-sm p-2 rounded-md"
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ItemComponent;
