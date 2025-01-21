class Solution {
public:
    bool isValid(string s) {
        stack<char> stack;
        unordered_map<char,char> mapping = {
            {')','('},
            {'}','{'},
            {']','['}
        };

        for (char c: s) {
            if (mapping.count(c)){
                char topElement = stack.empty() ? '#' : stack.top();
                if ( topElement == mapping[c] ) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(c);
            }
        }
        return stack.empty();;
    }
};
