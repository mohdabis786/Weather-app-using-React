function MsgBox({username,textColor}){
    let style={color:textColor}

    
    return(
        <>
        <p className="para" style={style}>Hello {username} </p>
        </>
    )
}
export default  MsgBox;