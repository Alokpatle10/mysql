const express = require("express")
const app = express()
const con = require("./config")

app.use(express.json())

//=====================================CREATE API======================================//

app.post("/",(req,resp)=>{
    const data= req.body;
con.query("insert into videos set ?", data, (err,result,field)=>{
    if(err)throw err;
    resp.send(data)
})
})

//=====================================FETCH API======================================//

app.get("/",(req,resp)=>{
    con.query("select * FROM videos LIMIT 9 OFFSET 6",(err,result)=>{
        if(err)throw err
        resp.send(result);
    })
})

//======================================GET DATA BY id===================================//

app.get("/:id",(req,resp)=>{
    const id = req.params.id
    con.query("select * from videos where id =?",id,(err,result)=>{
        if(err)throw err
        resp.send(result);
    })
})
//=====================================UPDATE API======================================//

app.put("/:id",(req,resp)=>{
    const data=[req.body.thubnail_url, req.body.mp4_url,req.body.mp3_url,req.body.updated_at,req.params.id]
    con.query("UPDATE videos SET thubnail_url = ?, mp4_url =?, mp3_url =?,updated_at =? where id = ? ",data, (err,result) => { 
        if(err)throw err;
        resp.send(result)
    });
    
})
//=====================================DELETE API======================================//

app.delete("/:id",(req,resp)=>{
    con.query("DELETE FROM videos WHERE id = " +req.params.id,(err,result)=>{
        if(err)throw err;
        resp.send(result)
    })
})

app.listen(3000)