function Message(){
    const name = "Pranavan"
    // the code below is JSX (javascritp XML)
    if(name)
     return <h1>Hello {name}</h1>;
    else
        return <h1>Hello world</h1>
}

//we need to expoet this fucntion otherwise other file dont understand
export default Message;