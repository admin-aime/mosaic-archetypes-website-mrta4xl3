import { Link } from 'react-router-dom';

type ButtonVariant = 'black' | 'gold' | 'white';

interface ButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
}

export function Button({
  variant = 'black',
  children,
  href,
  onClick,
  type = 'button',
  className = '',
}: ButtonProps) {
  const classes = `btn btn--on-${variant} ${className}`.trim();

  if (href) {
    if (href.startsWith('#')) {
      return (
        <a href={href} className={classes} onClick={onClick}>
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
