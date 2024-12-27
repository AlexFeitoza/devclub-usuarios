import { Button } from "./styles"


function DefautButton({children, ...props}){
// ... = spread operator no javascript
    return(
        
            <Button {...props}>{children}</Button>
        
    )
}

export default DefautButton