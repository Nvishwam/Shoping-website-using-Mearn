const express= require("express");

const app=express();

app.use(express.json());












// // const express= require("express") //imported express.

// // const fs = require("fs"); // file system --> to target files in our system
// // const app= express();
// // // get , post, put, patch, delete , use, listen

// // //post- create
// // // get - read
// // // put, patch- update
// // // delete - delete


// // app.use(express.json()) // it is middleware to convert json to object.


// // app.get("/", function(request, response){
// //    const data= JSON.parse(fs.readFileSync("./data.json")); // it is used to convert json to object
// //    response.send(data);
// // })

// // app.post("/addNewData",function(request, response){
// //     const data= JSON.parse(fs.readFileSync("./data.json")); //json - object.

// //     data.push(request.body);
// //     fs.writeFileSync("./data.json", JSON.stringify(data)) // object - json.

// //     response.send("added new data into data.json")

// // })

// // app.patch("/updatingData", function(request,response){
// //     const data= JSON.parse(fs.readFileSync("./data.json"));
// //     for(let i=0; i<data.length;i++){
// //         if(data[i].name==="mahesh"){
// //             data[i].age= request.body.age;
// //             data[i].address= request.body.address;
// //         }
// //     }

// //     fs.writeFileSync("./data.json", JSON.stringify(data));
// //     response.send("data has been updated");

// // });

// // app.delete("/deletingData", function(request, response){
// //     const data= JSON.parse(fs.readFileSync("./data.json"));
// //     const filterdData= data.filter(function(element){
// //         if(element.first_name !== request.body.first_name){
// //             return element;
// //         }
// //     })
// //     fs.writeFileSync("./data.json", JSON.stringify(filterdData));
// //     response.send("data got deleted");

// // })

// // app.listen(9000, function(){
// //     console.log("my server is running on 9000")
// // })

// const express = require("express")
// const app=express()
// app.use((req,res,next)=>{
//     console.log("1")
//     next()
//     console.log("2")
// })
// app.use(function(req,res,next){
//     console.log("3")
//     next()
//     console.log("4")
// })

// app.get("/",(req,res)=>{
//     console.log("home")
//     res.send("welcome")
// })

// app.listen(3500,()=>{
//     console.log("running on 3500")
// })


