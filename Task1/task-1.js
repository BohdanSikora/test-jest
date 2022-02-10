const fiNumb = (...arg) => {
    let k = 0;
    arg.map(el => {
        if (el%2) {
            k++
        }
    })
return k
}
console.log(fiNumb (1,2,3,4,5,6,7,8,9,10,11,12,13,14,15));
module.exports = {fiNumb};