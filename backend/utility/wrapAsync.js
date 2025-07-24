 const wrapAsync = (fnx)=>{
return (req, res, next)=>{
    fnx(req, res, next).catch(next);
}
}

module.exports = wrapAsync;