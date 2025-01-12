const Todo = require('../models/Todo');

exports.deleteTodo = async (req, res) => {
    try {
       const {id} = req.params;
       await Todo.findByIdAndDelete(id);
       res.status(200).json({
           success: true,
           data: null,
           message: "Todo deleted successfully"});

    
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: error.message
        }); 
      
    }
};

