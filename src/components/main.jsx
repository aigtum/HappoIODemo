import React from 'react';
import Pipeline from './pipeline';


const styles = {
    'main': {
        textAlign: 'center',
        fontFamily: 'Arial',
        //backgroundImage: "url('')",
        //backgroundColor: 'white',
        height: '1500px', 
        padding: '1px',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundPepeat: 'no-repeat',
        backgroundSize: 'cover',
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