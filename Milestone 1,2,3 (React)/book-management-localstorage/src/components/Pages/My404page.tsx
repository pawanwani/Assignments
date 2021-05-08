import React from 'react'
import LottieAnimation from '../Lottie/Lottie';
import Error from '../Lottie/42752-404-error.json';

interface Props {
    
}

const My404page  = (props: Props) => {
    return (
        <div className="lottie-animation">
            <LottieAnimation lotti={Error} height={400} width={400} />
            <h1 className="welcome-text">Page Not Found</h1>
        </div>
    )
}

export default My404page
