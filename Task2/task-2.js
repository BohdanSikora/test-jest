
let maxN =(max) => {
    let n;
    for (n = 1; n < max; n++) {
        for (let x = 1; x < n; x++) {
            for (let y = 1; y < n; y++) {
                for (let z = 1; z < n; z++) {
                    if (n === (x * x + y * y + z * z)) {
                        console.log(n, x, y, z);
                    }
                }
            }
        }
    }
    }
    console.log(maxN(10))
    module.exports = {maxN};
