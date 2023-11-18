const asyncHandler = (requestHandler) => {
    (req,res,next) => {
        Promise.resolve(requestHandler(req, res, next))
        .catch( (err)=> next(err) );
    }
};

export {asyncHandler}



/*
************** Another way for asyncHandler ******************
const asyncHandler = (fn) => async (req,res,next) => {

    try {
        await fn(req,res,next);
    } catch (error) {
        req.status(err.code || 500).json({
            success : false,
            message : error.message
        });
    }
};
*/