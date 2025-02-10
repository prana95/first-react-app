import { ReactNode } from "react"

interface Props{
    children:ReactNode //or children:string
    color?: 'primary' | 'secondary' | 'danger'
    onClick:()=>void
}


const Button3 = ({children,color,onClick}:Props)=>{

    return(
        <>

            <button type="button" className={'btn btn-'+color} onClick={onClick}>{children}</button>
        </>
    )
}

export default Button3