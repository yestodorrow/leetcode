// 最简单的单例模式

// var  per={
//     name:"Jake",
//     age:20,
//     getName:function(){
//         return this.name;
//     },
//     getAge:function(){
//         return this.age
//     }
// }

//上面的属性可能被外部修改
var per=(function(){
    var name="Jake";
    var age=20;
    return {
        getName:function(){
            return name
        },
        getAge:function(){
            return age
        }
    }
})()
console.log(per.getAge())


//调用时才初始化的单例模式
var per=(function(){
    var instance=null;
    var name="Jake";
    var age=29;
    function initial(){
        return {
            getName:function(){
                return name
            },
            getAge:function(){
                return age
            }
        }
    }
    return {
        getInstance:function(){
            if(!instance){
                instance=initial()
            }
                return instance
            
        }
    }
})()

var p1=per.getInstance();
console.log(p1)
