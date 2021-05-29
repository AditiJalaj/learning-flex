import '../App.css'
import {Link} from 'react-router-dom'

const Container = () => {

    return ( <div className="container">
    <Link style={{color:"white",textDecoration:"none"}} to='/flexdirection' ><p>Flex-direction</p> </Link>
    
    <Link style={{color:"white",textDecoration:"none"}} to='/justifycontent' ><p>Justify-content</p> </Link>
    
    </div>
      );
}
 
export default Container;