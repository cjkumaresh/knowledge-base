function insertionSort(list) {
    var len = list.length;
    for (i = 1; i < len; i++) {
        for (j = i; j > 0; j--)
            if (list[j] < list[j-1]) {
                temp = list[j];
                list[j] = list[j-1];
                list[j-1] = temp;
            }
    }
    return list;
}

var unsorted_list = [ 4, 7, 6, 9, 8, 1, 3, 5, 0, 2 ];

insertionSort(unsorted_list);