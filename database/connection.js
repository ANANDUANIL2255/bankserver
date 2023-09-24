const mongoose=require('mongoose')

mongoose.connect(process.env.BASE_URL,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("___________mongodb atlas connected___________");
}).catch(()=>{
    console.log("___________mongodb atlas not connected__________");
})