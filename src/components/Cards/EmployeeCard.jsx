import PropTypes from "prop-types";
import Button from "../Buttons/Button";
const EmployeeCard = ({ employee }) => {
  if (!employee) return null;
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <div className="h-80 w-80 bg-card text-card-foreground ring rounded-3xl px-4 flex flex-col justify-around items-center">
        <div className="space-y-2 flex justify-center flex-col items-center">
          <p className="font-semibold text-xl">
            Employee ID: {employee.Emp_Id}
          </p>
          <p className="font-semibold text-xl">{employee.Epm_Name || "N/A"}</p>
        </div>
          <Button
            data="View Details"
            link={`/employee/${employee._id}`}
            className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded"
          ></Button>
      </div>
    </div>
  );
};

EmployeeCard.propTypes = {
  employee: PropTypes.shape({
    Emp_Id: PropTypes.number.isRequired,
    Epm_Name: PropTypes.string,
    Emp_Address: PropTypes.string.isRequired,
    Emp_Email: PropTypes.string.isRequired,
    Emp_Phone: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default EmployeeCard;
