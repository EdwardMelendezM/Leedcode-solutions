import "sort"

func longestConsecutive(nums []int) int {
    if len(nums) == 0 {
        return 0
    }

    count := 1
    result := 1

    sort.Ints(nums)

    for i := 1; i < len(nums); i++ {
        if nums[i] == nums[i-1] {
            continue
        }
        if nums[i] == nums[i-1]+1 {
            count++
        } else {
            if count > result {
                result = count
            }
            count = 1
        }
    }

    if count > result {
        result = count
    }

    return result
}
