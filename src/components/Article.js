function Article(props){
    return(
        <div className="md:p-4 grid grid-cols-1 lg:grid-cols-2 md:gap-4 max-w-7xl mx-auto items-center md:px-0">
            <div className={ "p-4 "+(props.kanan ? "lg:order-first" : "lg:order-last")}>
                <h1 className={"text-xl font-semibold py-4 tracking-tight " + (props.kanan ? "md:text-left" : "md:text-right")}>
                    { props.title }
                </h1>
                <article className="text-justify py-4 text-gray-800">
                    { props.article }
                </article>
            </div>
            <div className="py-4">
            <img
                className="h-64 w-full object-cover md:h-full md:max-h-96"
                src={ props.image }
                alt=""    
                />
            </div>
        </div>
    )
}

export default Article;