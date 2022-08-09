import Button from "../components/Button"
import { useNavigate } from "react-router-dom";
import SideNavigation from "../components/SideNavigation";
import { useCreateEmployeeMutation, useDeleteEmployeeMutation, useGetAllEmployeesQuery } from "../services/api";
import { Link } from "react-router-dom";
import {MdOutlineAdd, MdOutlineDelete, MdOutlineEdit} from 'react-icons/md'



const EmployeeList = () => {

    const { data, error, isLoading } = useGetAllEmployeesQuery();
    console.log(data)
    const [deleteEmployee] = useDeleteEmployeeMutation();

    const navigate = useNavigate()

    const goToDetails = (id) => {
        navigate(`/details/${id}`)
    }

    const goToUpdate = (id) => {
        navigate(`/update/${id}`)
    }

    return (
        <>
            <SideNavigation />
            <main>
                <section class="Section1">
                    <h1 >Employee List</h1>
                    
                    <Link to="/create" class="createEmployee" >
                        <span class="list">
                            <MdOutlineAdd className="plus"/>
                        </span>
                        <div className="createButton" >Create Employee</div>
                    </Link>

                </section>

                <table cellSpacing="0">
                    <tr align="left">
                        <th>Employee Name</th>
                        <th>Employee ID</th>
                        <th>Joining Date</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Experience</th>
                        <th>Action</th>

                    </tr>
                    
                    {data?.data.map((item) => {
                        return (
                          
                            <tr align="left" onClick={()=>goToDetails(item.id)}>
                                <td>{item.name}</td>
                                <td>{item.id}</td>
                                <td>{item.dateOfJoining}</td>
                                <td>{item.role}</td>
                                <td><div className={item.status}>{item.status}</div></td>
                                <td>{item.experience}</td>
                                <td> 
                                    <div >
                                <MdOutlineDelete className="delete" onClick={(e)=>{e.stopPropagation(); deleteEmployee(item.id)}}/>
                                <MdOutlineEdit className="edit" onClick={(e)=>{e.stopPropagation();goToUpdate(item.id)}}> </MdOutlineEdit>
                                    </div>
                                </td>
                            </tr>
                          

                        )
                    })}

                </table>

            </main>

        </>



    )
}

export default EmployeeList;