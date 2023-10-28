var shoppingcart=['milk','coffee','tea','honey']
shoppingcart.unshift("meat");
console.log(shoppingcart)
shoppingcart.push("sugar")
console.log(shoppingcart)
shoppingcart.splice(4)
var index=shoppingcart.indexOf("milk")
console.log(index)
shoppingcart.splice(2,1,"greentea")
console.log(shoppingcart)

var countries=['america','dubai','london','india','china','london']
console.log(countries)
if(countries.includes("india")){
    console.log("INDIA")
}
