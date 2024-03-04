interface ButtonProps {
  onClick?: () => void;
  href?: string;
  children: React.ReactNode;
}

const Button = ({ onClick, href, children }: ButtonProps) => {
  return (
    <a href={href} onClick={onClick}>
      {children}
    </a>
  );
};

export default Button;
