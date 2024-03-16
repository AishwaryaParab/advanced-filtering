const Buttons = ({ label, handleRecommended, button, setButton }) => {
  return (
    <button className={button === label ? "btns active" : "btns"} onClick={() => {
      setButton(label);
      handleRecommended(label)
    }}
    >
      {label}
    </button>
  )
}

export default Buttons