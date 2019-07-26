function hideString(str){
    return str.replace(/[a-zA-Z]/g,"X")
}
var hidden=hideString("hello world");
function log(str){
    console.log(str)
}
log(hidden)
