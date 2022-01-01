const Input = ({ placeholder, onChange, value, style }) => {
  return (
    <input
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      style={{
        border: "none",
        backgroundColor: "#333333",
        padding: 10,
        fontSize: 15,
        color: "white",
        marginTop: 15,
        outline: "none",
        borderRadius: 3,
        height: 30,
        fontFamily: "DM Sans",
        ...style,
      }}
    />
  );
};

export { Input };
