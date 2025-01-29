class Solution {
public:
    int characterReplacement(string s, int k) {
        int maxFreq = 0, maxLength = 0, start = 0;
        vector<int> charCount(26,0);

        for (int end = 0; end < s.length(); end++) {
            charCount[s[end]-'A']++;
            maxFreq = max(maxFreq, charCount[s[end]- 'A']);

            int windowSize = end - start + 1;
            if(windowSize - maxFreq > k) {
                charCount[s[start] - 'A']--;
                start++;
            }


            maxLength = max(maxLength, end - start + 1);
        }

        return maxLength;
    }
};
