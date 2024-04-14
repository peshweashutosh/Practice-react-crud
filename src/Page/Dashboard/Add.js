import React,{useState, useRef, useEffect} from 'react';
import Swal from 'sweetalert2';

function Add({employees, setEmployees,setIsAdding}) {
    const[firstName,setFirstName] = useState('');
    const[lastName,setLastName] = useState('');
    const[email,setEmail] = useState('');
    const[salary,setSalary] = useState('');
    const[date,setDate] = useState('');

    const textInput = useRef(null);

    useEffect(()=>{
        textInput.current.focus();
    },[])
    
    const handleAdd = e =>{
        e.preventDefault();
        if(!firstName || !lastName || !email || !salary || !date)
        {
            return Swal.fire({
                icon: 'error',
                titleText: 'Error',
                text: 'All fields are required.',
                showConfirmButton: true
            })
        }
        const id = employees.length +1;
        const newEmployee = {
            id,
            firstName,
            lastName,
            email,
            salary,
            date
        }
        employees.push(newEmployee);
        setEmployees(employees);
        setIsAdding(false);

        Swal.fire({
            icon:'success',
            titleText:'Added',
            text: `${firstName} ${lastName} is added successfully.`,
            showConfirmButton:false,
            timer: 1500
        })
    }

  return (
    <div>
        <form onSubmit={handleAdd}>
            <h1>Add Employee</h1>
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
                <input type='submit' value="Add" />
                <input
                    type='button'
                    value="Cancel"
                    onClick={() => setIsAdding(false)}
                />
            </div>
        </form>
    </div>
  )
}

export default Add