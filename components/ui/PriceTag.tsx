export default function PriceTag({
  price,
  size = "md",
  tilt = -6,
  variant = "yellow",
}: {
  price: number | string;
  size?: "sm" | "md" | "lg";
  tilt?: number;
  variant?: "yellow" | "orange" | "char";
}) {
  const sizes = {
    sm: "px-2.5 py-1 text-xs rounded-lg",
    md: "px-3.5 py-1.5 text-sm rounded-xl",
    lg: "px-5 py-2.5 text-lg rounded-2xl",
  };

  const variants = {
    yellow: "bg-saucy-yellow text-char",
    orange: "bg-saucy-orange text-cream",
    char: "bg-char text-saucy-yellow",
  };

  return (
    <span
      className={`sticker ${sizes[size]} ${variants[variant]}`}
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      {typeof price === "number" ? `Rs ${price.toLocaleString()}` : price}
    </span>
  );
}
