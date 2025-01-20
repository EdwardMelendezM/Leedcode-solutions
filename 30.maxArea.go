func maxArea(height []int) int {
    result := 0
    left, right := 0, len(height) - 1

    for left < right {
        xAxis := right - left
        yAxis := min(height[left], height[right])
       
        currentArea := xAxis*yAxis
        if result < currentArea {
            result = currentArea
        }
        if (height[left] < height[right]) {
            left++
        } else {
            right--    
        }
    }
    return result
}

func min(num1, num2 int) int {
    if num1 > num2 {
        return num2
    } else {
        return num1
    }
}
