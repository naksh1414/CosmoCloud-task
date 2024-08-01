import { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import PropTypes from "prop-types";
import Url from "../../Api/Url";
import Swal from "sweetalert2";
Modal.setAppElement("#root");

const AddEmployeeModal = ({ isOpen, onClose, onAddEmployee }) => {
  const [empId, setEmpId] = useState("");
  const [empName, setEmpName] = useState("");
  const [empAddress, setEmpAddress] = useState("");
  const [empEmail, setEmpEmail] = useState("");
  const [empPhone, setEmpPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newEmployee = {
        Emp_Id: empId,
        Epm_Name: empName,
        Emp_Address: empAddress,
        Emp_Email: empEmail,
        Emp_Phone: empPhone,
      };
      const response = await axios.post(`${Url}/employee`, newEmployee, {
        headers: {
          environmentId: "66a9f2d939e2fdc09bbba056",
          projectId: "66a9f2d939e2fdc09bbba055",
        },
      });
      onAddEmployee(response.data);
      onClose();
      Swal.fire("Success", "Employee successfully added!", "success");
    } catch (error) {
      console.error("Error adding employee:", error);
      Swal.fire("Error", "There was an error adding the employee.", "error");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="overlay"
    >
      <div className="backdrop-blur-2xl absolute top-0 h-screen w-full z-10">
        <div className=" z-10  justify-center items-center flex   h-full w-full ">
          <div className=" bg-transparent border rounded-2xl border-black p-5 h-[500px] w-[500px]">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-secondary-foreground">Add Employee</h2>
              <button
                onClick={onClose}
                className=" px-4 py-2 bg-gray-500 text-white rounded"
              >
                Close
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col space-y-4 mt-5"
            >
              <input
                className="input ring text-primary-foreground rounded-lg px-2 py-2"
                type="text"
                placeholder="Employee ID"
                value={empId}
                onChange={(e) => setEmpId(e.target.value)}
                required
              />
              <input
                className="input ring text-primary-foreground rounded-lg px-2 py-2 "
                type="text"
                placeholder="Employee Name"
                value={empName}
                onChange={(e) => setEmpName(e.target.value)}
                required
              />
              <input
                className="input ring text-primary-foreground rounded-lg px-2 py-2"
                type="text"
                placeholder="Employee Address"
                value={empAddress}
                onChange={(e) => setEmpAddress(e.target.value)}
                required
              />
              <input
                className="input ring text-primary-foreground rounded-lg px-2 py-2"
                type="email"
                placeholder="Employee Email"
                value={empEmail}
                onChange={(e) => setEmpEmail(e.target.value)}
                required
              />
              <input
                className="input ring text-primary-foreground rounded-lg px-2 py-2"
                type="text"
                placeholder="Employee Phone"
                value={empPhone}
                onChange={(e) => setEmpPhone(e.target.value)}
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-primary-foreground"
              >
                Add Employee
              </button>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
};

AddEmployeeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAddEmployee: PropTypes.func.isRequired,
};

export default AddEmployeeModal;
