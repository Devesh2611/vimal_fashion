import React, { useEffect, useRef, useState  } from 'react';
import './Hero.css'

function Hero() {
    const sliderBarRef = useRef(null);
    const sliderImagesRef = useRef(null);
    const [counter, setCounter] = useState(0);

    const move = () => {
        const sliderImages = sliderImagesRef.current.querySelectorAll('img');
        const circles = sliderBarRef.current.querySelectorAll('.circle');

        sliderImages.forEach((sliderImage) => {
            sliderImage.style.transform = `translateX(-${100 * counter}%)`;
        });

        circles.forEach((circle, index) => {
            circle.style.backgroundColor = '';
            if (index === counter) {
                circle.style.backgroundColor = 'red';
            }
        });
    };

    const handlePrevious = () => {
        const sliderImages = sliderImagesRef.current.querySelectorAll('img');
        if (counter <= 0) {
            setCounter(sliderImages.length - 1);
        } else {
            setCounter(counter - 1);
        }
    };

    const handleNext = () => {
        const sliderImages = sliderImagesRef.current.querySelectorAll('img');
        if (counter >= sliderImages.length - 1) {
            setCounter(0);
        } else {
            setCounter(counter + 1);
        }
    };

    useEffect(() => {
        const circles = sliderBarRef.current.querySelectorAll('.circle');
        const sliderBar = sliderBarRef.current;
        const sliderImages = sliderImagesRef.current.querySelectorAll('img');

        sliderBar.style.width = `${(circles.length * 30) + 10}px`;

        circles.forEach((circle, index) => {
            circle.style.left = `${10 + (index * 30)}px`;
        });

        if (circles[0]) {
            circles[0].style.backgroundColor = 'red';
        }

        sliderImages.forEach((image, index) => {
            image.style.left = `${index * 100}%`;
        });
    }, []);

    useEffect(() => {
        move();
    }, [counter]);

    return (
        <div className="hero">
            <div className="slider-images" ref={sliderImagesRef}>
                <img src="https://images.unsplash.com/photo-1616986491129-3e37cb654c82?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Saree Image"></img>
                <img src="https://images.unsplash.com/photo-1720413390928-7077ba5def3a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Saree Image"></img>
                <img src="https://images.unsplash.com/photo-1717585679395-bbe39b5fb6bc?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Saree Image"></img>
                <img src="https://images.unsplash.com/photo-1616756141603-6d37d5cde2a2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Saree Image"></img>
                <img src="https://images.unsplash.com/photo-1616756351484-798f37bdffa0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Saree Image"></img>
                <img src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Saree Image"></img>
            </div>
            <div className="slider-bar" ref={sliderBarRef}>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
            <div className="previous" onClick={handlePrevious}><i class="fa-solid fa-arrow-left fa-2x"></i></div>
            <div className="next" onClick={handleNext}><i class="fa-solid fa-arrow-right fa-2x"></i></div>
        </div>
    );
}

export default Hero;