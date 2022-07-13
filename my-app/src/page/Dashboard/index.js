import React,{useState} from 'react'
import {employeesData}  from './data.js';
import Swal from 'sweetalert2'
import Add from './Add.js'
import Edit from './Edit.js'
import List from './List.js'
import Header from './Header.js'


// const employeesData= [
//     {
//       "id": "1",
//       "employee_name": "Tiger Nixon",
//       "employee_salary": "320800",
//       "employee_age": "61"
//     },
//     {
//       "id": "2",
//       "employee_name": "Garrett Winters",
//       "employee_salary": "170750",
//       "employee_age": "63"
//     },
//     {
//       "id": "3",
//       "employee_name": "Ashton Cox",
//       "employee_salary": "86000",
//       "employee_age": "66"
//     },
//     {
//       "id": "4",
//       "employee_name": "Cedric Kelly",
//       "employee_salary": "433060",
//       "employee_age": "22"
//     },
//     {
//       "id": "5",
//       "employee_name": "Airi Satou",
//       "employee_salary": "162700",
//       "employee_age": "33"
//     },
//     {
//       "id": "6",
//       "employee_name": "Brielle Williamson",
//       "employee_salary": "372000",
//       "employee_age": "61"
//     },
//     {
//       "id": "7",
//       "employee_name": "Herrod Chandler",
//       "employee_salary": "137500",
//       "employee_age": "59"
//     },
//     {
//       "id": "8",
//       "employee_name": "Rhona Davidson",
//       "employee_salary": "327900",
//       "employee_age": "55"
//     },
//     {
//       "id": "9",
//       "employee_name": "Colleen Hurst",
//       "employee_salary": "205500",
//       "employee_age": "39"
//     },
//     {
//       "id": "10",
//       "employee_name": "Sonya Frost",
//       "employee_salary": "103600",
//       "employee_age": "23"
//     },
//     {
//       "id": "11",
//       "employee_name": "Jena Gaines",
//       "employee_salary": "90560",
//       "employee_age": "30"
//     },
//     {
//       "id": "12",
//       "employee_name": "Quinn Flynn",
//       "employee_salary": "342000",
//       "employee_age": "22"
//     },
//     {
//       "id": "13",
//       "employee_name": "Charde Marshall",
//       "employee_salary": "470600",
//       "employee_age": "36"
//     },
//     {
//       "id": "14",
//       "employee_name": "Haley Kennedy",
//       "employee_salary": "313500",
//       "employee_age": "43"
//     },
//     {
//       "id": "15",
//       "employee_name": "Tatyana Fitzpatrick",
//       "employee_salary": "385750",
//       "employee_age": "19"
//     },
//     {
//       "id": "16",
//       "employee_name": "Michael Silva",
//       "employee_salary": "198500",
//       "employee_age": "66"
//     },
//     {
//       "id": "17",
//       "employee_name": "Paul Byrd",
//       "employee_salary": "725000",
//       "employee_age": "64"
//     },
//     {
//       "id": "18",
//       "employee_name": "Gloria Little",
//       "employee_salary": "237500",
//       "employee_age": "59"
//     },
//     {
//       "id": "19",
//       "employee_name": "Bradley Greer",
//       "employee_salary": "132000",
//       "employee_age": "41"
//     },
//     {
//       "id": "20",
//       "employee_name": "Dai Rios",
//       "employee_salary": "217500",
//       "employee_age": "35"
//     },
//     {
//       "id": "21",
//       "employee_name": "Jenette Caldwell",
//       "employee_salary": "345000",
//       "employee_age": "30"
//     }
//   ]




function Dashboard() {

    const [employees,setEmployees] = useState(employeesData);
    const [isAdding,setisAdding] = useState(false);
    const [selectedEmployee,setselectedEmployee] = useState(null);
    const [isEditing,setisEditing] = useState(false);

    const handleEdit = (id) => {
      const [employee] = employees.filter(employee => employee.id === id);

      setselectedEmployee(employee);
      setisEditing(true);
  }

  const handleDelete = (id) => {
      Swal.fire({
          icon: 'warning',
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, cancel!',
      }).then(result => {
          if (result.value) {
              const [employee] = employees.filter(employee => employee.id === id);

              Swal.fire({
                  icon: 'success',
                  title: 'Deleted!',
                  text: `${employee.name} 's data has been deleted.`,
                  showConfirmButton: false,
                  timer: 1500,
              });

              setEmployees(employees.filter(employee => employee.id !== id));
          }
      });
  }

  return (
    <div className='container'>
         {!isAdding && !isEditing && (
                <>
                    <Header
                        setisAdding={setisAdding}
                    />
                    <List
                        employees={employees}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </>
            )}

{isAdding && (
                <Add
                    employees={employees}
                    setEmployees={setEmployees}
                    setIsAdding={setisAdding}
                />
            )}
            {/* Edit */}
            {isEditing && (
                <Edit
                    employees={employees}
                    selectedEmployee={selectedEmployee}
                    setEmployees={setEmployees}
                    setIsEditing={setisEditing}
                />
            )}

            </div>
  )
}

export default Dashboard