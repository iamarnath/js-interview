/**
 * Problem Statement: Given an integer array arr, find the contiguous subarray
 *  (containing at least one number) which
has the largest sum and return its sum and print the subarray.
 * Example 1:

Input: arr = [-2,1,-3,4,-1,2,1,-5,4] 

Output: 6 

Explanation: [4,-1,2,1] has the largest sum = 6. 

Examples 2: 

Input: arr = [1] 

Output: 1 

Explanation: Array has only one element and which is giving positive sum of 1. 

Intuition: Basically this problem can be done in linear time complexity with Kadane’s algorithm along with that will also get the subarray which is giving the largest positive-sum. 

Approach: 

-> We will have the following variables in the beginning : 

msf – max so far, meh – max end here, start – to get the starting index of ans’s subarray, end – to get the ending index of ans’s subarray. 

-> Traverse the array starting with adding the ith element with max_end_here(meh) , now we will check that adding the element gives greater value than max_so_far(msf) , if yes then we will update our meh and also update the starting and ending index . 

for(int i=0;i<nums.size();i++){ 

meh+=nums[i]; 

if(meh>msf){ msf=meh; start=s; end=i; } 

if(meh<0){meh=0; s=i+1;} 

} 

->Now in this step, we will print the answer subarray using the start and end variables.

->Return the largest subarray sum that is:- msf. 

*/

class SDESheet{
    maxSubArraySum(a,size){
        var maxint=Math.pow(2,53);
        var max_so_far = -maxint-1;
       // console.log("max_so_far",max_so_far);
        var max_end_here = 0;
        for(var i=0;i<size;i++){
            max_end_here = max_end_here + a[i];
             if(max_so_far<max_end_here){
                max_so_far = max_end_here;
             }
             if(max_end_here<0){
                 max_end_here = 0;
             }
        }
        return max_so_far;
    }
}

var a = [ -2, -3, 4, -1, -2, 1, 5, -3 ]
let mat = new SDESheet();

console.log(mat.maxSubArraySum(a,a.length)); 
