import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PaymentsForm() {
  return (
    <Sheet modal>
      <SheetTrigger asChild>
        <Button
          type="button"
          className=" text-white px-4 py-2 rounded h-[60px] w-full"
        >
          Mostrar formas de pagamento
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="z-[9999999] space-y-5">
        <SheetClose />
        <Card className="w-full">
          <CardHeader>
            <CardTitle>PIX</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Pagamento instantâneo e seguro com o seu app no celular</p>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Débito</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Pagamento com débito em sua conta corrente bancária</p>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Crédito</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Pagamento com crédito em seu cartão de crédito</p>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Boleto</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Pagamento com boleto bancário</p>
          </CardContent>
        </Card>
      </SheetContent>
    </Sheet>
  );
}
