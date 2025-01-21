// stoi: convert from string to int
class Solution {
public:
    int evalRPN(vector<string>& tokens) {
        stack<int> numberStack;

        for (const string& token: tokens) {
            if (token == "+" || token == "-" || token == "*" || token == "/"){
                int value2 = numberStack.top(); numberStack.pop();
                int value1 = numberStack.top(); numberStack.pop();
                if (token == "+") {
                    numberStack.push(value1 + value2);
                } else if (token == "-") {
                    numberStack.push(value1 - value2);
                } else if (token == "*") {
                    numberStack.push(value1 * value2);
                } else if (token == "/") {
                    numberStack.push(value1 / value2);
                }
            } else {
                numberStack.push(stoi(token));
            }
        }
        return numberStack.top();
    }
};
