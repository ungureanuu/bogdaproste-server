const mongoose = require('mongoose');
mongoose.Promise = global.Promise
let isConnected

module.exports = async = () => {
    if (isConnected) return Promise.resolve()

    return mongoose.connect('mongodb+srv://ungureanu:Botosani1989@cluster0-t0frr.mongodb.net/test?retryWrites=true')
        .then(db => {
            isConnected = db.connections[0].readyState
        })

}
