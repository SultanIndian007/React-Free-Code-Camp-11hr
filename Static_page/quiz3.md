1. What do props help us accomplish?
-> Reuse the data from json format to our required o/p without hardcoding them
make a component more reusable.

2. How do you pass a prop into a component?
-> In the tags we pass it in curly brackets ex-> {props.name}
<MyAwesomeHeader title ="???">


3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
-> no, we cannot because props are only passed in functions

No,because the JSX we use to describe the native DOM elements will be turned 
in to real DOM elements by React and real DOM elements only have attributes
/ properties specified in the HTML specification. (Which doesn't include properties like
`blahblahblah`)

4. How do I receive props in a component?
function Navbar() {
    return (
        <header>
            ...
        </header>
    )
}
-> <header>{props.head}</header>
function Navbar(props){
    console.log(blahblahblah)
}

5. What data type is `props` when the component receives it?
Object