import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store";
import { selectFormValues } from "../store/selector";

const CarForm = () => {
  const dispatch = useDispatch();
  const { name, cost } = useSelector(selectFormValues);
  // const { name, cost } = useSelector((state) => {
  //   return {
  //     name: state.form.name,
  //     cost: state.form.cost,
  //   };
  // });

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCar({ name, cost }));
  };

  const handleCostChange = (event) => {
    const carCost = parseInt(event.target.value) || 0;
    dispatch(changeCost(carCost));
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name: </label>
            <input
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
              type="text"
            />
          </div>
          <div className="field">
            <label className="label">Cost: </label>
            <input
              className="input is-expanded"
              value={cost || ""}
              onChange={handleCostChange}
              type="number"
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
