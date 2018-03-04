mongoose = require('mongoose');
bcrypt = require('bcryptjs');

const UserSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: { type: Boolean, required: true, default: false}
});

UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.verifyPassword = function(password) {
    return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);
