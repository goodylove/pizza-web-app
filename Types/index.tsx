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
