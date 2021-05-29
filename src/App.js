
import './App.css';

function App() {
  return (
    <>
     <h1>hello</h1>
    <div className="each">
    <h5 class="heading">flex-direction:row</h5>
    <div className="row">
    <p>Item 1</p>
    <p >Item 2</p>
    <p>Item 3 </p>
    <p>Item 4 </p>
    </div>
    </div>


    <div className="each">
    <h5 class="heading">flex-direction:row-reverse</h5>
    <div className="row-reverse">
    <p>Item 1</p>
    <p >Item 2</p>
    <p>Item 3 </p>
    <p>Item 4 </p>
    </div>
    </div>

    <div className="each">
    <h5 class="heading">flex-direction:column</h5>
    <div className="column">
    <p>Item 1</p>
    <p >Item 2</p>
    <p>Item 3 </p>
    <p>Item 4 </p>
    </div>
    </div>

    <div className="each">
    <h5 class="heading">flex-direction:column-reverse</h5>
    <div className="column-reverse">
    <p>Item 1</p>
    <p >Item 2</p>
    <p>Item 3 </p>
    <p>Item 4 </p>
    </div>
    </div>



    </>
  );
}

export default App;
