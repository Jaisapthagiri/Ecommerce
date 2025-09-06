import { v2 as cloudinary } from 'cloudinary'
import Product from '../models/Product.js';

export const addProduct = async (req, res) => {
    try {
        let productData = JSON.parse(req.body.productData);

        const images = req.files

        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' })
                return result.secure_url
            })
        )

        await Product.create({ ...productData, image: imagesUrl })
        res.json({ success: true, message: "Product Added" })

    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message })
    }
}

export const productList = async (req, res) => {
    try {
        const products = await Product.find({})
        res.json({ success: true, products })
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message })
    }
}

export const productById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.json({ success: false, message: "Product not found" });
    }
    res.json({ success: true, product });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const changeStock = async (req, res) => {
    try {
        const { id, inStock } = req.body
        await Product.findByIdAndUpdate(id, { inStock })
        res.json({ success: true, message: "Stock Updated" })
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message })
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await Product.findByIdAndDelete(id)
        res.json({ success: true, message: "Product Deleted Successfully" })
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message })
    }
}

export const editProduct = async (req, res) => {
  try {
    const { id } = req.params;  

    if (!id) {
      return res.json({ success: false, message: "Product ID is required" });
    }

    const productData = JSON.parse(req.body.productData);

    let imagesUrl = [];

    if (req.files && req.files.length > 0) {
      imagesUrl = await Promise.all(
        req.files.map(async (item) => {
          const result = await cloudinary.uploader.upload(item.path, { resource_type: "image" });
          return result.secure_url;
        })
      );
    } else {
      const existingProduct = await Product.findById(id);
      if (!existingProduct) {
        return res.json({ success: false, message: "Product not found" });
      }
      imagesUrl = existingProduct.image;
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { ...productData, image: imagesUrl },
      { new: true }
    );

    if (!updatedProduct) {
      return res.json({ success: false, message: "Product not found" });
    }

    res.json({ success: true, message: "Product updated successfully", product: updatedProduct });

  } catch (error) {
    console.error(error.message);
    res.json({ success: false, message: error.message });
  }
};

