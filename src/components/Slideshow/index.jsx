import { useState } from "react"
import rightArrow from '../../assets/images/arrow-right.png'
import leftArrow from '../../assets/images/arrow-left.png'
import './style.scss'


function Slideshow({images}) {

    const [currentIndex, setCurrentIndex] = useState(0)

    const previousSlide = () => {
        const lastIndex = images.length - 1
        const resetIndex = currentIndex === 0
        const index = resetIndex ? lastIndex : currentIndex - 1
        setCurrentIndex(index)
    }

    const nextSlide = () => {
        const lastIndex = images.length - 1
        const resetIndex = currentIndex === lastIndex
        const index = resetIndex ? 0 : currentIndex + 1
        setCurrentIndex(index)
    }

    if (images.length === 1) {
        return (
            <div className="slideshow-container single-image">
                <img src={images[0]} alt="Slide" className="slide-image" />
            </div>
        )
    }

    return (
        <div className="slideshow-container">
            <img src={images[currentIndex]} alt="Slide" className="slide-image" />
            <div className="navigation">
                <img src={leftArrow} alt="Previous" onClick={previousSlide} className="arrow left-arrow" />
                <img src={rightArrow} alt="Next" onClick={nextSlide} className="arrow right-arrow" />
            </div>
            <div className="slide-number">
                {currentIndex + 1} / {images.length}
            </div>
        </div>
    );


}

export default Slideshow