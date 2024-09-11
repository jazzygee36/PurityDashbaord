interface Props {
  width: string;
  type: string;
  label: string;
  placeholder: string;
}

const Input = ({ width, type, label, placeholder }: Props) => {
  return (
    <>
      <label
        style={{
          color: '#2D3748',
          fontWeight: 400,
          fontSize: '14px',
          marginBottom: '5.5px',
        }}
      >
        {label}
      </label>
      <br />
      <input
        type={type}
        placeholder={placeholder}
        style={{
          height: '50px',
          width: ` ${width}`,
          border: '1px solid #E2E8F0',
          borderRadius: '15px',
          padding: '0px 20px 0px 20px',
        }}
      />
    </>
  );
};

export default Input;
