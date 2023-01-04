const universityService = require('../service/serviceUniversity')


module.exports = {

    async populateDataBase(req,res){
        try {
            const objectCreated = await universityService.populate(req,res)
            return  res.json(objectCreated)
        } catch (error) {
            throw new Error( error.message)
        }
       
    },

    async createUniversity(req, res) {
    try {
        const objectCreated = await universityService.create(req,res)
        return  res.json(objectCreated)
    } catch (error) {
    
        throw new Error( error.message)
    }
       
    },
    
    async  getUniversity(req, res)  {
    try {

        const getAllUniversities = await universityService.findAll(req, res)

        return res.json(getAllUniversities)
        
    } catch (error) {
        throw new Error( error.message)
    }
           
    },
    
    async updateUniversity (req, res)  {
       try {
        const updatedUniversities = await  universityService.update(req, res)
    
        return res.json(updatedUniversities)
       } catch (error) {
          throw new Error( error.message)
       }
      },

    async getSingleUniversity (req, res)  {
        try {
          const getOneUniversity = await universityService.findOne(req, res)
          return res.json(getOneUniversity)
        } catch (error) {
            throw new Error( error.message)
        }
    },
    
    async deleteUniversity(req, res) {
        try {
           const deletedUniversity = universityService.deleteOne(req, res)

           return deletedUniversity
        } catch (error) {
            throw new Error( error.message)
        }
      }
}

