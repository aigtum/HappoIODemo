import React from 'react';
import Pipeline from './pipeline';
import Readme from './readme';

const styles = {
    'main': {
        textAlign: 'center',
        fontFamily: 'Arial',
        //backgroundImage: "url('')",
        backgroundColor: 'blue',
        width: '70%', 
        padding: '1px',
        margin: 'auto',  
        backgroundPosition: 'center',
        backgroundPepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: 'black',
        boxShadow: '0px 0px 0px 2px white inset'
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