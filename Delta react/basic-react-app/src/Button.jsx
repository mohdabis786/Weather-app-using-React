function helo(event){
    console.log("apna college")
    console.log(event)
}

function Handler(){
    return(
        <>
        <button onClick={helo}>click me</button>
        </>
    )
}
export default Handler