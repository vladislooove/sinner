import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const SinsSchema = new Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    circle: { type: Number, required: true },
    additional: { type: String, required: false },
    createdAt: { type: Date }
});

const Sins = mongoose.model('Sins', SinsSchema);