function removeElement(array,element){
   for(var i=0; i<array.length;i++ ){ 
       if(array[i]==element){
           array.splice(i,1)
            i--; 
       }
   } 
}
let arr= [1,0,0,0,1,1,2,3,4,0,1,1,10]
removeElement(arr, 0)
console.log(arr)