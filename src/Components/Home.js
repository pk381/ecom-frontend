import one from './Assets/1.png';
import two from './Assets/2.png';
import three from './Assets/3.png';

import Carousel from './Carousel/Carousel'
import Products from './Products/Products';
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