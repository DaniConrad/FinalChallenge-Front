import { useState } from "react"

export const useResponsive = () =>{

    const [responsive, setResponsive] = useState(false)
    
    const checkViewport = (viewPortWidth) => {
        
        if (window.visualViewport.width <= viewPortWidth) {
            setResponsive(true)
        } else {
            setResponsive(false)
        }
    }

    return{
        checkViewport,
        responsive,
    }
}