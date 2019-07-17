var str="abc";
var str2=new String("abc")
console.log(str===str2)

// 获取类
    //charAt charCodeAt
    console.log(str.charAt(0))//ie6 str[0] 兼容性
    //charAt
    console.log(str.charCodeAt(0))//ascii  10进制
    //fromCharCode 把文字变成编码
    console.log(String.fromCharCode(25105))


//查找类
    //indexOf  找第一出现的位置 返回下标 -未找到w
    var str="abca";
    console.log(str.indexOf("a"))
    console.log(str.indexOf("ca"))
    //lastIndexOf
    console.log(str.lastIndexOf("a"))
    console.log(str.lastIndexOf("bc"))
    //search
    console.log(str.search("a"))
    console.log(str.search(/a/g))
    

