						/* if word less than 3 letters, move to next line
							@param { string } str;
							@return { string }; 
						*/

export default function hangingWords(str){			
  var arr=str.split(" "),
      arrLen = arr.length;
  for(var i=0;i<arrLen;i++){
    arr[i]+=(arr[i].length<=3) ? "\u00a0" : " ";
  }
  return arr.join("");
}						