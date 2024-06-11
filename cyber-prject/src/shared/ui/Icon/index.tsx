type IconProps = {
  src: string;
  alt: string;
};

export const Icon = ({ src, alt }: IconProps) => {
  return <img src={src} alt={alt} loading={"lazy"} draggable={"false"} />;
};
