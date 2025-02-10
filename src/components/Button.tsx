import { Dispatch, SetStateAction, useState } from "react"

interface Props {
    children:string
}

const click = (setNumber:Dispatch<SetStateAction<number>>,number:number)=>{
    setNumber(number+1)
}
const Button = ({children}:Props)=>{
    const [number,setNumber] = useState(0)
    return (
        <>
            <button type="button" className="btn btn-primary" onClick={()=>click(setNumber,number)}>{children}</button>
            <p>{number}</p>
        </>
    )
}


export default Button