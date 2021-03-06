import '../../App.css'
import {Link} from 'react-router-dom'

const Container = () => {

    return ( 
        <>
    <div className="container">
    <h3>Parent Elements or Flex Container Properties </h3>
    <Link style={{color:"white",textDecoration:"none"}} to='/flexdirection' ><p>Flex-direction</p> </Link>
    
    <Link style={{color:"white",textDecoration:"none"}} to='/justifycontent' ><p>Justify-content</p> </Link>
    
    <Link style={{color:"white",textDecoration:"none"}} to='/alignitems' ><p>Align-items</p> </Link>

    <Link style={{color:"white",textDecoration:"none"}} to='/flexwrap' ><p>Flex-wrap</p> </Link>
    <Link style={{color:"white",textDecoration:"none"}} to='/aligncontent' ><p>Align-content</p> </Link>
    </div>

   
    <div className="container">
    <h3>Child Elements or Flex Items Properties </h3>
   {/* <Link style={{color:"white",textDecoration:"none"}} to='/flexdirection' ><p>Flex-direction</p> </Link>
    
    <Link style={{color:"white",textDecoration:"none"}} to='/justifycontent' ><p>Justify-content</p> </Link>
    
    <Link style={{color:"white",textDecoration:"none"}} to='/alignitems' ><p>Align-items</p> </Link>

    <Link style={{color:"white",textDecoration:"none"}} to='/flexwrap' ><p>Flex-wrap</p> </Link>

    */}
    </div>
    </>
      );
}
 
export default Container;