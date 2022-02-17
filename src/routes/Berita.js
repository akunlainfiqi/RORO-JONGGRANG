import Article from '../components/Article';
import Carousel from '../components/CardCarousle';
import HeroFullPage from '../components/HeroFullPage';

function Berita(props){
    return(
        <div>
            <HeroFullPage imageUrl={ props.imageUrl } mainText={props.mainText} secondText={props.secondText}/>
            <Article title={ firstContent.title } article={ firstContent.content } image={ firstContent.image }/>
            <Article kanan="1" title={ secondContent.title } article={ secondContent.content } image={ secondContent.image }/>
            <Carousel></Carousel>
        </div>
    )
}

const firstContent = {
    title: 'Ad eos saepe lucilius, noster postulant philosophia ea usu, qui dicta sadipscing te.',
    content: 'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum. Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum. Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.',
    image: 'https://images.unsplash.com/photo-1589705320079-4fd380c4e9f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=100',
  }
  const secondContent = {
    title: 'Ad eos saepe lucilius, noster postulant philosophia ea usu, qui dicta sadipscing te.',
    content: 'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum. Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum. Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.',
    image: 'https://images.unsplash.com/photo-1573662461441-ec01d37b3855?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  }

export default Berita;