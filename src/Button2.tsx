import { Dispatch, SetStateAction, useState } from "react"

interface Props {
    children:string
    color?:'primary' |'secondary' | 'danger'
    onClick:()=> void 
}


//giving default color value to the button
const Button2 = ({children, onClick,color='primary'}:Props)=>{
    
    return (
        <>
            <button type="button" className={'btn btn-' +color} onClick={onClick}>{children}</button>
        </>
    )
}


export default Button2