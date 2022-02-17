import HeroFullPage from "../components/HeroFullPage";

function About(){
    return(
        <div>
            <HeroFullPage imageUrl={content.imageUrl} mainText={content.mainText} secondText={content.secondText}/>
            <div className="p-20 max-w-3xl mx-auto flex gap-8 flex-col flex-wrap">
                <h1 className="text-4xl font-semibold">Nama Aplikasi</h1>
                {' '}
                <h2 className="text-2xl font-medium">Nama aplikasi ini adalah nblog. diambil dari Nature dan Blog.</h2>
                {' '}
                <h1 className="text-4xl font-semibold">Latar Belakang</h1>
                {' '}
                <h2 className="text-2xl font-medium">Latar belakang dibuatnya aplikasi ini adalah seiring berkembangnya zaman, semakin mudah untuk mempublikasikan artikel-artikel tentang lingkungan. kemajuan industri tidak hanya mempermudah organisasi laba namun juga organisasi nirlaba.</h2>
                {' '}
                <h1 className="text-4xl font-semibold">Tim Kami</h1>
                {' '}
                <h2 className="text-2xl font-medium">Elshe Ervina Angely, Mas Zul, Rafiqi Rachmat</h2>
            </div>
        </div>
    )
}

const content = {
    mainText : "About Us",
    secondText : "Carry dong, Kak!",
    imageUrl : "https://images.unsplash.com/photo-1596079890744-c1a0462d0975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&w=2000&q=100"
}
export default About;