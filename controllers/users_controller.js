module.exports.profile= function(req,res){
    return res.end('<h1>User Profile</h1>');
}
module.exports.edits= function(req,res){
    return res.end('<h1>User Edits</h1>');
}