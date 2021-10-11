import React from 'react';
import image1 from "../assets/1.jpg";
import image2 from "../assets/7.jpg";
const Card = () => {
    return(
        <>
        <section className="grid" style={{backgroundColor:"lavender"}}>
            <h3>helloooo</h3>
            <div className="grid-items">
                <div>
                    <img src={image1} alt='' />
                    <h4>flu</h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus, vel sollicitudin pulvinar. Porttitor lobortis arcu interdum neque enim.

                    </p>
                </div>
                <div>
                    <img src={image2} alt='' />
                    <h4>flu</h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus, vel sollicitudin pulvinar. Porttitor lobortis arcu interdum neque enim.

                    </p>
                </div>
                <div>
                    <img src={image1} alt='' />
                    <h4>flu</h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus, vel sollicitudin pulvinar. Porttitor lobortis arcu interdum neque enim.

                    </p>
                </div>
                <div>
                    <img src={image2} alt='' />
                    <h4>flu</h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus, vel sollicitudin pulvinar. Porttitor lobortis arcu interdum neque enim.

                    </p>
                </div>
                <div>
                    <img src={image2} alt='' />
                    <h4>flu</h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus, vel sollicitudin pulvinar. Porttitor lobortis arcu interdum neque enim.

                    </p>
                </div>
                <div>
                    <img src={image2} alt='' />
                    <h4>flu</h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus, vel sollicitudin pulvinar. Porttitor lobortis arcu interdum neque enim.

                    </p>
                </div>
                
               
            </div>
        </section>


        </>
    )
}

export default Card