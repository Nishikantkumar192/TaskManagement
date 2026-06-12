const joi=require("joi");

const joiSchema=joi.object({
    title:joi.string().min(5).required(),
    description:joi.string().min(10).required(),
})
module.exports=joiSchema;