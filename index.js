const express= require('express');
const path= require('path');
const app= express();

app.use(libraries);
app.use(author);

app.get('/books', function(req, res){
    res.send({ route: "/books"});
});


app.get('/libraries', function(req, res){
       return res.send({ route: "/libraries", permission: true});
});
app.get('/authors', function(req, res){
    return res.send({ route: "/authors", permission: true});
});

function libraries(req, res, next){
    if(req.path== "/libraries"){
        req.permission === "librarian";
    }
    else{
        req.permission =="not librarian"
    }
    // console.log("librarian");
    next();
    // console.log("librarian is permitted");
}


function author(req, res, next){
    if(req.path== "/authors"){
        req.permission === "authors";
    }
    else{
        req.permission =="not the authors"
    }
    // console.log("author");
    next();
    // console.log("author is permited");
}


app.listen(5000, () =>{
    console.log('I am listening at 5000....');

});