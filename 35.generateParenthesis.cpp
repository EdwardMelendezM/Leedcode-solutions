class Solution {

private:
    void backtrack (vector<string>& result, string current, int openCount, int closeCount, int n){
        if (current.length() == 2 * n) {
            result.push_back(current);
            return;
        }

        if (openCount < n) {
            backtrack(result, current + "(", openCount + 1, closeCount, n);
        }

        if (closeCount < openCount){
            backtrack(result, current + ")", openCount, closeCount + 1, n);
        }
    }
public:
    vector<string> generateParenthesis(int n) {
        vector<string> result;
        backtrack(result, "", 0, 0, n);
        return result;
    }
};
