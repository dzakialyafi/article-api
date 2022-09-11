import { v4 as uuidv4 } from 'uuid'; //ID assignment using uuid library

let articles = []

export const getArticles = (req, res) => {
    if(articles.length === 0){
        res.send("No Articles have been added");
    } else {
        res.send(articles);
    }
};

export const postArticle = (req, res) => {
    const article = req.body;
    const articleWithId = {id: uuidv4(), ...article};

    articles.push(articleWithId);

    res.send(`Article of ${article.title} is successfully added`);
};

export const getArticle =  (req, res) => {
    let id = req.params.id;
    const foundArticle = articles.find((article) => article.id === id);
    
    if(foundArticle === undefined){
        res.send("Article not found");
    } else {
        res.send(foundArticle);
    }
};

export const getTags = (req, res) => {
    let tagsName = req.params.tagsName;
    let date = req.params.date;

    let dateSelectedArticle = [];
    let dateSelectedArticleIdOnly = [];
    let selectedArticles = [];
    let relatedTags = [];

    let newDate = date.split("");
    newDate.splice(4, 0, "-");
    newDate.splice(-2,0,"-");
    newDate = newDate.join("");

    if (articles.length !== 0){
        for (let i = 0; i<articles.length; i++){
            if (dateSelectedArticleIdOnly.length < 10){
                dateSelectedArticleIdOnly.push(articles[i].id)
            } else {
                dateSelectedArticleIdOnly.shift();
                dateSelectedArticleIdOnly.push(articles[i].id)
            }
            if (articles[i].date.toString() === newDate.toString()){
                dateSelectedArticle.push(articles[i]);
                for (let j = 0; j<articles[i].tags.length; j++){
                    if (articles[i].tags[j] === tagsName){
                        selectedArticles.push(articles[i]);
                        relatedTags = [...relatedTags, ...articles[i].tags];
                    }
                }
            }  
        }
        relatedTags = [...new Set(relatedTags)];
        relatedTags = relatedTags.filter(tags => tags !== tagsName);
        let response = 
        {
            "tag": tagsName,
            "count": selectedArticles.length,
            "articles": dateSelectedArticleIdOnly,
            "related_tags": relatedTags
        }

        res.send(response);
    } else {
        res.send("No articles has been added");
    }
}