export const ClickHandler=()=>{
    const clickHandler=(event,count=1)=>{
        console.log('button clicked', count, event);
    }
    return(
        <div>
            <button onClick={clickHandler}>Click me</button>
            <button onClick={(event)=>clickHandler(event,5)}>Click me</button>
        </div>
    )
}
