import { Link } from "react-router-dom";


const StaffList = ({staff, staffList}) => {
    return (
        <div className="staff-list">
            <h2>{staffList}</h2>

            {staff.map((s) => (
                <div className="staff-preview" key= { s.id }>
                <Link to={`/staff/${s.id}`}>
                    <h2>{ s.Name }</h2>
                    <p><strong>{ s.Position }</strong></p>
                    <p><em>{ s.Department }</em></p>
                    <p>{s.Salary}</p>
                </Link>
                </div>
            ))}
        </div>
    );
}


export default StaffList;
