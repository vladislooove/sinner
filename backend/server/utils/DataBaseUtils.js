import mongoose from 'mongoose';

import '../models/sins';

import config from '../etc/config.json';

const Sins = mongoose.model('Sins');

export function setUpConnection(){
    mongoose.connect('mongodb://' + config.db.host + ':' + config.db.port + '/' + config.db.name);
}

export function listSins(){
    return Sins.find();
}

export function createSins(data){
    const sins = new Sins({
        name: data.name,
        category: data.category,
        circle: data.circle,
        createdAt: new Date
    })

    return sins.save(); 
}

export function deleteSins(id){
    return Sins.findById(id).remove();
}

export function listTodaySins(){
    let todayDate = new Date();
    todayDate
        .setHours(3);
    todayDate
        .setMinutes(0);

    let tomorrowDate = new Date();
    tomorrowDate
        .setDate(tomorrowDate.getDate() + 1);
    tomorrowDate
        .setHours(3);
    tomorrowDate
        .setMinutes(0);
    
    return Sins.find(
        { 
            createdAt: {
                $gte: todayDate,
                $lte: tomorrowDate
            }
        }
    );
}

export function getSin(id){
    console.log(Sins.findById(id))
    return Sins.findById(id);
}