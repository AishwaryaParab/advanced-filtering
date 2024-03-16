const Input = ({ type, selectedType, setSelectedType }) => {
  console.log("Selected Type  -----> " + selectedType);
  return (
    <label className="sidebar-label-container">
      <input 
        type="radio"
        name={type}
        onChange={() => setSelectedType(type)}
        checked={selectedType == type}
      />
      <span className="checkmark">{type}</span>
    </label>
  )
}

export default Input