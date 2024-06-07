const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
 const User = require('../models/userModel');
 const createError = require('../utils/appError');

//Register USER
 exports.signup = async(req,res,next)=>{
    try {
        const user =await User.findOne({email:req.body.email});

        if(user){
            return next(new createError('user already exists!',400));
        }
        const hashedPassword = await bcrypt.hash(req.body.password,12);
        const newUser = await user.create({
            ...req.body,
            password:hashedPassword,
        });

        // assign JWT 

        const token = jwt.sign({_id:newUser._id},'secretkey123',{
            expiresIn: '90d'
        });

        res.status(201).json({
            status : 'success',
            message:'User registered successfuly',
            token,
            user:{
                _id:newUser._id,
                username:newUser.username,
                email:newUser.email,
                location:newUser.location,
                phoneNumber:newUser.phoneNumber,
            },
        });


    } catch (error) {
        next(error)
    }
 };

 exports.login = async(req,res,next)=>{
    try {
        const{email,password} = req.body;

        const user = await User.findone({email});
        if(!user) return next(new createError('User not found!',404));

        const isPasswordValid = await bcrypt.compare(password,user.password);
        if(!isPasswordValid){
            return next(new createError('Invalid email or password',401));
        }

        const token = jwt.sign({_id:user._id},'secretkey123',{
            expiresIn: '90d'
        });

        res.status(200).json({
            status:'sucess',
            token,
            message:'Logged in successfully',
            user:{
                _id:user._id,
                username:user.username,
                email:user.email,
                location:user.location,
                phoneNumber:user.phoneNumber,
            },
            
        })
    } catch (error) {
        next
    }
 };