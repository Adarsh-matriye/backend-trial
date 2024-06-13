import { Item } from "../models/index.js";

const createItems = async (req, res) => {
  try {
    const item = await Item.create(req.body);
    if (!item) {
      return res.status(500).json({
        status: 500,
        message: error.message,
      });
    } else {
      return res.status(201).json({
        status: 201,
        message: "Item created successfully",
        data: item,
      }); // Sending JSON response directly
    }
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

const getItems = async (req, res) => {
  try {
    const { limit, page } = req.query;
    // Calculate the offset based on the page number and limit
    const offset = (page - 1) * limit;
    const items = await Item.find().skip(offset).limit(limit);
    if (items && items.length > 0) {
      return res.status(200).json({
        status: 200,
        message: "Record found",
        data: items,
      }); // Sending JSON response directly
    } else {
      return res.status(500).json({
        status: 500,
        message: "Record not found",
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

const updateItem = async (req, res) => {
  try {
    const { itemId } = req.params;
    if (!itemId) {
      return res.status(500).json({
        status: 500,
        message: "Item id is required",
      });
    }
    const { name, quantity } = req.body;
    const item = await Item.findByIdAndUpdate(
      itemId,
      {
        $set: {
          name,
          quantity,
        },
      },
      { new: true }
    );
    if (!item) {
      return res.status(500).json({
        status: 500,
        message: "Unable to update item",
      });
    } else {
      return res.status(200).json({
        status: 200,
        message: "Item updated",
        data: item,
      }); // Sending JSON response directly
    }
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

const deleteItem = async (req, res) => {
  try {
    const { itemId } = req.params;
    if (!itemId) {
      return res.status(500).json({
        status: 500,
        message: "Item id is required",
      });
    }
    const item = await Item.findByIdAndDelete(itemId);
    if (!item) {
      return res.status(500).json({
        status: 500,
        message: "Unable to delete item",
      });
    } else {
      return res.status(200).json({
        status: 200,
        message: "Item deleted",
        data: item,
      }); // Sending JSON response directly
    }
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

export { createItems, getItems, updateItem, deleteItem };
