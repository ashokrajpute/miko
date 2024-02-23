import Email from "../model/email.js"

export const saveSendEmails = async (request, response) => {
    try {
        const email = await new Email(request.body);
        email.save();

        response.status(200).json('email saved successfully');
    } catch (error) {
        response.status(500).json(error.message);
    }
}

export const getEmails=async(request,response)=>{
    try{
         let emails;
         if(request.params.type === 'sent')
         {
            emails=await Email.find({type:'sent'})
            
         }
         else if(request.params.type === 'inbox')
         {
            emails = [];
           
         }
         else if(request.params.type === 'drafts')
         {
            emails=await Email.find({type:'drafts'})
            
         }
         else if(request.params.type === 'starred')
         {
            emails=await Email.find({ starred: true, bin: false })
           
         }
         else if(request.params.type === 'bin')
         {
            emails=await Email.find({ bin: true })
           
         }
         else if(request.params.type === 'allmails')
         {
            emails = await Email.find({});
           
         }
         

         response.status(200).json(emails)

    }catch(error){
        console.log(error.message)
        response.status(500).json(error.message)
    }
}

export const toggleStarredEmail = async (request, response) => {
   try {   
       await Email.updateOne({ _id: request.body.id }, { $set: { starred: request.body.value }})
       response.status(201).json('Value is updated');
   } catch (error) {
       response.status(500).json(error.message);
   }
}

export const deleteEmails = async (request, response) => {
   try {
       await Email.deleteMany({ _id: { $in: request.body }})
       response.status(200).json('emails deleted successfully');
   } catch (error) {
       response.status(500).json(error.message);
   }
}

export const moveEmailsToBin = async (request, response) => {
   try {
       await Email.updateMany({ _id: { $in: request.body }}, { $set: { bin: true, starred: false, type: '' }});
   } catch (error) {
       response.status(500).json(error.message);   
   }
}