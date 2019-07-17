// 给定一个整数数组 nums 和一个目标值 target，
//请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。
//但是，你不能重复利用这个数组中同样的元素。

// 示例:

// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

        function getIndex(arr,sum){ 
            for(var i=0;i<arr.length;i++){
                var de= sum-arr[i];
                for(var j=i+1;j<arr.length-1;j++){
                    if(de==arr[j]){
                        return  [i,j]
                    }
                }
            }
        }
        console.log(getIndex([2, 7, 11, 15],9))
        let twoSum=(nums,target)=>{
            let result=[];
            nums.map((item,index)=>{
                if(nums.indexOf(target-item)>-1&&nums.indexOf(target-item)!=index){
                    result=[index,nums.indexOf(target-item)]
                }
            })
            return result;
        }
        console.log(twoSum([2, 7, 11, 15],9))



