function groupAnimals(arr){
    var sort = arr;
    var hasil = [];
    do {
        swap = false;
        for (i = 0; i < sort.length - 1; i++){
            if (sort[i][0] > sort[i + 1][0]){
                var fix = sort[i+1];
                sort[i + 1] = sort[i];
                sort[i] = fix;

                swap = true
            }
        }
    } while (swap)

    var kelompok = [];
    for (j = 0; j < sort.length - 1; j++){
        if (sort[j + 1][0] === sort[j][0]){
            kelompok.push(sort[j]);
        } else if(sort[j + 1] !== sort[j][0]){
            kelompok.push(sort[j]);
            hasil.push(kelompok);
            kelompok = [];
        } 
    }

    kelompok.push(sort[sort.length - 1]);
    hasil.push(kelompok);

    return hasil;
}

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));