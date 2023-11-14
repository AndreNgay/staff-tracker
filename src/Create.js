import { useState } from "react";

const Create = () => {
    const title = "Welcome to our app!";
    const description = "This is our staff tracking application";

    const [Name, setName] = useState('');
    const [Department, setDepartment] = useState('');
    const [Position, setPosition] = useState('');
    const [Salary, setSalary] = useState('');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const staff = {Name, Department, Position, Salary};
        setIsPending(true);

        fetch('http://localhost:8000/staff', {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(staff)
        }).then(() => {
            console.log("Hired a new staff");
            setIsPending(false);
        })

        setName('');
        setDepartment('');
        setPosition('');
        setSalary('');
    }

    return (  
        <div className="content">
            <h1>{title}</h1>
            <p>{description}</p>
            <hr />
            <br />

            <div className="create">
                <h2>Adding a new Staff:</h2>
                <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text" required value={Name} onChange={(e) => {
                        setName(e.target.value);
                    }}/>

                    <label>Department</label>
                    <input type="text" required  value={Department} onChange={(e) => {
                        setDepartment(e.target.value);
                    }}/>

                    <label>Position</label>
                    <input type="text" required value={Position} onChange={(e) => {
                        setPosition(e.target.value);
                    }}/>

                    <label>Salary</label>
                    <input type="text" required  value={Salary} onChange={(e) => {
                        setSalary(e.target.value);
                    }}/>

                    {!isPending && <button>Hire Staff</button>}
                    {isPending && <button disabled>Just a moment</button>}
                </form>
                
            </div>
        </div>
    );
}
 
export default Create;