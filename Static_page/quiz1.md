1. Why do we need to `import React from "react"` in our files?
Me-> to get react without using cdn links
Sir-> React is what defines JSX

2. If I were to console.log(page) in index.js, what would show up?
object Object
    A javascript object. React elements that describe what
    should react eventually add to DOM for us

3. What's wrong with this code:
```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```
ReactDOM.render is missing
    We need our jsx to be nested in single parent element ex div 
    or <> </> (called fragments)

4. What does it mean for something to be "declarative" instead of
4. "imperative"?
declarative means we define what to do rather than how to do
    Declarative means I can tell the computer what to do and 
    expect it to handle the details.
    Imperative means I need to tell it HOW to do each step

5. What does it mean for something to be "composable"?
Composable means to divide our code into smaller parts and 
re rendering it together in APP.js file
    small pieces that we can put together to make something 
    larger / greater than individual pieces.