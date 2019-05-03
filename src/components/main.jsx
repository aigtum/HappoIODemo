import React from 'react';
import Pipeline from './pipeline';
import MyImage from '../images/img.jpg';
import Readme from './readme';

const styles = {
    'main': {
        backgroundImage: `url(${MyImage})`,
        textAlign: 'center',
        fontFamily: 'Arial',
        //backgroundImage: "url('')",
        //backgroundColor: 'white',
        width: '70%', 
        padding: '1px',
        margin: 'auto',  
        backgroundPosition: 'center',
        backgroundPepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: 'black',
    }
}


const MainComponent = (props) => {
    return (
        <div style={styles.main}>
            <Pipeline/>
            <Readme/>
        </div>
    )
};

export default MainComponent;