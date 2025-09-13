import "./index.css";

function IngredientModal(props) {
  const { ingredientDetails, dishName, onClose } = props;
  if (!ingredientDetails) return null; // Don't render if no data
  
  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <h2 className="modalTitle">{dishName} - Ingredients</h2>

        <div className="ingredientList">
          {ingredientDetails.map((each) => (
            <div key={each.name} className="ingredientContainer">
              <p className="ingredientName">{each.name}</p>
              <p className="ingredientQty">{each.quantity}</p>
            </div>
          ))}
        </div>

        <button className="closeBtn" onClick={onClose}>
          ✖ Close
        </button>
      </div>
    </div>
  );
}

export default IngredientModal;
