import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cards } from "@/assets/imgData";


const ImageSlider:React.FC = () => {
 
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full "
    >
      <CarouselContent>
        {cards?.map((img) => (
          <CarouselItem key={img?.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <img src={img?.url} alt={img?.title} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute -top-11 left-[512px] bg-[#171717] border-none" />
      <CarouselNext className="absolute -top-11 right-2 bg-[#171717] border-none" />
    </Carousel>
  );
};

export default ImageSlider;
