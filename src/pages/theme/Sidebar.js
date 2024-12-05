import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <ul className="sidebar-nav">
        {/* User Management Section */}
        <li>
          <Link to="/user-management">User Management</Link>
        </li>

        {/* Bike Management Section */}
        <li>
          <Link to="/admin/bike-management">Bike Management</Link>
          <ul className="sidebar-sub-nav">
            <li><Link to="/admin/bike-management/add">Add Bike</Link></li>
            <li><Link to="/admin/bike-management/view">View Bikes</Link></li>
            <li><Link to="/admin/bike-management/available">Available Bikes</Link></li>
          </ul>
        </li>

        {/* Rented Bikes Section (Separate) */}
        <li>
          <Link to="/admin/rented-bikes">Rented Bikes</Link> {/* New Main Menu Item */}
        </li>

        {/* Other Links */}
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
