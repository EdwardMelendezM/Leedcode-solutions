class MinStack {
public:
    stack<int> auxStack;
    stack<int> minStack;
    MinStack() {
        
    }
    
    void push(int val) {
        auxStack.push(val);
        if ( minStack.empty() || val <= minStack.top() ) {
            minStack.push(val);
        }
    }
    
    void pop() {
        if ( minStack.top() == auxStack.top() ) {
            minStack.pop();
        }
        auxStack.pop();
    }
    
    int top() {
        return auxStack.top();
    }
    
    int getMin() {
        return minStack.top();
    }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack* obj = new MinStack();
 * obj->push(val);
 * obj->pop();
 * int param_3 = obj->top();
 * int param_4 = obj->getMin();
 */
