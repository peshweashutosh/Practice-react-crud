import React,{useState, useRef} from 'react';
import Swal from 'sweetalert2';

function Edit({employees,selectedEmployee,setEmployees, setIsEditing}) {
    const id = selectedEmployee.id;
    const[firstName,setFirstName] = useState(selectedEmployee.firstName);
    const[lastName,setLastName] = useState(selectedEmployee.lastName);
    const[email,setEmail] = useState(selectedEmployee.email);
    const[salary,setSalary] = useState(selectedEmployee.salary);
    const[date,setDate] = useState(selectedEmployee.date);
    const textInput = useRef(null);
    
    

    const handleUpdate = (e) =>{
        e.preventDefault();

        if (!firstName || !lastName || !email || !salary || !date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const employee = {
            id,
            firstName,
            lastName,
            email,
            salary,
            date
        };

        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id === id) {
                employees.splice(i, 1, employee);
                break;
            }
        }

        setEmployees(employees);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${employee.firstName} ${employee.lastName}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    }

  return (
    <div>
        <form onSubmit={handleUpdate}>
            <h1>Edit Employee</h1>
            <label htmlFor='firstName'>First Name</label>
            <input
                id='firstName'
                type='text'
                ref={textInput}
                name='firstName'
                value={firstName}
                onChange={e=>setFirstName(e.target.value)}
            />
            <label htmlFor='lastName'>Last Name</label>
            <input
                id='lastName'
                type='text'
                ref={textInput}
                name='lastName'
                value={lastName}
                onChange={e=>setLastName(e.target.value)}
            />
            <label htmlFor='email'>Email</label>
            <input
                id='email'
                type='text'
                ref={textInput}
                name='email'
                value={email}
                onChange={e=>setEmail(e.target.value)}
            />
            <label htmlFor='salary'>Salary</label>
            <input
                id='salary'
                type='salary'
                ref={textInput}
                name='salary'
                value={salary}
                onChange={e=>setSalary(e.target.value)}
            />
            <label htmlFor='date'>Date</label>
            <input
                id='date'
                type='date'
                ref={textInput}
                name='date'
                value={date}
                onChange={e=>setDate(e.target.value)}
            />
            <div>
                <input type='submit' value="Update" />
                <input
                    type='button'
                    value="Cancel"
                    onClick={() => setIsEditing(false)}
                />
            </div>
        </form>
    </div>
  )
}

export default Edit