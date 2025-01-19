func lengthOfLongestSubstring(s string) int {
    mapString := make(map[rune]int)
    max := 0
    for index, char := range s {
        if _, exists := mapString[char]; !exists {
            mapString[char] = index
        } else {
            newLenght := len(mapString)
            if (newLenght > max){
                max = newLenght
            }
            // Add logics
            tmpIndex := mapString[char]
            for key, indexMap := range mapString {
                if indexMap < tmpIndex {
                    delete(mapString,key)
                }
                if indexMap == tmpIndex {
                    mapString[char] = index
                }
            }
        }
    }

    newLenght := len(mapString)
        if (newLenght > max){
            max = newLenght
        }
    return max
}
