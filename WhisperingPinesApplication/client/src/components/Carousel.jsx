import CarouselCSS from './Carousel.module.css';

const Carousel = () => {
    /*
        Currently just going to place three cover images
        Once the MVP is up I will convert this into a proper Carousel with anchors that when
        clicked take you to the book in the catalog page
    */
    return (
        <div>
            <img src="https://whispering-pines-images.s3.amazonaws.com/book-covers/Christmas_In_Minnesota.jpg" alt="Christmas In Minnesota Cover" />
            <img src="https://whispering-pines-images.s3.amazonaws.com/book-covers/Nickel_And_Dimed.jpg" alt="Nickel and Dimed Cover" />
            <img src="https://whispering-pines-images.s3.amazonaws.com/book-covers/Tuscany_In_Mind.jpg" alt="Tuscany in Mind Cover" />
        </div>
    )
}

export default Carousel;