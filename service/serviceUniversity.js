
const universityRepository = require('../repository/universityRepository')
const universities = require('../model/university-model')

module.exports = {

    async create(req, res) {

        const verifyUniversity =  await universities.find({ 
            $and: 
                [
                  { country: req.body.country}, 
                  { state_province: req.body.state_province }, 
                  { name: req.body.state_province }
                ]
        })

       if( verifyUniversity.length > 0 ){
        throw new Error(res.json({message: 'This university already exists '}));
       }
    
        const newUniversityBody = {
            alpha_two_code: req.body.alpha_two_code,
            name: req.body.name,
            web_pages: req.body.web_pages,
            state_province: req.body.state_province,
            domains: req.body.domains,
            country: req.body.country
        }
    
        const newUniversity = universityRepository.save(newUniversityBody)
    
        return newUniversity
    },
    
    async findAll(req, res ) {
        
        const page = req.query.page -1
        const offset = page ? page * 20 : 1; 
        

      const condition = req.query.country
      ?  {'country': req.query.country}
      : {};

      const param  = {
        select: 'name country state_province ',
        populate: [{
            path: 'universities',
            select: 'country',
            strictPopulate: false
          }],
        lean: true,
      };
        const Universities = await universityRepository.getAll(offset, condition, param )
        
        return Universities
    },
    
    async findOne(req,res){
       const findOneUniversity = universityRepository.getOne(req, res)

       return findOneUniversity
    },
    
    async update(req, res){
        
        const param = req.params
        
        const newData = { 
            name: req.body.name, 
            web_pages: req.body.web_pages, 
            domains: req.body.domains,       
        };
        
        const updatedObject =  await universityRepository.updateOne(newData, param.id, res)

        const retrievedData = { 
            name: updatedObject.name, 
            web_pages: updatedObject.web_pages, 
            domains: updatedObject.domains,       
        };
 
           return retrievedData
    },
    
    async deleteOne(req, res){
        
            const param = req.params.id
    
    
     const deleteOneUniversity = await universityRepository.deleteObject(param, res)

     return deleteOneUniversity
    
    }
}


