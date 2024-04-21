var results = [];

for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) !== -1) {
        results.push(arr1[i]);
    }
}
