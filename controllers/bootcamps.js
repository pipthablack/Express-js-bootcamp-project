const Bootcamp = require('../models/Bootcamp')





// @desc Get all bootcamps
// @route Get /api/v1/bootcamps
//@access Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Show all bootcamps'});
}


// @desc Get single bootcamps
// @route Get /api/v1/bootcamps/:id
//@access Public
exports.getBootcamp = async (req, res, next) => {
    
    res.status(200).json({success: true, msg: `Show bootcamp ${req.params.id}` });
}

// @desc create bootcamps
// @route POST /api/v1/bootcamps
//@access Private
exports.createBootcamp = async (req, res, next) => {
   try{
     const bootcamp = await Bootcamp.create(req.body)
    
     res.status(201).json({
        success: true, 
        data: bootcamp
    });
} catch (err) {
        res.status(400).json({success: false})

    }
};

// @desc Update all bootcamps
// @route PUT /api/v1/bootcamps
//@access Private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `Update bootcamp ${req.params.id}` });
}

// @desc Delete all bootcamps
// @route DELETE /api/v1/bootcamps/:id
//@access private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `Delete bootcamp ${req.param.id}` });
}