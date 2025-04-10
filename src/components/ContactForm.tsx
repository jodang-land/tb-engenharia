import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  date: z.date().optional(),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const selectedDate = watch("date");

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    reset();
    // In a real application, you would send this data to your backend
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-backgroundColorLight rounded-xl shadow-md">
      {isSubmitted ? (
        <div className="text-center py-8">
          <h3 className="text-2xl font-bold text-mainColor mb-2">Thank You!</h3>
          <p className="text-mainColorLight mb-4">
            Seu agendamento foi enviado com sucesso. Nossa equipe entrará em
            contato com você em breve para confirmar os detalhes.
          </p>
          <Button onClick={() => setIsSubmitted(false)}>
            Solicitar Novo Agendamento
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <h2 className="text-2xl font-bold text-center text-mainColor mb-6">
            Solicitar Agendamento
          </h2>

          <div className="space-y-2">
            <Label className="text-mainColorLight" htmlFor="name">
              Nome completo
            </Label>
            <Input
              id="name"
              placeholder="Nome completo"
              {...register("name")}
              className={errors.name ? "border-red-500" : ""}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label className="text-mainColorLight" htmlFor="email">
              E-mail
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="E-mail"
              {...register("email")}
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label className="text-mainColorLight" htmlFor="phone">
              Número de telefone
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(99) 9 9999-9999"
              {...register("phone")}
              className={errors.phone ? "border-red-500" : ""}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label className="text-mainColorLight" htmlFor="date">
              Data de preferência
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !selectedDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {selectedDate ? (
                    format(selectedDate, "PPP")
                  ) : (
                    <span>Selecione a data</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => setValue("date", date)}
                  initialFocus
                  disabled={(date) => date < new Date()}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label className="text-mainColorLight" htmlFor="message">
              Mensagem
            </Label>
            <Textarea
              id="message"
              placeholder="Escreva sua mensagem aqui..."
              rows={4}
              {...register("message")}
              className={errors.message ? "border-red-500" : ""}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-mainColor hover:bg-mainColorLight"
          >
            Enviar
          </Button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
