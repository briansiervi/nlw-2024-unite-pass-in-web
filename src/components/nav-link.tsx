import { ComponentProps } from "react";

interface NavLinkProps extends ComponentProps<"a"> {
  children: string;
  selected: boolean;
}

export function NavLink(props: NavLinkProps) {
  const classNameSelected: string = "font-medium text-sm text-zinc-300";
  const classNameUnSelected: string = "font-medium text-sm text-zinc-500";

  return (
    <a
      {...props}
      className={props.selected ? classNameSelected : classNameUnSelected}
    >
      {props.children}
    </a>
  );
}
