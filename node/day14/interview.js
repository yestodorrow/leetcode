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

