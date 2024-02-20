import Product from "../models/products.model.js";

const productDAO = {

};
productDAO.getAll = async () => {
    const products = await Product.find();
    return products;
};
productDAO.getOne = async (barcode) => {
    const products = await Product.findOne({barcode:barcode});
    return products;
};
productDAO.insertOne=async(product)=>{
    return await Product.create(product);
};
productDAO.updateOne=async(barcode,product)=>{
    console.log(Product.findOneAndUpdate({barcode:barcode},product));
    return true;
};

productDAO.deleteOne = async(barcode) => {
    return await Product.findOneAndDelete({barcode:barcode});
};

export default productDAO;