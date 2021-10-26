class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        m = [0] * len(matrix)
        n = [0] * len(matrix[0])

        for i in range(len(m)):
            for j in range(len(n)):
                if matrix[i][j] == 0:
                    m[i] = 1
                    n[j] = 1

        for i in range(len(m)):
            for j in range(len(n)):
                if m[i] == 1 or n[j] == 1:
                    matrix[i][j] = 0
