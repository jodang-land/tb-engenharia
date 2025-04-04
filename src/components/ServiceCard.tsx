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

const ServiceCard = ({
  icon,
  title,
  description,
  className,
}: ServiceCardProps) => {
  return (
    <Card
      className={cn(
        "w-full max-w-[350px] h-[300px] transition-all duration-300 hover:shadow-lg bg-backgroundColorStrong border-none",
        className
      )}
    >
      <CardHeader className="flex flex-col items-center text-center pb-2">
        <div className="p-6 text-mainColor">{icon}</div>
        <CardTitle className="text-xl font-bold text-mainColor">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center text-base text-mainColor">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
