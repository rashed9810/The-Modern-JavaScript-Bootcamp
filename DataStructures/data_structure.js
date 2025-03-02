// Data Structures: Arrays, Linked Lists, Trees, Graphs, Hash Tables

// Example: Implementing a Stack
// class Stack {
//     constructor() {
//         this.items = [];
//     }

//     push(element) {
//         this.items.push(element);
//     }

//     pop() {
//         if(this.isEmpty()) return "Underflow";
//         return this.items.pop();
//     }

//     peek() {
//         return this.items[this.items.length -1];
//     }

//     isEmpty() {
//         return this.items.length === 0;
//     }
// }

// const stack = new Stack();
// stack.push(10);
// stack.push(20);
// console.log(stack.pop()); // 20
// console.log(stack.peek()); // 10

//memoization in dynamic programming
function fibonacciMemo(n, memo = {}) {
    if (n in memo) return memo[n]; // যদি আগেই হিসাব করা থাকে
    if (n === 0) return 0;
    if (n === 1) return 1;
  
    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
  }
  
  console.log(fibonacciMemo(6)); 
  console.log(fibonacciMemo(7));
  console.log(fibonacciMemo(8));

  
  // tabulation(bottom up approach)) in dynamic programming
  function fibonacciTabulation(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
  
    const dp = new Array(n + 1); // একটি অ্যারে তৈরি করা যা প্রতিটি ফিবোনাচ্চি মান ধারণ করবে
    dp[0] = 0;
    dp[1] = 1;
  
    for (let i = 2; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2]; // আগের দুটি মান যোগ করে বর্তমান মান বের করা
    }
  
    return dp[n]; // শেষ মান হলো Fibonacci(n)
  }
  
  console.log(fibonacciTabulation(6)); // Output: 8
  

  

