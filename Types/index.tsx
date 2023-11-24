export interface CustomButtonProps {
  title: string;
  onClick?: () => void;
  className: string;
  icon?: React.ReactElement;
}

export interface NavLinksProps {
  navLink: eachNavLinks[];
  setoggle: (value: boolean) => void;
  toggle: boolean;
}
export interface eachNavLinks {
  name: string;
  path: string;
  active: boolean;
}
export type SubTitleProps = {
  title: string;
  left?: string;
};
export type CLientCardProps = {
  client: {
    img: string;
    name: string;
    text: string;
  };
};

export type ProductProps = {
  name: string;
  price: number;
  img: string;
  id: number;
};

export type ProuctDetailsProps = {
  data: ProductProps;
};
