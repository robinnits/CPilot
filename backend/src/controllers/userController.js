const codeforcesService =
require("../services/codeforcesService");



const getUserProfile = async(req,res)=>{


    try{

        const handle = req.params.handle;


        const user =
        await codeforcesService.getUser(handle);


        res.json({
            success:true,
            data:user
        });


    }


    catch(error){


        res.status(500).json({

            success:false,
            message:"Cannot fetch user"

        });


    }

};



module.exports = {
    getUserProfile
};