const multiplier={
numbers:[1,4,8],
multiplyby:2,
multiply(){
return this.numbers.map((number)=>number*this.multiplyby)


}

};
console.log(multiplier.multiply())