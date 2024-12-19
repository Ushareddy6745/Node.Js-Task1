const http=require('http')
  

// let obj={name:"usha",batch:"20R"}
const server=http.createServer((req,res)=>{
   console.log(req.url)

   if(req.url=="/Pushpa2"){
    res.writeHead(200,{"content-type":"application/json"})
    res.write(JSON.stringify({Movie:"Pushpa2",Director:"Sukumar",ReleaseYear:"2024"}).toLowerCase())
    res.end()
}else if(req.url=="/Devara"){
    res.writeHead(200,{"content-type":"application/json"})
    res.write(JSON.stringify({Movie:"Devara",Director:"SSR",ReleaseYear:"2024"}))
    res.end()
}else if(req.url=="/Hanuman"){
    res.writeHead(200,{"content-type":"application/json"})
    res.write(JSON.stringify({Movie:"Hanuman",Director:"PrashanthVarma",ReleaseYear:"2024"}))
    res.end()
}else if(req.url=="/KGF2"){
    res.writeHead(200,{"content-type":"application/json"})
    res.write(JSON.stringify({Movie:"KGF2",Director:"PrashanthNeel",ReleaseYear:"2023"}))
    res.end()
}else{
    res.write("Movie Not Found")
    res.end()
}
})
let port=3000

server.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})

