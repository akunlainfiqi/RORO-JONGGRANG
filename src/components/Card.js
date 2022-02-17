function Card(props){
    return(
        <div className="flex flex-col lg:flex-row">
            <img
                className="max-h-48 w-full object-cover lg:max-w-sm lg:pr-4"
                src={ props.image }
                alt=""
                />
            <div className="text-left py-4 lg:py-0">
                <h1 className="font-semibold text-xl">{ props.title }</h1>
                <p>{ props.description }</p>
            </div>
        </div>
    )
}

export default Card;