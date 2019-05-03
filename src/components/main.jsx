import React from 'react';
import Pipeline from './pipeline';
import MyImage from '../images/img.jpg';


const styles = {
    'main': {
        backgroundImage: `url(${MyImage})`,
        textAlign: 'center',
        fontFamily: 'Arial',
        //backgroundImage: "url('')",
        //backgroundColor: 'white',
        height: '1500px', 
        padding: '1px',
        
        backgroundPosition: 'center',
        backgroundPepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: 'white',
    }
}


const MainComponent = (props) => {
    return (
        <div style={styles.main}>
            <Pipeline/>
        </div>
    )
};

export default MainComponent;