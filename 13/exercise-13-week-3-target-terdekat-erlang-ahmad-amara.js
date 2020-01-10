function targetTerdekat(arr){
    //var hitung = 0;
    var letakO = 0;
    var letakX = [];

    for (i = 0; i < arr.length; i++){
        if (arr[i] === 'o'){
            letakO = i;
        } else if (arr[i] === 'x'){
            letakX.push(i);
        }
    }

    for (j = 0; j <= letakX.length; j++){
        if (letakX[j] > letakO){
            return letakX[j] - letakO;
        } else if (letakX[letakX.length - 1] < letakO){
            return letakO - letakX[letakX.length - 1];
        }
    }

    return 0;
}

console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2