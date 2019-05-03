import React from 'react';

const styles = {
    'footer': {
        position: 'inherit',
        clear: 'both',
        fontFamily: 'Concert One',
        padding: '10px',
        left: '0',
        bottom: '0',
        width: '100%',
        backgroundColor: '#282c34',
        color: 'white',
        textAlign: 'center',
    }
}


const Footer = (props) => {
    return (
        <footer style={styles.footer}>
            <p>Demo of the UI Testing Framework [Happo.io]</p>
            <p>Adam Hasselberg and Aigars Tumanis</p>
        </footer>
    )
};

export default Footer;