
class NewsController {

    //[GET] /news
    index(req,res){
        res.render('news');
    }

    //[GET] /news/:slug (1 cái slug bất kì)
    show(req,res){
        res.send('HELLO New detail');
    }

}

module.exports = new NewsController();