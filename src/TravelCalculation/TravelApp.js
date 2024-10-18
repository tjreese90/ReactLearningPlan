import { useEffect, useState } from "react";
import "./TravelApp.module.css";

// Mock API call to get vehicle types (in real scenarios, you would fetch from an API)
async function getVehicleTypes() {
  // new Promise can take in ((resolve, reject) => {return === resolve})
  return new Promise((resolve) => {
    resolve([
      { id: "1", label: "Car" },
      { id: "2", label: "Truck" },
      { id: "3", label: "Bus" },
    ]);
  });
}

// Mock function to calculate total travel amount based on starting point and destination (API-based in real cases)
async function calculateTotalAmount(
  startingPoint,
  destinationList,
  vehicleTypeList,
  expenseName
) {
  return new Promise((resolve) => {
    // Random value for demonstration purposes
    resolve(Math.random() * 1000);
  });
}

const TravelApp = () => {
  // State to store the starting point of the journey
  const [startingPoint, setStartingPoint] = useState("");

  // State to store the list of destinations (initially empty with one item)
  const [destinationList, setDestinationList] = useState([
    {
      id: String(Math.random()), // Generate random id for destination (in production, use uuid or backend generated ids)
      name: "", // Destination name (user input)
    },
  ]);

  // State to store the list of vehicle types (fetched from getVehicleTypes)
  const [vehicleTypeList, setVehicleTypeList] = useState([]);

  // state to keep track of drop down selection.
  const [selectedVehicleType, setSelectedVehicleType] = useState(null);

  // State to store the total calculated travel cost
  const [totalAmount, setTotalAmount] = useState(0);

  // State to store the name of the travel expense (e.g., "Business Trip")
  const [expenseName, setExpenseName] = useState("");

  // Fetch vehicle types on component mount using useEffect
  useEffect(() => {
    getVehicleTypes().then((vehicleTypesArray) => {
      setVehicleTypeList(vehicleTypesArray); // Update the vehicle type list state with data
    });
  }, []);

  // Function to handle the addition of a new destination
  const addDestination = () => {
    setDestinationList([
      ...destinationList,
      { id: String(Math.random()), name: "" }, // Add a new empty destination with unique id
    ]);
  };

  // Bonus Section
  const removeDestination = () => {
    if (destinationList.length > 1) {
      const updatedList = destinationList.slice(0, -1); //remove last element.
      setDestinationList(updatedList);
    }
  };

  // Function to handle changes in destination input
  const handleDestinationChange = (id, event) => {
    // Find the index of the destination that was changed
    const destinationIndex = destinationList.findIndex(
      (dest) => dest.id === id
    );

    // Create an updated destination object with the new input value
    const updatedDestination = {
      ...destinationList[destinationIndex],
      name: event.target.value,
    };

    // Update the destination list with the modified destination
    const updatedDestinationList = [...destinationList];
    updatedDestinationList[destinationIndex] = updatedDestination;

    // Update state with the new destination list
    setDestinationList(updatedDestinationList);
  };

  useEffect(() => {
    setExpenseName(
      startingPoint +
        " - " +
        destinationList.map((dest) => dest.name).join(" - ")
    );
  }, [startingPoint, destinationList]);

  useEffect(() => {
    if (startingPoint.length > 1) {
      calculateTotalAmount(
        startingPoint,
        destinationList,
        vehicleTypeList,
        expenseName
      ).then((totalAmount) => {
        setTotalAmount(totalAmount);
      });
    }
  }, [startingPoint, destinationList, vehicleTypeList, expenseName]);

  return (
    <>
      <h1>Travel Cost Calculation</h1>
      <div className="appContainer">
        <label htmlFor="starting_point" className="formGroup">
          Starting Point
        </label>
        <input
          placeholder="Berlin"
          name="starting_point"
          value={startingPoint}
          onChange={(event) => setStartingPoint(event.target.value)} // Update starting point state on change
        />
      </div>
      {destinationList.map((destination) => (
        <div key={destination.id}>
          <label htmlFor={`dest-${destination.id}`}>Destination</label>
          <input
            value={destination.name}
            placeholder="London"
            name={`dest-${destination.id}`}
            onChange={(event) => handleDestinationChange(destination.id, event)} // Handle input changes
          />
        </div>
      ))}
      <div>
        <button onClick={addDestination}>+ Add additional destination</button>
        <button onClick={removeDestination}>- Add Remove Destination</button>
      </div>
      <div>
        <label htmlFor="vehicle_type">Vehicle Type</label>
        <select
          value={selectedVehicleType} //bind the value to selected type.
          onChange={(event) => {
            setSelectedVehicleType(event.target.value);
          }}
        >
          {vehicleTypeList.map((vehicle) => (
            <option key={vehicle.id} value={vehicle.label}>
              {vehicle.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="expense_name">Expense Name</label>
        <input
          placeholder="Enter expense name"
          name="expense_name"
          value={expenseName}
          onChange={(event) => setExpenseName(event.target.value)} // Update expense name state
        />
      </div>
      <div>
        <p>Total Amount: ${totalAmount.toFixed(2)}</p>
        <button type="button">Submit</button>
      </div>
    </>
  );
};

export default TravelApp;
