import { MdOutlineEdit } from "react-icons/md"
import SideNavigation from "../components/SideNavigation";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetEmployeeByIdQuery } from "../services/api";

const EmployeeDetails = () => {

    const params = useParams()
    console.log(params.id)
    const {data, error,isLoading} = useGetEmployeeByIdQuery(params.id)
    console.log(data?.data);
    const navigate = useNavigate()
    const goToUpdate = (id) => {
        navigate(`/update/${id}`)
    }

   

    return(
        <>
         <SideNavigation />
            <main>
                <section class="Section1">
                    <h1 >Employee Details</h1>
                    
                    <div onClick={(e)=>{e.stopPropagation();goToUpdate(data?.data.id)}} class="createEmployee" >
                        <span class="list">
                            <MdOutlineEdit className="plus" />
                        </span>
                        <div className="createButton" >Edit</div>
                    </div>

                </section>

                
                       
                        <div className="details"> 
                            <div>Employee Name <br/>{data?.data?.name}</div>
                            <div>Employee ID <br/> {data?.data?.id}</div>
                            <div>Joining Date<br/>{data?.data?.dateOfJoining}</div>
                            <div>Role<br/>{data?.data?.role}</div>
                            <div>Status<br/>{data?.data?.status}</div>
                            <div>Experience<br/>{data?.data?.experience}</div>
        
                        </div>
                          
                          

                    

             

                
            </main>
        </>
    )
}

export default EmployeeDetails;