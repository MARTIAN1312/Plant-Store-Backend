import mongoose from "mongoose";

const {Schema, model}=mongoose;
const productSchema = new Schema({
    id:{type:Number, required:true},
    name:{type:String, required:true},
    price:{type:Number, required:true},
    discounted_price:{type:Number},
    imageBefore:{type:String, required:true},
    imageAfter:{type:String, required:true},
    quantity:{type:Number, required:true},
    category:{
        type:String,
        enum:['PLants', 'Pots'],
        required:true
    }
})

const Product =  model('Product', productSchema);
export default Product;