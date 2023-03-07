Quiz!

1. What is a React component?
me -> React component is a part of code which defined and used/reused at two different places 
sir --> a function that returns react elements

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
-> ReactDOM.render() is missing
--> Pascal case ie first letter must be capital in component

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root"))
```
-> all the components of a component must be under one div.. so div is absent
--> Header must be in angular brackets ie </Header>