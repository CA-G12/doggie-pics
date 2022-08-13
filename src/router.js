const path = require('path');
const fs = require('fs');

const type = {
    ".js": "application/javascript",
    ".html": "text/html",
    ".css": "text/css",
    ".ico": "vnd.microsoft.icon"
  };

  const router = (req,res)=>{
      const endPoint = req.url;
      if(endPoint==='/'){
          const filePath= path.join(__dirname,"..","public","index.html");
          fs.readFile(filePath,(err,file)=>{
              if(err){
                  res.writeHead(500,{"Content-Type" : "text/html"});
                  res.end("SERVER ERROR");
              }else{
                  res.writeHead(200,{"Content-Type" : "text/html"});
                  res.end(file);
              }
          })

      }
      else if (endPoint.endsWith(".css") || endPoint.endsWith(".js") ||  endPoint.endsWith(".html")){
          const filePath = path.join(__dirname,"..","public",endPoint);
          const extension = path.extname(filePath);
          fs.readFile(filePath,(err,file)=>{
              if(err){
                res.writeHead(500,{"Content-Type" : type[extension]});
                res.end("GO TO HELL");
              }else{
                res.writeHead(200,{"Content-Type" : type[extension]});
                res.end(file);
              }
          })
      }
      else if(endPoint === "/breeds") {
          const filePath = path.join(__dirname,"breeds.json");
          console.log(filePath);
        fs.readFile(filePath, {'encoding' : "utf-8"} ,(err ,file)=>{
           if(err){console.log(err) ; return  ; }
           else{
            res.writeHead(200,{"Content-Type" : "application/json"});
            res.end(file);
           }
        })

      }
      else if (endPoint === "/reviews") {
        const filePath = path.join(__dirname, "reviews.json");
        fs.readFile(filePath, { encoding: "utf8" }, (error, file) => {
          if (error) {
            console.log(error);
            return;
          } else {
            res.writeHead(200, {
              "Content-Type": "application/json",
            });
            res.end(file);
          }
        });
      }

      else if (endPoint === "/create-reviews") {
        let allTheData = "";
        req.on("data", (chunkOfData) => {
          allTheData += chunkOfData;
        });
    
        req.on("end", () => {
          const SearchParams = new URLSearchParams(allTheData);
          const filePath = path.join(__dirname, "reviews.json");
          fs.readFile(filePath, { encoding: "utf8" }, (error, file) => {
            if (error) {
              console.log(error);
              return;
            } else {
              res.writeHead(200, {
                "Content-Type": "application/json",
              });
              console.log(SearchParams);
              let parsed = JSON.parse(file);
              parsed.push( {"name":SearchParams.get("name") , "review" :SearchParams.get("review") });
              fs.writeFile(filePath, JSON.stringify(parsed), (err) => {
                if (err) throw err;
              });
            }
          });
          res.writeHead(302, { location: "/about.html" });
          res.end();

        });
      }
      else {
        res.writeHead(404,{"Content-Type" : "text/html"});
        res.end("Not Found");
      }
  }

  module.exports = router; 