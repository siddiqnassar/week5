
let Movie=require('./movieModel');

exports.create = function(req,res){
    console.log('Came inside savemethod of employee')
    let movie=new Movie();
    movie.name=req.body.name;
    movie.age= req.body.age;
    movie._id=req.body._id;
    movie.save(function(err){
        res.json({
            status :'Success',
            data : movie
        });
    })
   
};

exports.delete=function(req,res){
    Movie.remove({
        name: req.params.name
        
    },function(err){
        if(err)
        res.send(err);
        res.json({
            status : 'Deleted',
            message : 'Deleted successfully'
        });
    });
}
exports.listAll = function(req,res){
    
    Movie.find(function (err, movies) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "movies retrieved successfully",
            data: movies
        });
    });
};

exports.findById = function(req,res){
    Movie.findById(req.params._id, function (err,emp) {
        if (err)
            res.send(err);
        res.json({
            message: ' details loading..',
            data: emp
        });
    });
};
exports.update=function(req,res){
    Movie.findById(req.params._id, function (err, emp) {
        if (err)
            res.send(err);
emp.name = req.body.name;
emp.age=req.body.age;      
// save the contact and check for errors
        emp.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Employee Info updated',
                data: emp
            });
        });
    });
}