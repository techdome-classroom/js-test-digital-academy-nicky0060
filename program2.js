/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
const romanValues =
    { 
        I :1,
        V :5,
        X :10,
        L :50,
        C :100,
        D :500,
        M :1000 
    }
 
   let result = 0
   let preValue = 0
   for(let i=s.length-1; i>= 0;i--
    )
   {
     const currentValues = romanValues[s[i]]
     if(currentValues<preValue)
     {
        result -=currentValues
     }
     else
     {
       result  +=currentValues
     }
     preValue = currentValues  
   }
   
 
 return result
};


module.exports={romanToInt}