func firstCompleteIndex(arr []int, mat [][]int) int {
	numbersMaps := map[int][2]int{}
	rows := map[int]int{}
	columns := map[int]int{}

	for i := 0; i < len(mat); i++ {
		for j := 0; j < len(mat[i]); j++ {
			numbersMaps[mat[i][j]] = [2]int{i,j}
		}
	}

	for index, value := range arr {
        curr := numbersMaps[value]
        rows[curr[0]]++
        columns[curr[1]]++
        if rows[curr[0]] == len(mat[0]) || columns[curr[1]] == len(mat) {
            return index
        }
    }
    return -1
}
