import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  avatar?: string;
  rating: number;
  text: string;
}

interface TestimonialCarouselProps {
  testimonials?: Testimonial[];
}

const TestimonialCarousel = ({
  testimonials = defaultTestimonials,
}: TestimonialCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Carousel className="w-full">
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id + "a"}>
              <Card className="border-none shadow-sm bg-backgroundColorStrong">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <Avatar className="h-16 w-16 mb-4">
                    <AvatarImage
                      src={
                        testimonial.avatar ||
                        `https://api.dicebear.com/7.x/avataaars/svg?seed=${testimonial.name}`
                      }
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-mainColor font-semibold mb-2">
                    {testimonial.name}
                  </h3>
                  <div className="flex mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-mainColorLight italic">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center align-center mt-8">
          <CarouselPrevious className="relative static mr-4 bg-backgroundColorStrong border-backgroundColorStrong hover:bg-backgroundColorMedium [&>*]:text-mainColor" />
          <CarouselDots className="flex space-x-2 items-center" />
          <CarouselNext className="relative static ml-4 bg-backgroundColorStrong border-backgroundColorStrong hover:bg-backgroundColorMedium [&>*]:text-mainColor" />
        </div>
      </Carousel>
    </div>
  );
};

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    rating: 5,
    text: "Dr. Smith transformed my smile completely! The entire staff was friendly and made me feel comfortable throughout my treatment.",
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    rating: 4,
    text: "I've been coming to this dental practice for years. They're always professional, on time, and make dental visits as pleasant as possible.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    rating: 5,
    text: "The care I received was exceptional. Dr. Smith took the time to explain everything and address all my concerns. Highly recommend!",
  },
  {
    id: 4,
    name: "David Wilson",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
    rating: 5,
    text: "Best dental experience I've ever had. The office is modern, clean, and the staff truly cares about patient comfort and satisfaction.",
  },
];

export default TestimonialCarousel;
