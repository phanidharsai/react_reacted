import { ChildComponent } from "./ChildComponent";

export const ParentComponent=()=>{
    const greetParent=(child)=>{
        alert(`hello parent ${child}`);
    }
    return <ChildComponent greetHandler={greetParent}/>
}