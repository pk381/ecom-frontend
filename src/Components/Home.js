import Carousel from './Carousel/Carousel'
import Products from './Products/Products';

import one from './Assets/1.jpg';
import two from './Assets/2.jpg';
import three from './Assets/3.jpg';

function Home(){
    return(

        <div>
            <Carousel>
                <img src={one} alt="" />
                <img src={two} alt="" />
                <img src={three} alt="" />
            </Carousel>
            <Products></Products>
        </div>

    );
}

export default Home;