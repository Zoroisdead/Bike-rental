import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./pages/theme/Layout";
import UserManagement from "./pages/UserManagement/UserManagement";
import AddUser from "./pages/UserManagement/AddUser";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import UserDetail from "./pages/UserManagement/UserDetail";
import Login from "./pages/Auth/Login";
import PrivateRoute from "./routes/PrivateRoute";
import UserDelete from "./pages/UserManagement/UserDelete";

// Bike Management
import AddBike from "./pages/BikeManagement/AddBike";
import EditBike from "./pages/BikeManagement/EditBike";
import ViewBikes from "./pages/BikeManagement/ViewBikes";
import AvailableBikes from "./pages/BikeManagement/AvailableBikes"; 
import RentedBikes from "./pages/BikeManagement/RentedBikes";  // Correct import here

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Private Routes (Require Authentication) */}
          <Route path="/" element={<PrivateRoute component={Layout} />} >
            
            {/* User Management Routes */}
            <Route path="/user-management" element={<PrivateRoute component={UserManagement} />} />
            <Route path="/user-management/add" element={<PrivateRoute component={AddUser} />} />
            <Route path="/user-management/edit/:userId" element={<PrivateRoute component={AddUser} />} />
            <Route path="/user-management/detail/:userId" element={<PrivateRoute component={UserDetail} />} />
            <Route path="/user-management/delete/:userId" element={<PrivateRoute component={UserDelete} />} />

            {/* Bike Management Routes */}
            <Route path="/admin/bike-management/add" element={<PrivateRoute component={AddBike} />} />
            <Route path="/admin/bike-management/edit/:id" element={<PrivateRoute component={EditBike} />} />
            <Route path="/admin/bike-management/view" element={<PrivateRoute component={ViewBikes} />} />
            <Route path="/admin/bike-management/available" element={<PrivateRoute component={AvailableBikes} />} /> 
            <Route path="/admin/rented-bikes" element={<PrivateRoute component={RentedBikes} />} />  {/* Correct path for RentedBikes */}

            {/* Other Routes */}
            <Route path="/faq" element={<PrivateRoute component={Faq} />} />
            <Route path="/contact" element={<PrivateRoute component={Contact} />} />
          </Route>

          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
