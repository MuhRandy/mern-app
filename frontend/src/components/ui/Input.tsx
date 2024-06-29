const Input = ({ ...prop }) => {
  return (
    <input
      className="block p-[10px] mb-5 w-full border-[#ddd] border-[1px] border-solid rounded box-border"
      {...prop}
    />
  );
};

export default Input;
