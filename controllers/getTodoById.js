const Todo = require('../models/Todo');


exports.getTodoById = async (req, res) => { 
    try{
        const id = req.params.id;
        const todo = await Todo.findById({_id: id});



        if(!todo){
            return res.status(404).json({
                success: false,
                data: null,
                message: "Todo not found"
            });
        }
        res.status(200).json({
            success: true,
            data: todo,
            message: "Todo fetched successfully"
        });
        // const {id} = req.params.id;
        // res.status(200).json({
        //     success:true,
        //     data: {id},
        //     message: `Todo with id ${id} fetched successfully`,
        // });

    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: error.message
        }); 
      
    }

};