import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';

import users from './data/users.js';
import products from './data/products.js';

import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';

const importData =async () => {
    try {
        //clearing at first
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        //Now inserting
        const createdUsers = await User.insertMany(users)
        const adminUsers = createdUsers[0]._id //first item is admin
        const sampleProducts = products.map(product => {
            return {...product,user: adminUser}
        })
        await Product.insertMany(sampleProducts)

        console.log('Data Imported!!'.green.inverse)
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1) //1 represents failure
    }
}

const destroyData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log('Data destroyed!!'.red.inverse)
        process.exit()
    }catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

if(process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}


importData()