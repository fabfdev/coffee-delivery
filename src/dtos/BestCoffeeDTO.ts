import { SvgProps } from "react-native-svg";

export type BestCoffeeDTO = {
  id: number;
  title: string;
  description: string;
  image: React.FC<SvgProps>;
  price: string;
  tag: string;
};
