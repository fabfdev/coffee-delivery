import { SvgProps } from "react-native-svg";

export type CoffeeDTO = {
  title: string;
  data: CoffeeItemDTO[];
};

export type CoffeeItemDTO = {
  id: number;
  tag: string;
  title: string;
  description: string;
  price: string;
  image: React.FC<SvgProps>;
};
