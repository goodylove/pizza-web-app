export interface CustomButtonProps {
  title: string;
  onClick?: () => void;
  className: string;
  icon?: React.ReactElement;
}

export interface NavLinksProps {
  navLink: eachNavLinks[];
  toggle: (value: boolean) => void;
}
export interface eachNavLinks {
  name: string;
  path: string;
  active: boolean;
}
