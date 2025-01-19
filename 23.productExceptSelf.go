func productExceptSelf(nums []int) []int {
    n := len(nums)
    results := make([]int, n)
    preffix := 1
    suffix := 1

    for i:=0 ; i <= n - 1; i++ {
        results[i] = preffix
        preffix *= nums[i]
    }

    for i:= n - 1; i>=0; i-- {
        results[i] *= suffix
        suffix*= nums[i]
    }

    return results
}
