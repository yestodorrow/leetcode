// 给定一个整数数组 nums 和一个目标值 target，
//请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。
//但是，你不能重复利用这个数组中同样的元素。

// 示例:

// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]
    let twoSum1=(arr,sum)=>{
        let theOtherOne;
        let result=[]
        for(var i=0,len=arr.length;i<len;i++){
            theOtherOne=sum-arr[i];
            for(var j=i;j<arr.length;j++){
                if(arr[j]==theOtherOne){
                    result=[i,j]
                }
            }
        }
        return result
    }
    

    let twoSum2=(arr,sum)=>{
        let theOtherOne;
        let result=[]
        for(var i=0,len=arr.length;i<len;i++){
            theOtherOne=sum-arr[i];
            let index=arr.indexOf(theOtherOne);
            if(index!==i&&index!=-1){
                result=[i,index]
            }
        }
        return result
    }
    console.log(twoSum2([2, 7, 11, 15],9))


    let twoSum3=(arr,sum)=>{
        for(var i=0,len=arr.length;i<len;i++){
            for(var j=i;j<len;j++){
                if(arr[i]+arr[j]==sum){
                    result=[i,j]
                }
            }
        }
        return result
    }
    console.time("sum1")
    console.log(twoSum1([2, 7, 11, 15],9))
    console.timeEnd("sum1")
    console.time("sum2")
    console.log(twoSum2([2, 7, 11, 15],9))
    console.timeEnd("sum2")
    console.time("sum3")
    console.log(twoSum3([2, 7, 11, 15],9))
    console.timeEnd("sum3")