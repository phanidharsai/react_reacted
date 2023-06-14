import './MyStyles.css'

export const StyleSheet=()=>{
    const styling={
        fontSize:'72px',
        color: 'blue',
    }
    return(
        <div> 
            <h1 className='primary'>Styling with regular css</h1>
            <h1 class style={styling}>Styling with inline css</h1>
        </div>)
}