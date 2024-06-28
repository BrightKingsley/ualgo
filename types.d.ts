declare module "*.json";

interface svgProps {
  className?: string;
}

interface formData {
  email: string;
  password: string | number;
  firstName: string;
  lastName: string;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  disabled?: boolean;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: React.InputHTMLAttributes<HTMLInputElement>["type"];
}

interface SideNavigationLink {
  href: string;
  linkText: string;
  leading: React.FC<SVGProps<SVGElement>>;
}

type Tag = {
  id: string;
  name: string;
  owner: string;
};

type Folder = {
  id: string;
  name: string;
  owner: string;
};

type CheckValue = { checked: boolean; label: string };

interface Content {
  type: "heading" | "image" | "paragraph" | "video" | "file" | "check" | "link";
  value: File | string | CheckValue; //other image types
}

interface Product {
  name: string;
  shortName: string;
  desc: string;
  shortDesc: string;
  label: string;
  subLabel: string;
  price: { usd: number; token: number };
  logo: string;
  images: string[];
}

interface TypographyProps extends React.HTMLProps<HTMLHeadingElement> {
  children?: React.ReactNode;
  className?: string;
}

interface notesPreviewData {
  title: string;
  subtitle: string;
  date: string;
  tag: string;
  favourite: boolean;
}

type MenuItemType = {
  icon: React.ReactNode;
  label: string;
  href?: string;
  type?: "button" | "link";
  action?(
    options?: { handleLoading: (loadingState: boolean) => void },
    ...args: any
  ): void;
};

type APIResponse<T = any> = {
  success: boolean;
  message: string;
  data?: T;
};

type User = {
  uid: string;
  displayName: string;
  email: string;
  photo: string;
  auth_token?: string;
};

type AuthState = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading?: boolean;
  error?: string | null;
};
