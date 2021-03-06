import React, {useState} from 'react';
import './scroll.scss';

const Scroll = () => {
    const [visible, setVisible] = useState(false);
    const toggleClass = () => {
        if (window.scrollY > 100) {
            setVisible(true);
            document.documentElement.style.scrollBehavior = "smooth";
        } else {
            document.documentElement.style.scrollBehavior = "unset";
            setVisible(false)
        }
    };
    window.addEventListener('scroll', toggleClass);
    return (
        <button className={visible ? 'scroll scroll_visible' : 'scroll'} onClick={() => {
            window.scrollTo(0, 0)

        }}>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M24.448 17.8577C24.6093 18.0189 24.6899 18.2205 24.6899 18.4422C24.6899 18.6639 24.6093 18.8655 24.448 19.0267C24.1256 19.3492 23.6015 19.3492 23.2791 19.0267L13 8.74762L2.72091 19.0267C2.39843 19.3492 1.8744 19.3492 1.55192 19.0267C1.22944 18.7042 1.22944 18.1802 1.55192 17.8577L12.4155 6.99413C12.738 6.67165 13.262 6.67165 13.5845 6.99413L24.448 17.8577Z"
                    fill="white"/>
            </svg>
        </button>
    );
};

export default Scroll;