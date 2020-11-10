const mongoose = require('../database/index');

const orderSchema = new mongoose.Schema([{

    name: {
        type: String,
        require: true
    },

    products: {
        type: String,
        require: true
    },

    observation: {
        type: String,
        require: true
    },

    address: {
        type: String,
        require: true
    },

    phone: {                       //ver, rever, ja visto, ha algo interessante / see, review, already seen, something interesting
        type: String,
        require: true
    },

    createAt: {
        type: Date,
        default: Date.now
    }
}]);

const Order = mongoose.model('Orders', orderSchema);

module.exports = Order;