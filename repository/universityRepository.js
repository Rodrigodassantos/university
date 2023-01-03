const universities = require('../model/university-model')

module.exports = {
    // 100% 
    async save(req, res ) {
    
        const teste = new universities(req)
       .save()
       
       return teste
        
    },

    //100 %
    async getAll( options, search, param) {    
      
     const test = await universities.paginate( search, {offset: options, limit: 20, options: param} )
    
       return test
    },
    
    // 100%  
    async getOne(req, res) {
        const getOneData = universities.findOne({ _id: req.params.id })
        return getOneData
        
    },
    
    // 100%
    async updateOne(req, params, res){

        const updated = universities.findOneAndUpdate({ _id: params}, req, { new: true })   
        return updated
        
    },
    
    // 100%
    async deleteObject(req, res){
        try {
            const objectDeleted = req


            const verifiedObject = await universities.findOne({ _id: objectDeleted })
                 
            if(verifiedObject === null) {
                
               throw new Error(res.json({message: `Object already deleted`}))          
            }
               await  universities.findOneAndDelete({ _id: req })
              
            const  deletedOne = res.json({message: `Object ${objectDeleted} deleted`});
           
            return deletedOne
        } catch (error) {
            return error.message
        }
       
    },
    
}


 