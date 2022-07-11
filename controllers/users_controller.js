module.exports.profile= function(req,res){
    // return res.end('<h1>User Profile</h1>');
    res.render('user_profile',{
        title: "User Profile"
    });
}
module.exports.edits= function(req,res){
    return res.end('<h1>User Edits</h1>');
}