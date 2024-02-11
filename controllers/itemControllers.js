import Item from "../models/Item.js";

export const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createItem = async (req, res) => {
  // Include 'checked' in the destructured object from req.body
  const { name, lastDate, checked } = req.body;

  // Pass 'checked' to the new Item
  const newItem = new Item({ name, lastDate, checked });

  try {
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateItem = async (req, res) => {
  const { id } = req.params;
  const { name, lastDate, checked } = req.body;

  try {
    const updatedItem = await Item.findByIdAndUpdate(
      id,
      { name, lastDate, checked },
      { new: true }
    );
    res.json(updatedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteItem = async (req, res) => {
  const { id } = req.params;

  try {
    await Item.findByIdAndDelete(id);
    res.json({ message: "Item deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const resetItems = async (req, res) => {
  try {
    await Item.updateMany({}, { checked: false });
    res.json({ message: "All items have been reset" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
