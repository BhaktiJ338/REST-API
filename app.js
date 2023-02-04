const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const { application } = require("express");
require("dotenv").config();

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

//connect to db
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

const articleSchema = { 
    title: String,
    content: String
};

const Article = mongoose.model('Article', articleSchema);

//------------------request targetting all articles------------------------
//route handler for "/articles"
app.route("/articles")

.get(function(req, res){
    Article.find({}, function(err, result){
        if(!err){
            res.send(result);
        }else{
            res.send(err);
        }
    });
})

.post(function(req, res){

    const article = new Article({
        title: req.body.title,
        content: req.body.content
    })
    article.save(function(err){
        if(!err){
            res.send("successfully added new article");
        }else{
            res.send(err);
        }
    });
})

.delete(function(req, res){
    Article.deleteMany({title:"DOM"}, function(err){
        if(!err) res.send("successfully deleted all articles");
        else res.send(err);
    });
});

//------------------request targetting specific article------------------------

app.route("/articles/:titleID")

.get(function(req, res){
    Article.findOne({title:req.params.titleID}, function(err, result){
        if(result) res.send(result);
        else res.send("No articles found");
    });
})

.put(function(req, res){

    Article.replaceOne(
        {title:req.params.titleID},  //find
        {
            title: req.body.title,  //replace
            content: req.body.content
        },
        { multi: true, upsert: true },
        function(err){
            if(!err){ 
                res.send("Successfully updated article");
            }
            else {
                res.send(err);
            }
        }
    )
})

.patch(function(req, res){
    Article.updateOne(
        {title:req.params.titleID},  //find
        {$set:req.body},            //update
        function(err, result){
            if(err || !result.matchedCount){ 
                res.send("Match Not Found");
            }
            else {
                res.send("Successfully updated article");
            }
        }
    );
})

.delete(function(req, res){
    Article.deleteOne(
        {title:req.params.titleID},
        function(err, result){
            if(err || result.deletedCount==0) {
                console.log(err);
                res.send("Match not found");
            }
            else {
                console.log(err);
                res.send("deleted one document");
            }
        }
    );
});


app.listen(process.env.PORT, function(){
    console.log("Server running on PORT 3000");
});