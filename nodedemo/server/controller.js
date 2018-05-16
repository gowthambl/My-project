const connection = require('knex')({
	client:'pg',
	connection:{
		host:'127.0.0.1',
		user:'postgres',
		password:'root',
		port:5432,
		database:'demoapp',
	}
})

export default class sample{

    static first(req,res){
        res.send("hello world");
    }
    static getall(req,res){
        connection('user').then(data=>{ 
            console.log(data);
            res.status(200).json({data});
        })
    }
    
    static get(req,res){
        let id = req.params.id;
        connection('user').where('id', '=', id).then(data=>{ 
            console.log(data);
            res.status(200).json({data});
        })	
        
    }
    
    static create(req,res){ 
        let input = {
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            mobile:req.body.mobile
        }
        connection('user').where({email:input.email}).then(data=>{
            if(data.length >= 1){
                res.status(404).json({data:"email already existy"});
            }
            else{
            connection('user').insert(input).then(result=>{
                console.log("inserted");
                res.status(200).json({data:result});
                })
            }
        })
    }
    
    static update(req,res){
        let id = req.params.id;
        let up = req.body;
        console.log(up)
        connection('user').where('id', '=', id).update(up).then(data=>{
            res.status(200).json({data:up});
        })	
        
    }
    
    static delete(req,res){
        let id = req.params.id;
        connection('user').where('id', '=', id).delete().then(data=>{            
            console.log("Deleted Succesfully");
            res.status(200).json({data});
        })	
        
    }
   
    static deleteall(req,res){
        let id = req.params.id;
        connection('user').delete().then(data=>{
            console.log("Deleted Succesfully");
            res.status(200).json({data});
           
        })	
        
    }
   

    
}