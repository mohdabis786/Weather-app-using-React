function handleForm(event){
    event.preventDefault();
    console.log("form was submit")
}


function Form(){
    return(
        <>
        <form>
            <input placeholder="write something"></input>
            <button onClick={handleForm}>Submit</button>
        </form>
        </>
    )
}
export default Form;
