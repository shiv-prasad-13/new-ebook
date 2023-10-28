var arr=['a','v']
console.log(arr)

var arr1=['a',12,'hi',12050.20,'hello','how r u']
// console.log(arr1,"\n", arr1.length)
arr2=arr1.length-1;
arr3=arr2/2;
integer=Math.floor(arr3)
// console.log(interger)
console.log(arr1[0],"\n",arr1[integer],arr1[arr2])
// console.log(arr1[0],arr2[arr1])

var itcompanies=[ 'Facebook', 'Google', 'Microsoft','Apple', 'IBM',' Oracle',' Amazon']
com=itcompanies.length-1;
var mid=com/2;
console.log(itcompanies,"\n",itcompanies[mid],"\n",itcompanies[com])
console.log(itcompanies.join())
if(itcompanies.includes("Facebook")){
    console.log('facebook')
}
else{
    console.log('company not found')
}

