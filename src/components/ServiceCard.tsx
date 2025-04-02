import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const ServiceCard = (
  { icon, title, description, className }: ServiceCardProps = {
    icon: (
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
        🦷
      </div>
    ),
    title: "Dental Service",
    description:
      "Professional dental care service provided by our experienced team of dentists.",
    className: "",
  }
) => {
  return (
    <Card
      className={cn(
        "w-full max-w-[350px] h-[300px] transition-all duration-300 hover:shadow-lg bg-white",
        className
      )}
    >
      <CardHeader className="flex flex-col items-center text-center pb-2">
        <div className="mb-4">{icon}</div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center text-base">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
