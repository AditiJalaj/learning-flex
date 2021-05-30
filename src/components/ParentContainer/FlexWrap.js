import '../../App.css'
const FlexWrap = () => {
    return ( <>
        <strong>The flex-wrap property specifies whether the flex items should wrap or not.</strong>
        
     <div className="each">
    <h5 class="heading">flex-wrap: no value given</h5>
    <div className="flex-start">
    <p>Item 1</p>
    <p>Item 2</p>
    <p>Item 3 </p>
    <p>Item 4 </p>
    <p>Item 5</p>
    <p>Item 6</p>
    <p>Item 7 </p>
    <p>Item 8 </p>
    <p>Item 9</p>
    <p>Item 10</p>
    <p>Item 11 </p>
    <p>Item 12 </p>
    
    </div>
    </div>

    <div className="each">
    <h5 class="heading">flex-wrap:nowrap</h5>
    <div className="nowrap">
    <p>Item 1</p>
    <p>Item 2</p>
    <p>Item 3 </p>
    <p>Item 4 </p>
    <p>Item 5</p>
    <p>Item 6</p>
    <p>Item 7 </p>
    <p>Item 8 </p>
    <p>Item 9</p>
    <p>Item 10</p>
    <p>Item 11 </p>
    <p>Item 12 </p>
    
    </div>
    </div>


    <div className="each">
    <h5 class="heading">flex-wrap:wrap</h5>
    <div className="wrap">
    <p>Item 1</p>
    <p>Item 2</p>
    <p>Item 3 </p>
    <p>Item 4 </p>
    <p>Item 5</p>
    <p>Item 6</p>
    <p>Item 7</p>
    <p>Item 8</p>
    <p>Item 9</p>
    <p>Item 10</p>
    <p>Item 11</p>
    <p>Item 12</p>
    </div>
    </div>

    
    <div className="each">
    <h5 class="heading">flex-direction:column & flex-wrap:wrap</h5>
    <div className="column wrap">
    <p>Item 1</p>
    <p>Item 2</p>
    <p>Item 3 </p>
    <p>Item 4 </p>
    <p>Item 5</p>
    <p>Item 6</p>
    <p>Item 7</p>
    <p>Item 8</p>
    <p>Item 9</p>
    <p>Item 10</p>
    <p>Item 11</p>
    <p>Item 12</p>
    </div>
    </div>


    <div className="each">
    <h5 class="heading">flex-wrap:wrap-reverse</h5>
    <div className="wrap-reverse">
    <p>Item 1</p>
    <p>Item 2</p>
    <p>Item 3 </p>
    <p>Item 4 </p>
    <p>Item 5</p>
    <p>Item 6</p>
    <p>Item 7</p>
    <p>Item 8</p>
    <p>Item 9</p>
    <p>Item 10</p>
    <p>Item 11</p>
    <p>Item 12</p>
    </div>
    </div>

    <div className="each">
    <h5 class="heading">flex-direction:column & flex-wrap:wrap-reverse</h5>
    <div className="column wrap-reverse">
    <p>Item 1</p>
    <p>Item 2</p>
    <p>Item 3 </p>
    <p>Item 4 </p>
    <p>Item 5</p>
    <p>Item 6</p>
    <p>Item 7</p>
    <p>Item 8</p>
    <p>Item 9</p>
    <p>Item 10</p>
    <p>Item 11</p>
    <p>Item 12</p>
    </div>
    </div>
        
        
        </>
         );
}
 
export default FlexWrap;