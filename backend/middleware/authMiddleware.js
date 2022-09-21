import jwt from 'jsonwebtoken'
import User from '../models/userModal.js'
import expressAsyncHandler from 'express-async-handler'


const protect = expressAsyncHandler (async(req, res, next) => {
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        
        try {
            token = req.headers.authorization.split(' ')[1]
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decodedToken.id).select('-password')

        } catch (error) {
            console.error(error);
            res.status(401)
            throw new Error('Not authorized, token failed')
        }
    }

    if(!token){
        res.status(401)
        throw new Error('Not authorized, no token')
    }

    next()
})


export {protect}