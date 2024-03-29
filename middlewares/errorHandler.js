// not found 

const notFound  = (req, res, next) => {
// const error = new Error({
//     msg : 'Not Found this Route',
//     url : req.originalUrl
// }); 
const error = new Error(`NOT FOUND : ${req.originalUrl}`); 

res.status(404); 
next(error);
}

// Error Handler

const errorHandler = (err, req, res, next) => {
    const statuscode = res.statusCode == 200 ? 500: res.statusCode;
    res.status(statuscode).json({
        msg : err?.message, 
        stack  : err?.stack
    })
}

module.exports = {errorHandler, notFound};