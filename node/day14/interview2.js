// 翻转一棵二叉树。

// 示例：

// 输入：
//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9

// 输出：
//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

// 备注:

// 这个问题是受到 Max Howell 的 原问题 启发的 ：

// 谷歌：我们 90％ 的工程师使用您编写的软件(Homebrew)，
// 但是您却无法在面试时在白板上写出翻转二叉树这道题，这太糟糕了。


var inverTree=function(root){
    if(!root) return null;
    return {
        val:root.val,
        left:inverTree(root.right)||null,
        right:inverTree(root.left)||null
    }
}
const root = {
    val: 4,
    left: 
    { val: 2,
      left: { val: 1, left: null, right: null },
      right: { val: 3, left: null, right: null },
    },
    right: 
    { val: 7,
      left: { val: 6, left: null, right: null },
      right: { val: 9, left: null, right: null },
    },
  };
  console.log(inverTree(root))



//   假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
// 注意：给定 n 是一个正整数。
// 示例 1：
// 输入： 2
// 输出： 2
// 解释： 有两种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶
// 2.  2 阶
// 示例 2：
// 输入： 3
// 输出： 3
// 解释： 有三种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶 + 1 阶
// 2.  1 阶 + 2 阶
// 3.  2 阶 + 1 阶
var climbStairs=function(n){
    if(n==1||n==2||n==3){
        return n;
    }
    let memory=[0,1,2,3];
    for(let i=4;i<=n;i++){
        memory[i]=memory[i-1]+memory[i-2]
    }
    console.log(memory)
    return memory[n]
}
console.log(climbStairs(5))





// 如何把二叉树所有的节点中的值加一？

let plusOne=function(root){
    if(!root){
        return
    }
    root.val+=1;
    plusOne(root.left);
    plusOne(root.right)
}




// 如何判断两棵二叉树是否完全相同？
let isSameTree=function(root1,root2){
    if(root1==null&&root2==null){
        return true
    }
    if(root1==null||root2==null){
        return false
    }

    if(root1.val!=root2.val){
        return false;
    }
    return isSameTree(root1.left,root2.left)&&isSameTree(root1.right,root2.right)
}