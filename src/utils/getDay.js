import getDayOfYear from './getDayOfYear';


                /* Get day of year and compare with spreadsheet length 
                @param {Number} datalen;
                @return {Number} day;
              */


 export default function getDay(dataLength) {
      let day = 0;
      let dayOfYear = getDayOfYear();
      if((dayOfYear-dataLength)>dataLength){
        day = dayOfYear - dataLength*2;
      }
      else {
        day = (dayOfYear<=dataLength) ? dayOfYear : dayOfYear - dataLength;
      }

      return day;
  }