import '../../App.css'

const JustifyContent = () => {
    return ( <> 
        <strong>Justify content is used to align flex items along the main axis.</strong>

     <div className="each">
    <h5 class="heading">justify-content:flex-start</h5>
    <div className="flex-start">
    <p>Item 1</p>
    <p>Item 2</p>
    <p>Item 3 </p>
    <p>Item 4 </p>
    </div>
    </div>

    <div className="each">
    <h5 class="heading">justify-content:flex-end</h5>
    <div className="flex-end">
    <p>Item 1</p>
    <p>Item 2</p>
    <p>Item 3 </p>
    <p>Item 4 </p>
    </div>
    </div>
    <div className="each">
    <h5 class="heading">flex-direction:column &  justify-content:center</h5>
    <div className="column column center">
    <p>Item 1</p>
    <p>Item 2</p>
    <p>Item 3</p>
    <p>Item 4</p>
    </div>
    </div>

    <div className="each">
    <h5 class="heading">flex-direction:column &  justify-content:space-between</h5>
    <div className="column column space-between">
    <p>Item 1</p>
    <p>Item 2</p>
    <p>Item 3</p>
    <p>Item 4</p>
    </div>
    </div>

    <div className="each">
    <h5 class="heading">justify-content:center</h5>
    <div className="center">
    <p>Item 1</p>
    <p>Item 2</p>
    <p>Item 3 </p>
    <p>Item 4 </p>
    </div>
    </div>

    <div className="each">
    <h5 class="heading">justify-content:space-around</h5>
    <div className="space-around">
    <p>Item 1</p>
    <p>Item 2</p>
    <p>Item 3 </p>
    <p>Item 4 </p>
    </div>
    </div>


    <div className="each">
    <h5 class="heading">justify-content:space-evenly</h5>
    <div className="space-evenly">
    <p>Item 1</p>
    <p>Item 2</p>
    <p>Item 3 </p>
    <p>Item 4 </p>
    </div>
    </div>

    <div className="each">
    <h5 class="heading">justify-content:space-between</h5>
    <div className="space-between">
    <p>Item 1</p>
    <p>Item 2</p>
    <p>Item 3 </p>
    <p>Item 4 </p>
    </div>
    </div>

    <div className="each">
    <h5 class="heading">justify-content:initial</h5>
    <div className="initial">
    <p>Item 1</p>
    <p>Item 2</p>
    <p>Item 3 </p>
    <p>Item 4 </p>
    </div>
    </div>


        </> );
}
 
export default JustifyContent;