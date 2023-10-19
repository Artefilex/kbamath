export const RandomDataProvider =  (arr , count) => {
   const shuffled = arr.slice()
   let i = arr.length;
   const min = i - count;
   while (i-- > min) {
     const index = Math.floor((i + 1) * Math.random());
     [shuffled[i], shuffled[index]] = [shuffled[index], shuffled[i]];
   }
   return shuffled.slice(min)

}