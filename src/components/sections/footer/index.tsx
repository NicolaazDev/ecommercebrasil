import {
  FacebookIcon,
  InstagramIcon,
  PhoneIcon,
  YoutubeIcon as YouTubeIcon,
} from "lucide-react";

import { SiWhatsapp } from "react-icons/si";
import { Separator } from "@/components/ui/separator";

export default function FooterComponent() {
  return (
    <footer className="bg-[#f5f5f5] px-6 py-12 w-full">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col md:w-1/3">
          <h2 className="text-lg font-semibold mb-4">Links uteis</h2>
          <ul>
            <li>
              <a
                href="https://www.apple.com/br/shop"
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-2 text-sm text-gray-600 hover:text-gray-900"
              >
                Apple.com.br
              </a>
            </li>
            <li>
              <a
                href="https://www.apple.com/br/support"
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-2 text-sm text-gray-600 hover:text-gray-900"
              >
                Suporte
              </a>
            </li>
            <li>
              <a
                href="https://www.apple.com/br/retail"
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-2 text-sm text-gray-600 hover:text-gray-900"
              >
                Loja Online
              </a>
            </li>
            <li>
              <a
                href="https://www.apple.com/br/shop/goto/mac"
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-2 text-sm text-gray-600 hover:text-gray-900"
              >
                Mac
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:w-1/3">
          <h2 className="text-lg font-semibold mb-4">Sobre</h2>
          <ul>
            <li>
              <a
                href="https://www.apple.com/br/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-2 text-sm text-gray-600 hover:text-gray-900"
              >
                Privacidade
              </a>
            </li>
            <li>
              <a
                href="https://www.apple.com/br/termos-de-uso/"
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-2 text-sm text-gray-600 hover:text-gray-900"
              >
                Termos de Uso
              </a>
            </li>
            <li>
              <a
                href="https://www.apple.com/br/ajuda/contact/"
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-2 text-sm text-gray-600 hover:text-gray-900"
              >
                Contato
              </a>
            </li>
            <li>
              <a
                href="https://www.apple.com/br/sitemap/"
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-2 text-sm text-gray-600 hover:text-gray-900"
              >
                Mapa do Site
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:w-1/3 items-start">
          <h2 className="text-lg font-semibold mb-4">Contato</h2>
          <div className="flex items-center justify-center">
            <a
              href="tel:+15555555555"
              className="w-11 h-11 mr-2 transition bg-[#fca85a] rounded-[9px] flex items-center justify-center text-[#eeeeee] hover:text-gray-900"
            >
              <PhoneIcon size={21} />
            </a>
            <p className="text-sm text-gray-600">
              Segunda a sexta das 08h às 19h <br />
              Sábados das 08h às 17h
            </p>
          </div>
          <div className="flex items-center justify-center mt-4">
            <a
              href="https://wa.me/15555555555"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 mr-2 transition bg-green-400 rounded-[9px] flex items-center justify-center text-[#eeeeee] hover:text-gray-900"
            >
              <SiWhatsapp size={21} />
            </a>
            <p className="text-sm text-gray-600">Atendimento via WhatsApp</p>
          </div>
        </div>
      </div>

      <div className="mt-28 max-w-screen-2xl my-0 mx-auto">
        <div className=" max-w-screen-2xl flex flex-col md:flex-row justify-center items-center mt-4">
          <p className="text-center font-bold text-[20px] text-gray-600">
            Formas de pagamento:
          </p>

          <div className="flex flex-row justify-center items-center mt-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Mastercard_logo.svg"
              alt="mastercard"
              className="w-24 max-h-[40px]"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Visa_2021.svg"
              alt="visa"
              className="ml-2 w-24 max-h-[50px] object-contain"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg"
              alt="americanexpress"
              className="ml-2 w-24 max-h-[50px] object-contain"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/89/Hipercard_logo.svg"
              alt="hipercard"
              className="ml-2 w-24 max-h-[50px] object-contain"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo%E2%80%94pix_powered_by_Banco_Central_%28Brazil%2C_2020%29.svg"
              alt="pix"
              className="ml-2 w-24 max-h-[50px] object-contain"
            />
            <img
              src="https://softsystem.com.br/softsystem/imagensPublicacao/64/101_960x250.jpg"
              alt="bolete"
              className="ml-2 w-24 max-h-[50px] object-contain"
            />
          </div>
        </div>
        <Separator className="mt-5 h-[1px] bg-slate-300" />
        <div className="mt-9 max-w-screen-2xl flex flex-col items-center justify-center">
          <p className="text-center max-w-[70%] text-[12px] text-gray-600">
            Preços e condições exclusivos para o site www.iplace.com.br e para o
            televendas, podendo sofrer alterações sem prévia notificação.
            iplace.com.br é uma empresa Global Distribuição de Bens de Consumo
            Ltda, rua Ioneji Matsubayashi, nº 1351, sala 002 / São Paulo - SP /
            CEP 08260-050 CNPJ 89.237.911/0162-25 / Telefone: 0800 644 2255 ou
            4020-2595. iPlace uma empresa do Grupo Herval (CNPJ:
            89.237.911/0001-40)
          </p>
        </div>
      </div>
    </footer>
  );
}
