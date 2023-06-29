import { Merriweather, Montserrat, Nova_Round } from "next/font/google";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: '400',
  display: "swap" 
});

const nova_round = Nova_Round({ 
  subsets: ["latin"],
  weight: '400',
  display: "swap"
});

export { montserrat, nova_round };
