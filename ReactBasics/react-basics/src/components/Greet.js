// normal function
// function Greet(){
//     return <h1>hello Phanidhar sai</h1>
// }

// arrow function
    export const Greet= (props)=> {
        // props.name='vishwas' //should not use like this as props are immutable
    return (
    <div>
    <h1>
        hello {props.name} {props.package}
    </h1>
    {props.children}
    </div>
    )
}
// export default Greet
// by commenting above line we can directly export by appending export at line 7 which is called named export
// if the above method is used we cannot use alias while importing and also 
// it should be in the format import {function name} from 'location';