	                /* Get day of the full year 
                          @return {number}
                      */

export default function getDayOfYear() {
  let now = new Date(),
      start = new Date(now.getFullYear(), 0, 0),
      diff = now-start,
      oneDay = 864e5; //number of 24 hours day in seconds 86400000
   return Math.floor(diff/oneDay);
  }
