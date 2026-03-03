interface AideraLogoProps {
  className?: string;
  size?: number;
}

const AideraLogo = ({ className = "", size = 28 }: AideraLogoProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Outer protective circle */}
    <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2.5" opacity="0.15" />
    {/* Medical cross merged with neural network */}
    <rect x="27" y="16" width="10" height="32" rx="3" fill="currentColor" opacity="0.9" />
    <rect x="16" y="27" width="32" height="10" rx="3" fill="currentColor" opacity="0.9" />
    {/* Neural nodes at cross endpoints */}
    <circle cx="32" cy="12" r="3" fill="currentColor" opacity="0.5" />
    <circle cx="32" cy="52" r="3" fill="currentColor" opacity="0.5" />
    <circle cx="12" cy="32" r="3" fill="currentColor" opacity="0.5" />
    <circle cx="52" cy="32" r="3" fill="currentColor" opacity="0.5" />
    {/* Diagonal neural connections */}
    <line x1="17" y1="17" x2="27" y2="27" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
    <line x1="47" y1="17" x2="37" y2="27" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
    <line x1="17" y1="47" x2="27" y2="37" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
    <line x1="47" y1="47" x2="37" y2="37" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
    {/* Corner neural nodes */}
    <circle cx="15" cy="15" r="2.5" fill="currentColor" opacity="0.35" />
    <circle cx="49" cy="15" r="2.5" fill="currentColor" opacity="0.35" />
    <circle cx="15" cy="49" r="2.5" fill="currentColor" opacity="0.35" />
    <circle cx="49" cy="49" r="2.5" fill="currentColor" opacity="0.35" />
  </svg>
);

export default AideraLogo;
