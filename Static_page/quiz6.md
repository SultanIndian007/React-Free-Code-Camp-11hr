1. You have 2 options for what you can pass in to a
   state setter function (e.g. `setCount`). What are they?
   -> setCount => count + 1, ie count and setCount
   -->
   a. New value of state (setCount(42))
   b. Callback function - whatever the callback function
   returns === new value of state

2. When would you want to pass the first option (from answer
   above) to the state setter function?
   -> count
   --> When we don't need the prev value of state to determine new value of state
   ie final o/p is fixed

3. When would you want to pass the second option (from answer
   above) to the state setter function?
   ->
   --> When we need the prev value of state to determine the new value
