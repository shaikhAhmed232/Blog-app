const Article = require('../models/artilcleModel')

// Controller for getting all articles from Database
const getArticle = async (req, res) => {
    try {   
        const rows = await Article.getAll();
        res.render('index', {articles: rows})
    } catch (err) {
        res.redirect('500')
    }
}

// controller for creating article inside Database
const createArticles = async (req, res) => {
    try {
        const data = req.body
        const result = await Article.create(data.title, data.descriptions);
        return res.status(201).redirect('/')
    } catch (err) {
        console.log(err)
        res.redirect('500')
    }
}

// controller for getting single Article
const getSingleArticle = async (req, res) => {
    try {
        let id = req.params.id
        // let query = req.query
        const article = await Article.getAll({id:id});
        res.render('article', {article: article[0]})
    } catch (err) {
        console.log(err)
        res.redirect('500')
    }
}

// controller for deleting article from Database
const deleteArticle = async (req, res) => {
    try {
        const {id} = req.params
        await Article.delete({id});
        res.redirect('/')
    } catch(err) {
        console.log(err)
        res.redirect('500')
    } 
}

// controller for rendring edit page
const getEditPage = async(req, res) => {
    try {
        const rows =  await Article.getAll({id:req.params.id})
        res.render('edit', {article: rows[0]})
    } catch (err) {
        console.log(err)
        res.redirect('500')
    }
}

// controller for updating article inside Database
const updateArticle = async (req, res) => {
    try {
        console.log('running udpate article')
        let data = req.body;
        data = {...data, created_at: new Date()}
        const result = await Article.update(data, req.params.id);
        res.redirect('/')
    } catch (err) {
        console.log(err)
        res.redirect('500')
    }
}

module.exports = {getArticle, createArticles, getSingleArticle, deleteArticle, getEditPage, updateArticle}