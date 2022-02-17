import { Link } from 'react-router-dom';

function HeroFullPage(props){
    return(
        <div>
            <Link to="/">
                <div className="absolute font-semibold text-2xl text-white p-4 max-w-4xl mx-auto">🏠 back to home</div>
            </Link>
            <div className="h-screen flex flex-col justify-center" 
            style={{
                backgroundImage : "url("+ props.imageUrl + ")"
            }}>
                <div className="opacity-100 max-w-4xl sm:mx-auto p-8">
                    <h2 className="text-white text-2xl font-semibold">{props.secondText}</h2>
                    <h1 className="text-white text-7xl font-bold">{props.mainText}</h1>
                </div>
            </div>
        </div>
    )
}

export default HeroFullPage;