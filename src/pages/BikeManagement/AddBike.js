// src/pages/BikeManagement/AddBike.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ViTextInput from "../../components/ViTextInput";
import ViMessage from "../../components/ViMessage";
import { addBike } from "../../service/bikeService"; // Import from the service

const AddBike = () => {
  const navigate = useNavigate();
  const [bikeName, setBikeName] = useState('');
  const [bikeModel, setBikeModel] = useState('');
  const [bikePrice, setBikePrice] = useState('');
  const [bikeColor, setBikeColor] = useState('');
  const [manufactureYear, setManufactureYear] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'bikeName':
        setBikeName(value);
        break;
      case 'bikeModel':
        setBikeModel(value);
        break;
      case 'bikePrice':
        setBikePrice(value);
        break;
      case 'bikeColor':
        setBikeColor(value);
        break;
      case 'manufactureYear':
        setManufactureYear(value);
        break;
      default:
        break;
    }
  };

  const handleAddBike = async () => {
    if (!bikeName || !bikeModel || !bikePrice || !bikeColor || !manufactureYear) {
      setErrorMessage('All fields are required.');
      return;
    }

    try {
      const bikeData = { bikeName, bikeModel, bikePrice, bikeColor, manufactureYear };
      await addBike(bikeData); // Call service to save bike
      navigate('/admin/bike-management/view'); // Redirect to bike list page
    } catch (error) {
      setErrorMessage('Failed to add bike');
    }
  };

  return (
    <div>
      <h1>Add New Bike</h1>
      {errorMessage && <ViMessage message={errorMessage} />}
      <ViTextInput
        title="Bike Name"
        name="bikeName"
        value={bikeName}
        handleInputChange={handleInputChange}
      />
      <ViTextInput
        title="Bike Model"
        name="bikeModel"
        value={bikeModel}
        handleInputChange={handleInputChange}
      />
      <ViTextInput
        title="Bike Color"
        name="bikeColor"
        value={bikeColor}
        handleInputChange={handleInputChange}
      />
      <ViTextInput
        title="Bike Price"
        name="bikePrice"
        value={bikePrice}
        handleInputChange={handleInputChange}
      />
      <ViTextInput
        title="Manufacture Year"
        name="manufactureYear"
        value={manufactureYear}
        handleInputChange={handleInputChange}
      />
      <div className="form-group">
        <button onClick={handleAddBike} className="btn">Add Bike</button>
      </div>
    </div>
  );
};

export default AddBike;
