// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

// 示例 1:

// 输入: 123
// 输出: 321
//  示例 2:

// 输入: -123
// 输出: -321
// 示例 3:

// 输入: 120
// 输出: 21
    let reverse=(x)=>{
        let y=[...String(Math.abs(x))]
        let newStr=[];
        y.map((v,i)=>{
            newStr[y.length-i-1]=v
        })  
        return x>0?newStr.join(""):"-"+ newStr.join("")  
    };
    console.log(reverse(123393))
    console.log(reverse(-12323))

    let reverse2=(x)=>{
        let y=[...String(Math.abs(x))]
        let newStr='';
        for(let i=y.length-1;i>=0;i--){
            newStr+=y[i]
        }
        return x>0?newStr:"-"+ newStr
    };
    console.log(reverse2(123393))
    console.log(reverse2(-12323))
