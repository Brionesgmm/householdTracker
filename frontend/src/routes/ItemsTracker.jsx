import React, { useState, useEffect } from "react";
import api from "../services/api";
import TabComponent from "../components/TabComponent";
import AddItemComponent from "../components/AddItemComponent";
import ItemComponent from "../components/ItemComponent";

const ItemsTracker = () => {
  const [items, setItems] = useState([]);
  const [activeTab, setActiveTab] = useState("needToGet");

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await api.getItems();
      setItems(response.data);
    } catch (error) {
      alert("Error fetching items");
    }
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleItemEdit = async (id, itemData) => {
    try {
      const response = await api.updateItem(id, itemData);
      setItems(items.map((item) => (item._id === id ? response.data : item)));
    } catch (error) {
      alert("Error updating item");
    }
  };

  const handleItemDelete = async (id, item) => {
    if (window.confirm(`Are you sure you want to delete ${item.name}?`)) {
      try {
        await api.deleteItem(id);
        setItems(items.filter((item) => item._id !== id));
      } catch (error) {
        alert("Error deleting item");
      }
    }
  };

  const handleItemAdd = async (itemData) => {
    try {
      const response = await api.createItem(itemData);
      setItems([...items, response.data]);
    } catch (error) {
      alert("Error adding item");
    }
  };

  const handleReset = async () => {
    if (window.confirm("Are you sure you want to reset the items?")) {
      try {
        await api.resetItems();
        setItems(items.map((item) => ({ ...item, checked: false })));
      } catch (error) {
        alert("Error resetting items");
      }
    }
  };

  const needToGetItems = items.filter((item) => !item.checked);
  const alreadyHaveItems = items.filter((item) => item.checked);

  return (
    <div className="max-w-md mx-auto p-4">
      <TabComponent
        activeTab={activeTab}
        onTabClick={handleTabClick}
        onReset={handleReset}
      />
      {activeTab === "needToGet" ? (
        <ItemComponent
          items={needToGetItems}
          onEdit={handleItemEdit}
          onDelete={handleItemDelete}
        />
      ) : (
        <ItemComponent
          items={alreadyHaveItems}
          onEdit={handleItemEdit}
          onDelete={handleItemDelete}
        />
      )}
      <AddItemComponent onAdd={handleItemAdd} />
    </div>
  );
};

export default ItemsTracker;
