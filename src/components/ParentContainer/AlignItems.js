import '../../App.css'

const AlignItems = () => {
    return ( <>
        <strong>Align Items is used to align flex items along the cross axis.</strong>
     
        <div className="each">
    <h5 class="heading">align-items:flex-start</h5>
    <div className="align-flex-start">
    <p>Item 1</p>
    <p>Item 2</p>
    <p>Item 3 </p>
    <p>Item 4 </p>
    </div>
    </div>

    <div className="each">
    <h5 class="heading">align-items:flex-end</h5>
    <div className="align-flex-end">
    <p>Item 1</p>
    <p>Item 2</p>
    <p>Item 3 </p>
    <p>Item 4 </p>
    </div>
    </div>


    <div className="each">
    <h5 class="heading">align-items:center</h5>
    <div className="align-center">
    <p>Item 1</p>
    <p>Item 2</p>
    <p>Item 3 </p>
    <p>Item 4 </p>
    </div>
    </div>

    <div className="each">
    <h5 class="heading">align-items:stretch</h5>
    <div className="align-stretch">
    <p>Item 1</p>
    <p>Item 2</p>
    <p>Item 3 </p>
    <p>Item 4 </p>
    </div>
    </div>

    <div className="each">
    <h5 class="heading">align-items:baseline</h5>
    <div className="align-baseline">
    <p style={{fontSize:"3rem"}}>Item 1</p>
    <p style={{fontSize:"0.8rem"}}>Item 2</p>
    <p style={{fontSize:"1rem"}}>Item 3 </p>
    <p style={{fontSize:"4rem"}} >Item 4 </p>
    </div>
    </div>
        </>  );
}
 
export default AlignItems;