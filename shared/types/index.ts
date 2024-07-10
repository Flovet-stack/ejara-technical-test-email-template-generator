export type Template = any;

export type SidebarLink = {
  name: string;
  component: () => React.JSX.Element;
};

export type AppTheme = "light" | "dark";
