import "unicode"

func isPalindrome(s string) bool {
    left, right := 0, len(s) - 1
    for left < right {
        for left < right && !isAlphaNumeric(rune(s[right])) {
            right--
        }
        for left < right && !isAlphaNumeric(rune(s[left]))  {
            left++
        }
        if toLower(rune(s[left])) != toLower(rune(s[right])) {
            return false
        }
        right--
        left++
    }
    return true
}

func toLower (c rune) rune {
    return unicode.ToLower(c)
}

func isAlphaNumeric(c rune) bool {
    return unicode.IsLetter(c) || unicode.IsDigit(c)
}
