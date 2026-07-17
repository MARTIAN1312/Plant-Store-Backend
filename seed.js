import Product from './models/products_models.js';
import mongoose from 'mongoose';
async function seedProducts(){
    try{
         mongoose.connect('mongodb://localhost:27017/e-commerce');

         const products= [
    {
        id:1,
        name:"Alokazia Amazonian",
        price:23.99,
        imageBefore:'https://static.wixstatic.com/media/c837a6_bd144ee3f21e4c4f8ef5f0587a144371~mv2.png/v1/fill/w_330,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_bd144ee3f21e4c4f8ef5f0587a144371~mv2.png',
        imageAfter:'https://static.wixstatic.com/media/c837a6_c98dc1003fe7404887b76f38882665c2~mv2.png/v1/fill/w_330,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_c98dc1003fe7404887b76f38882665c2~mv2.png',
        quantity:40,
        category:'PLants'
    },
    {
        id:2,
        name:'Anthurium Clarinervium',
        price:21.99,
        discounted_price:16.99,
        imageBefore:'https://static.wixstatic.com/media/c837a6_b210ae86c3b446f3a2fc09ae50ebe971~mv2.png/v1/fill/w_330,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_b210ae86c3b446f3a2fc09ae50ebe971~mv2.png',
        imageAfter:'https://static.wixstatic.com/media/c837a6_3686a84f54af4a98b4e2be3e55bb559f~mv2.png/v1/fill/w_330,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_3686a84f54af4a98b4e2be3e55bb559f~mv2.png',
        quantity:35,
        category:'PLants'
    },
    {
        id:3,
        name:'Cactus',
        price:19.99,
        imageBefore:'https://static.wixstatic.com/media/c837a6_843114c3413143ba96b82c284c890e88~mv2.png/v1/fill/w_330,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_843114c3413143ba96b82c284c890e88~mv2.png',
        imageAfter:'https://static.wixstatic.com/media/c837a6_d35214efbdfb4f279e66ff6091351ae6~mv2.png/v1/fill/w_330,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_d35214efbdfb4f279e66ff6091351ae6~mv2.png',
        quantity:50,
        category:'PLants'
    },
    {
        id:4,
        name:'Cereus',
        price:20.00,
        discounted_price:15.00,
        imageBefore:'https://static.wixstatic.com/media/c837a6_949ced22a4644932a3824f770682d6e4~mv2.png/v1/fill/w_330,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_949ced22a4644932a3824f770682d6e4~mv2.png',
        imageAfter:'https://static.wixstatic.com/media/c837a6_2c1cfd4a6176464c9232c62d90f04cbf~mv2.png/v1/fill/w_330,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_2c1cfd4a6176464c9232c62d90f04cbf~mv2.png',
        quantity:30,
        category:'PLants'
    },
    {
        id:5,
        name:'Crassula',
        price:19.99,
        imageBefore:'https://static.wixstatic.com/media/c837a6_884175ddc4ff47109b3656d845399823~mv2.png/v1/fill/w_330,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_884175ddc4ff47109b3656d845399823~mv2.png',
        imageAfter:'https://static.wixstatic.com/media/c837a6_e332ae7dd95f4fb3a0c0ff4d55638e17~mv2.png/v1/fill/w_330,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_e332ae7dd95f4fb3a0c0ff4d55638e17~mv2.png',
        quantity:45,
        category:'PLants'
    },
    {
        id:6,
        name:'Ficus lyrata',
        price:35.99,
        imageBefore:'https://static.wixstatic.com/media/c837a6_268b2bb21674492e8f23b2c52ae6125b~mv2.png/v1/fill/w_330,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_268b2bb21674492e8f23b2c52ae6125b~mv2.png',
        imageAfter:'https://static.wixstatic.com/media/c837a6_445a44602c654a23837cb6c70828bda3~mv2.png/v1/fill/w_330,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_445a44602c654a23837cb6c70828bda3~mv2.png',
        quantity:20,
        category:'PLants'
    },
    {
        id:7,
        name:'Metal Pot',
        price:25.99,
        discounted_price:19.49,
        imageBefore:'https://static.wixstatic.com/media/c837a6_22c976f0806c4ba2b2e0b27cc356b271~mv2.png/v1/fill/w_330,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_22c976f0806c4ba2b2e0b27cc356b271~mv2.png',
        imageAfter:'https://static.wixstatic.com/media/c837a6_b3650060e6e74f5cbb28206c0042d7d8~mv2.png/v1/fill/w_330,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_b3650060e6e74f5cbb28206c0042d7d8~mv2.png',
        quantity:25,
        category:'Pots'
    },
    {
        id:8,
        name:'Monstera',
        price:26.99,
        imageBefore:'https://static.wixstatic.com/media/c837a6_4f12f92bd7cf47969455d604fec3e42a~mv2.png/v1/fill/w_330,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_4f12f92bd7cf47969455d604fec3e42a~mv2.png',
        imageAfter:'https://static.wixstatic.com/media/c837a6_dc77123770a744eca77dd06d54111295~mv2.png/v1/fill/w_330,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_dc77123770a744eca77dd06d54111295~mv2.png',
        quantity:30,
        category:'PLants'
    },
    {
        id:9,
        name:'Rhapis Palm',
        price:19.99,
        discounted_price:14.99,
        imageBefore:'https://static.wixstatic.com/media/c837a6_484c06bf6b4746b59469dff9187ea5ee~mv2.png/v1/fill/w_330,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_484c06bf6b4746b59469dff9187ea5ee~mv2.png',
        imageAfter:'https://static.wixstatic.com/media/c837a6_3e1ef9bad86946898d01e56762c10d7c~mv2.png/v1/fill/w_330,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_3e1ef9bad86946898d01e56762c10d7c~mv2.png',
        quantity:25,
        category:'PLants'
    },
    {
        id:10,
        name:'Schefflera Arboricola',
        price:32.99,
        discounted_price:24.74,
        imageBefore:'https://static.wixstatic.com/media/c837a6_484c06bf6b4746b59469dff9187ea5ee~mv2.png/v1/fill/w_330,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_484c06bf6b4746b59469dff9187ea5ee~mv2.png',
        imageAfter:'https://static.wixstatic.com/media/c837a6_3e1ef9bad86946898d01e56762c10d7c~mv2.png/v1/fill/w_330,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_3e1ef9bad86946898d01e56762c10d7c~mv2.png',
        quantity:20,
        category:'PLants'
    },
    {
        id:11,
        name:'Zamioculcas',
        price:19.99,
        imageBefore:'https://static.wixstatic.com/media/c837a6_27d68e7d7e0e43afb44db8900000fe61~mv2.png/v1/fill/w_330,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_27d68e7d7e0e43afb44db8900000fe61~mv2.png',
        imageAfter:'https://static.wixstatic.com/media/c837a6_a9d8535a935e4541b4150b871a5a3549~mv2.png/v1/fill/w_330,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_a9d8535a935e4541b4150b871a5a3549~mv2.png',
        quantity:35,
        category:'PLants'
    },
    {
        id:12,
        name:'Beige Pot',
        price:15.99,
        discounted_price:11.99,
        imageBefore:'https://static.wixstatic.com/media/c837a6_95d228c2e03b400eac41a66d5535d33b~mv2.png/v1/fill/w_236,h_314,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_95d228c2e03b400eac41a66d5535d33b~mv2.png',
        imageAfter:'https://static.wixstatic.com/media/c837a6_95cce8a97c0d42c18155e3bf293a5952~mv2.png/v1/fill/w_236,h_314,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_95cce8a97c0d42c18155e3bf293a5952~mv2.png',
        quantity:30,
        category:'Pots'
    },
    {
        id:13,
        name:'Pot Stand',
        price:15.99,
        imageBefore:'https://static.wixstatic.com/media/c837a6_d0c705966dc943f6ab69d00402f586df~mv2.png/v1/fill/w_379,h_505,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_d0c705966dc943f6ab69d00402f586df~mv2.png',
        imageAfter:'https://static.wixstatic.com/media/c837a6_89565e4bce654835945649c9c9420921~mv2.png/v1/fill/w_379,h_505,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_89565e4bce654835945649c9c9420921~mv2.png',
        quantity:30,
        category:'Pots'
    },
    {
        id:14,
        name:'Wooden Basket',
        price:28.99,
        imageBefore:'https://static.wixstatic.com/media/c837a6_417bab217d82455f9ceb6620b5c888d9~mv2.png/v1/fill/w_379,h_505,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_417bab217d82455f9ceb6620b5c888d9~mv2.png',
        imageAfter:'https://static.wixstatic.com/media/c837a6_e340d7da168d46ebad6a3d6a27fd9d57~mv2.png/v1/fill/w_379,h_505,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_e340d7da168d46ebad6a3d6a27fd9d57~mv2.png',
        quantity:20,
        category:'Pots'
    },
    {
        id:15,
        name:'Concrete Pot',
        price:15.99,
        discounted_price:11.99,
        imageBefore:'https://static.wixstatic.com/media/c837a6_ecfe167cc1ab40bdb18fc6298f8ea11b~mv2.png/v1/fill/w_379,h_505,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_ecfe167cc1ab40bdb18fc6298f8ea11b~mv2.png',
        imageAfter:'https://static.wixstatic.com/media/c837a6_e5957d5f95da4fd189f04d04f74552da~mv2.png/v1/fill/w_379,h_505,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_e5957d5f95da4fd189f04d04f74552da~mv2.png',
        quantity:30,
        category:'Pots'
    },
    {
        id:16,
        name:'Rattan Basket',
        price:32.99,
        imageBefore:'https://static.wixstatic.com/media/c837a6_6a52aa4a26734c448a30322b0e50ed9b~mv2.png/v1/fill/w_379,h_505,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_6a52aa4a26734c448a30322b0e50ed9b~mv2.png',
        imageAfter:'https://static.wixstatic.com/media/c837a6_cf757aece5cc45f4ab8eb78ce62798c9~mv2.png/v1/fill/w_379,h_505,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_cf757aece5cc45f4ab8eb78ce62798c9~mv2.png',
        quantity:15,
        category:'Pots'
    },
    {
        id:17,
        name:'Rusty Flowerpot',
        price:20.99,
        imageBefore:'https://static.wixstatic.com/media/c837a6_a0d7e9a5d39d48b89544bc24a575a478~mv2.png/v1/fill/w_379,h_505,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_a0d7e9a5d39d48b89544bc24a575a478~mv2.png',
        imageAfter:'https://static.wixstatic.com/media/c837a6_3abb95037c1e4ea4b3b9cac018b94a5d~mv2.png/v1/fill/w_379,h_505,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_3abb95037c1e4ea4b3b9cac018b94a5d~mv2.png',
        quantity:20,
        category:'Pots'
    },
    {
        id:18,
        name:'Graphite Pot',
        price:15.99,
        discounted_price:11.99,
        imageBefore:'https://static.wixstatic.com/media/c837a6_2a47017d254f4b6c82e6cfdad42a8cb2~mv2.png/v1/fill/w_379,h_505,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_2a47017d254f4b6c82e6cfdad42a8cb2~mv2.png',
        imageAfter:'https://static.wixstatic.com/media/c837a6_5f80bb17e859489c843fb1028f8594ff~mv2.png/v1/fill/w_379,h_505,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_5f80bb17e859489c843fb1028f8594ff~mv2.png',
        quantity:30,
        category:'Pots'
    },
    {
        id:19,
        name:'Exotic Plants Subscription',
        price:100.00,
        imageBefore:'https://static.wixstatic.com/media/c837a6_a6bcceeec88241d5a1295fdb29c28a38~mv2.png/v1/fill/w_379,h_505,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_a6bcceeec88241d5a1295fdb29c28a38~mv2.png',
        imageAfter:'https://static.wixstatic.com/media/c837a6_250a4eb501bf47a1a9d609b218133834~mv2.png/v1/fill/w_379,h_505,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_250a4eb501bf47a1a9d609b218133834~mv2.png',
        quantity:15,
        category:'PLants'
    },
    {
        id:20,
        name:'Cactus Lover Subscription',
        price:100.00,
        imageBefore:'https://static.wixstatic.com/media/c837a6_e98ca5b6aa124708a8b3f88490523928~mv2.png/v1/fill/w_379,h_505,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_e98ca5b6aa124708a8b3f88490523928~mv2.png',
        imageAfter:'https://static.wixstatic.com/media/c837a6_86845e1eb20a49009ce96ea40e7c7104~mv2.png/v1/fill/w_379,h_505,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_86845e1eb20a49009ce96ea40e7c7104~mv2.png',
        quantity:15,
        category:'PLants'
    },

]

    const productsCollection = await Product.insertMany(products);
    console.log("Products seeded successfully:", productsCollection);
    }catch(error){
        console.log(error.message);
    }
}

seedProducts();