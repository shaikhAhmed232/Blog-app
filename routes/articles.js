const {Router} = require('express');
const {getArticle, createArticles, getSingleArticle, deleteArticle, getEditPage, updateArticle} = require('../controllers/articles')

const router = Router();

router.get('/',getArticle);

router.get('/articles/new', (req, res) => {
    res.render('newArticle', {article: {title: "", descriptions: ""}})
})

router.route('/articles/:id').get(getSingleArticle).delete(deleteArticle)

router.route('/articles/:id/edit').get(getEditPage).patch(updateArticle)

router.post('/articles', createArticles)

module.exports = router;