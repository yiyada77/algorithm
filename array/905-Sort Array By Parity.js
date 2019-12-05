var sortArrayByParity = function (A) {
    let i = 0;
    let j = A.length - 1;
    while (i <= j) {
        while (A[i] % 2 == 0 && i <= j) {
            i++;
        }
        while (A[j] % 2 == 1 && i <= j) {
            j--;
        }
        if (i <= j) {
            tmp = A[i];
            A[i] = A[j];
            A[j] = tmp;
        }
    }
    return A;
};