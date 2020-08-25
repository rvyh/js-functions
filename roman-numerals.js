// works for integers up to 3999
function convertToRoman(num) {
  const map = [
    { d:1, r:'I' },
    { d:4, r:'IV' },
    { d:5, r:'V' },
    { d:9, r:'IX' },
    { d:10, r:'X' },
    { d:40, r:'XL' },
    { d:50, r:'L' },
    { d:90, r:'XC' },
    { d:100, r:'C' },
    { d:400, r:'CD' },
    { d:500, r:'D' },
    { d:900, r:'CM' },
    { d:1000, r:'M' }
   ];
  
  // variable holding final answer 
  let roman = "";
  
  while (num > 0) {
   let greatest = {};

   // get object holding greatest decimal number that is less than "num"
   for (let item of map) {
     if (item.d <= num) {
       greatest = item
     } else {
       break;
     }
   } // end for
 
   num -= greatest.d;
   roman += greatest.r;
  } // end while
 
  return roman;
}
