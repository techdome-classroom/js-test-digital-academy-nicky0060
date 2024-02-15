/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
const romanvalues =
    { 
        I :1,
        V :5,
        X :10,
        L :50,
        C :100,
        D :500,
        M :1000 
    }
 {
   let result = 0
   let prevalue = 0
   for(let i=s.length; i<= 0;i++)
   {
     const currentValues = romanvalues[s[i]]
     if(currentValues<prevalue)
     {
        result -=currentValues
     }
     else
     {
       result  +=currentValues
     }  
   }
   prevalue = currentValues
 }
 return result
};


module.exports={romanToInt}