import { useState, useEffect, useCallback } from "react";
import useFetchData from "../../hooks/useFetchData";
import Url from "../../Api/Url";
import EmployeeCard from "../../components/Cards/EmployeeCard";
import AddEmployeeModal from "../../components/Modal/AddEmployeeModal";
import Pagination from "../../components/Pagination/Page";
import Loader from "../../components/Loader/Loader";

const Employee = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(false);

  const limit = 3;
  const offset = (currentPage - 1) * limit;

  const { data, loading, error, refetch, totalCount } = useFetchData({
    url: `${Url}/employee`,
    limit,
    offset,
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [limit]);

  const handlePageChange = useCallback(
    async (page) => {
      setIsPageLoading(true);
      setCurrentPage(page);
      await refetch();
      setIsPageLoading(false);
    },
    [refetch]
  );

  const handleAddEmployee = useCallback(
    async (newEmployee) => {
      await refetch();
      setIsModalOpen(false);
    },
    [refetch]
  );

  if (loading) return <Loader center />;
  if (error) return <div>Error: {error.message}</div>;

  const totalPages = Math.ceil(totalCount / limit);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="font-semibold text-primary text-3xl my-10">Employee Details</h1>

      <div className="flex flex-wrap items-center justify-center">
        {isPageLoading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          data.map((employee) => (
            <EmployeeCard key={employee._id} employee={employee} />
          ))
        )}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      <div className="my-2 text-lg">Page {currentPage}</div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="my-4 px-4 py-2 bg-primary rounded"
      >
        Add Employee
      </button>
      <AddEmployeeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddEmployee={handleAddEmployee}
      />
    </div>
  );
};

export default Employee;
