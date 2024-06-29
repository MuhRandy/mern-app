type LabelProps = {
  children: string;
};

const Label = ({ children }: LabelProps) => {
  return <label className="block">{children}</label>;
};

export default Label;
