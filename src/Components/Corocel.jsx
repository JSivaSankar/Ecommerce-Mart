import Carousel from 'react-bootstrap/Carousel';
import { SliderData } from "./Products";
function UncontrolledExample() {
    
    return (
        <Carousel id='cd_dec'>
            {
                SliderData.map(item => (
                    <Carousel.Item>
                        <div key={item.id} className='data'>
                            <div>
                                <h1>{item.title}</h1>
                                <p>{item.desc}</p>
                                <button className="Cu_btn">Visit Colections</button>
                            </div>
                            <div>
                                <img src={item.cover} alt="hi" />
                            </div>
                        </div>
                    </Carousel.Item>
                )
                )
            }
        </Carousel>
    );
}

export default UncontrolledExample;


