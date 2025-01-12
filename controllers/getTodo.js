const Todo = require('../models/Todo');

exports.getTodo = async (req, res) => {
    try {
        //fetch all todos
        const response = await Todo.find({});
        res.status(200).json({
            success: true,
            data: response,
            message: "All todos fetched successfully"});
    
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: error.message
        }); 
      
    }
};


