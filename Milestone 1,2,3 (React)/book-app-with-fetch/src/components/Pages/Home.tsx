import React from 'react'
import LottieAnimation from '../Lottie/Lottie';
import home from '../Lottie/12234-books.json';

interface Props {
    
}

const Home = (props: Props) => {
    return (
        <div className="lottie-animation">
            <LottieAnimation lotti={home} height={300} width={300} />
            <h1 className="welcome-text">Welcome!</h1>
        </div>
    )
}

export default Home
