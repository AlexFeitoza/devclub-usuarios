import PropTypes from "prop-types"
import { Button } from "./styles"


function DefautButton({children, theme, ...props}){
// ... = spread operator no javascript
    return(
        
            <Button {...props} theme={theme}>{children}</Button>
        
    )
}

DefautButton.propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.string
}


export default DefautButton