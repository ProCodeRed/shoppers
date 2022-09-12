import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'vipinyadav1305@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Vipin',
        email: 'vipinyadav1305@hotmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Sachin',
        email: 'vipinx@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    }
]

export default users