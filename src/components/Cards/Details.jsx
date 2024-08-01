// EmployeeDetail.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Url from "../../Api/Url";
import Swal from "sweetalert2";
import Loader from "../Loader/Loader";
const EmployeeDetail = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        // Validate the employee ID format
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
          throw new Error("Invalid employee ID format");
        }

        const response = await axios.get(`${Url}/employee/${id}`, {
          headers: {
            environmentId: "66a9f2d939e2fdc09bbba056",
            projectId: "66a9f2d939e2fdc09bbba055",
          },
        });
        setEmployee(response.data);
      } catch (error) {
        setError(error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Invalid employee ID or failed to fetch employee details",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [id]);

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-semibold text-[3rem] my-10">Employee Detail</h1>
      <div className="h-[300px] w-[350px] border rounded-3xl px-4 flex flex-col justify-center items-center space-y-3">
        <p className="font-semibold text-[1.4rem]">Employee ID: {employee.Emp_Id}</p>
        <p className="font-semibold text-[1.4rem]">Name: {employee.Epm_Name || "N/A"}</p>
        <p className="font-semibold text-[1.4rem]">Address: {employee.Emp_Address}</p>
        <p className="font-semibold text-[1.4rem]">Email: {employee.Emp_Email}</p>
        <p className="font-semibold text-[1.4rem]">Phone: {employee.Emp_Phone}</p>
      </div>
    </div>
  );
};

export default EmployeeDetail;
