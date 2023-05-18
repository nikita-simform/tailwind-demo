import react from 'react';
import './style.css';
import reactLogo from './assets/react.svg';

const ComponentWithoutTailwind = () => {

    return (
        <>
        <div className="tailwind-demo">
            <div className="tailwind-demo-logo-wrapper">
                <img className="tailwind-demo-logo" src={reactLogo} alt="React Logo" />
            </div>
            <div className="tailwind-demo-content">
                <div className="tailwind-demo-title">Welcome to tailwind CSS demo</div>
                <p className="tailwind-demo-message">This is a class without Tailwind CSS</p>
            </div>
        </div>
      </>

    )
}

export default ComponentWithoutTailwind