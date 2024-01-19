import express from 'express';

import router from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());




/**
 * Assign Auth Middleware to all route except /login route
 */
// app.post('/login', (req, res, next) => {
//     console.log('trying to login');
// });

app.get('/testapi', (req, res, next)=>{
    res.status(200).json({
        data:{
            msg: "API Working"
        }
    });
});

/**
 * Router
 */
app.use('', router);

/**
 * Handle unmatched endpoint
 */
app.use('*', (req, res, next) => {
    return res.status(404).json({});
});

/**
 * Default Error Handler
 */
app.use((err, req, res, next) => {
    console.log(`getting error ${err}`);
    return res.status(err.status || 500).json({
        err,
        err: err.message || 'Invalid Request'
    });
});

app.listen(PORT, () => {
    console.log(`Server is Running on ${PORT}`);
});
