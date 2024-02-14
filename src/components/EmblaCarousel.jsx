import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'
import Airforce from '../assets/images/Airforce-removebg-preview.png'
import Navy from '../assets/images/Navy-removebg-preview.png'
import Army from '../assets/images/Army-removebg-preview.png'
import Dhq from '../assets/images/Dhq-removebg-preview.png'
export function EmblaCarousel() {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

	return (
		<div className="embla" ref={emblaRef}>
			<div className="embla__container">
				<div className="embla__slide flex justify-center items-center">
					{" "}
					<img
						alt="example"
						src={Airforce}
					/>
				</div>
				<div className="embla__slide flex justify-center items-center">
					<img
						alt="example"
						src={Army}
					/>
				</div>
				<div className="embla__slide flex justify-center items-center">
					{" "}
					<img
						alt="example"
						src={Navy}
						className="h-30"
					/>
				</div>
                <div className="embla__slide flex justify-center items-center">
					{" "}
					<img
						alt="example"
						src={Dhq}
						className="h-30"
					/>
				</div>
			</div>
		</div>
	);
}
