import bcrypt from 'bcrypt';

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Ajay',
        email: 'ajay@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Vijay',
        email: 'vijay@example.com',
        password: bcrypt.hashSync('123456', 10),
    }
];

export default users;
