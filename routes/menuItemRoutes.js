const express = require('express');
const MenuItem = require('./../models/MenuItem');
const Person = require('../models/person');
const router = express.Router();

router.post('/', async (req,res) =>{
    try{
        const data = req.body;

        const newMenu = new MenuItem(data);
        
        const response = await newMenu.save();

        console.log('data saved successfult');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});
    }
});

router.get('/', async (req, res) =>{
    try{
        const data = await MenuItem.find();

        console.log('data fetched successfuly');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});
    }
});

router.get('/:taste',async (req,res) =>{
    try{
        const taste = req.params.taste;

        if(taste == 'sweet' || taste == 'spicy' || taste == 'sour'){
            const data = await MenuItem.find({taste: taste});

            console.log('data fetched successfuly');
            res.status(200).json(data);
        }else{
            res.status(400).json({error:'invalid taste'});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});
    }
});



module.exports = router;