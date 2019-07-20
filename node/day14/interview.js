// 将两个有序链表合并为一个新的有序链表并返回。

// 新链表是通过拼接给定的两个链表的所有节点组成的。 

// 示例：
// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4

var mergeTwoLists=function(l1,l2){
    var mergedHead={
        val:-1,
        next:null
    },
    crt=mergedHead;
    while(l1&&l2){
        if(l1.val>l2.val){
            crt.next=l2;
            l2=l2.next;
        }else{
            crt.next=l1;
            l1=l1.next;
        }
        crt=crt.next
    }
    crt.next=l1||l2;
    return mergedHead.next;




  


}




  // 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

    // 你可以假设数组中无重复元素。
    
    // 示例 1:
    // 输入: [1,3,5,6], 5
    // 输出: 2
    
    // 示例 2:
    // 输入: [1,3,5,6], 2
    // 输出: 1
    
    // 示例 3:
    // 输入: [1,3,5,6], 7
    // 输出: 4
    
    // 示例 4:
    // 输入: [1,3,5,6], 0
    // 输出: 0


    var nums=[1, 3, 5, 6],target=5;
    // 简单解法：
    var searchIndex=function(nums,target){
        for(let i=0;i<nums.length;i++){
            if(nums[i]==target){
                return i
            }
        };
        return nums.length;
    }
    console.time("searchIndex")
    console.log(searchIndex(nums,target))
    console.timeEnd("searchIndex")
    //二分法查找
    var searchInsert=function(nums,target){
        let left=0,right=nums.length-1;
        while(left<=right){
            let middle=Math.floor((left+right)/2);
            if(target==nums[middle]){
                return middle
            }else if(target<nums[middle]){
                right=middle-1;
            }else if(target>nums[middle]){
                left=middle+1
            }
        }
        return left;
    }
    console.time("searchInsert")
    console.log(searchInsert(nums,target))
    
    console.timeEnd("searchInsert")



// 给定一个二叉树，找出其最大深度。

// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

// 说明: 叶子节点是指没有子节点的节点。

// 示例：
// 给定二叉树 [3,9,20,null,null,15,7]，

//     3
//    / \
//   9  20
//     /  \
//    15   7

// 返回它的最大深度 3 。


var maxDepth=function(root){
    if(!root){
        return 0
    }

    let longest=1;
    let ergodic=function(root,depth){
        if(!root){
            return
        }
        if(root.left||root.right){
            depth+=1;
            if(depth>longest){
                longest=depth;
            }
            ergodic(root.left,depth);
            ergodic(root.right,depth)
        }
    }
    ergodic(root,1);
    return longest;


    


}


//杨辉三角
///给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。

// 在杨辉三角中，每个数是它左上方和右上方的数的和。

// 示例:

// 输入: 5
// 输出:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

var generate = function(numRows) {
    if (numRows === 0) {
      return []
    }
    if (numRows === 1) {
      return [[1]];
    }
    let fullResult = [
      [1],
      [1, 1],
    ];
    let recursion = function(numRows) {
      if (numRows === 2) {
        return fullResult[1];
      }
      let prevArr = recursion(numRows - 1);
      let result = [];
      for (let i = 0; i < prevArr.length; i++) {
        if (prevArr[i] && prevArr[i + 1]) {
          result.push(prevArr[i] + prevArr[i + 1]);
        }
      }
      result = [1, ...result, 1];
      fullResult.push(result);
      return result;
    }
    recursion(numRows);
    return fullResult;
  };
console.log(generate(1))
console.log(generate(2))
console.log(generate(3))
console.log(generate(4))


var generate2 = function(numRows) {
    const res = [];
    for (let i = 0; i < numRows; i++) {
      if (i === 0) {
        res.push([1]); // 第一行 基础行
      } else {
        const arrs = [1]; // 初始化当前行的第一个元素为1
        const preRows = res[i - 1]; // 上一行数据
        for (let j = 0; j < preRows.length; j++) {
          // 上一行遍历获取左上方和右上方的数的和
          arrs.push(preRows[j] + (preRows[j + 1] || 0));
        }
        res.push(arrs);
      }
    }
    return res;
  };
console.log(generate2(1))
console.log(generate2(2))
console.log(generate2(3))
console.log(generate2(4))


// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

// 说明：

// 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

// 示例 1:
// 输入: [2,2,1]
// 输出: 1

// 示例 2:
// 输入: [4,1,2,1,2]
// 输出: 4


var singleNumber = function(nums) {
    while(nums.length > 1) {
      for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[0]) {
          nums.splice(i, 1);
          nums.splice(0, 1);
          break;
        } else if (i === nums.length - 1 && nums[i] !== nums[0]) {
          return nums[0];
        }
      }
    }
    return nums[0];
  };

console.log(singleNumber([4,1,2,1,2]))


var singleNumber1=function(nums){
    nums.sort();
    for(let i=0;i<nums.length;i++){
        if(nums[i]==nums[i+1]){
            i++
        }else{
            return nums[i]
        }
    }
}
console.log(singleNumber1([4,1,2,1,2]))


var singleNumber2=function(nums){
    let res=0;
    for(let i=0;i<nums.length;i++){
        res^=nums[i]
    }
    return res
}
console.log(singleNumber2([4,1,2,1,2]))




// 设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。

// push(x) -- 将元素 x 推入栈中。
// pop() -- 删除栈顶的元素。
// top() -- 获取栈顶元素。
// getMin() -- 检索栈中的最小元素。

// 示例:
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> 返回 -3.
// minStack.pop();
// minStack.top();      --> 返回 0.
// minStack.getMin();   --> 返回 -2.

var minStack=function(){
    this.statch=[];
    this.min=null;
}
