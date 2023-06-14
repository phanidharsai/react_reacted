export const Lists=()=>{
    const list=['Phanidharsai','Tom cruise','Jason statham','Sylvester stallone'];
    return(
        <div>
        {
        list.map((name)=>{
            return <h1 key={name}>{name}</h1>;
        })}
        </div>
    )
}