func twoSum(numbers []int, target int) []int {
    left, right := 0, len(numbers) - 1
    for left < right {
        if numbers[left] + numbers[right] > target {
            right--
        }
        if numbers[left] + numbers[right] < target {
            left++
        }
        if numbers[left] + numbers[right] == target {
            break
        }
    }
    result := []int{left +1 , right + 1}
    return result
}
