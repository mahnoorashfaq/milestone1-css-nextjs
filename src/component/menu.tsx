export default function Menu(){
    return(
       <div id="menu">
   <div className="menu-container">
    <h2>Our Menu</h2>
    <div className="box-container">
        <div className="menu-item">
   <div className="menu-img1"></div>
   <p>Biryani</p>
    <button>Order Now</button>
    </div>

    <div className="menu-item">
   <div className="menu-img2"></div>
   <p>Karhai</p>
    <button>Order Now</button>
    </div>

    <div className="menu-item">
   <div className="menu-img3"></div>
   <p>Chicken Tikka</p>
    <button>Order Now</button>
    </div>

    <div className="menu-item">
   <div className="menu-img4"></div>
   <p>Biryani</p>
    <button>Order Now</button>
    </div>
   </div>
   <center>
   <button className="menu-more">More</button>
   </center>
       </div>
       </div>
    )
}