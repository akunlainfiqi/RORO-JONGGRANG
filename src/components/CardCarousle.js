import Card from "./Card";
import { Link } from 'react-router-dom';

function Carousel(){
    return(
        <div className="p-4 max-w-7xl mx-auto">
            <h1 className="text-xl font-semibold lg:text-left">Artikel Terkini</h1>
            <div className="flex flex-row gap-4 py-4">
            { data.map((item =>(
                <Link key={ item.id } to={ item.to }>
                    <Card key={item.name} title={ item.title } description={ item.description } image={ item.image }/> 
                </Link>
            )))}
            </div>
        </div>
    )
}

const data = [
    {
        title : 'Pembakaran Lahan',
        description : 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
        image : 'https://images.unsplash.com/photo-1602980085374-7e743fff3cc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=100',
        to : "/Pembakaran"
    },{
        title : 'Penggunaan Bahan Bakar Fossil',
        description : 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
        image : 'https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=100',
        to : '/Fossil'
    }
]

export default Carousel;