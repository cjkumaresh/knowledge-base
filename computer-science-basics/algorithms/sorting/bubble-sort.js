function bubbleSort(list) {
    var temp, i, SORT_REQUIRED = false, len = list.length;
    for (i = 1; i <= len; i++) {
        if (list[i] < list[i-1]) {
            temp = list[i];
            list[i] = list[i-1];
            list[i-1] = temp;
            SORT_REQUIRED = true
        }
    }
    if (SORT_REQUIRED)
        bubbleSort(list);
    return list;
}

var unsorted_list = [4, 7, 6, 9, 8, 1, 3, 5, 0, 2];
bubbleSort(unsorted_list);