import '../style/CreateEmployee.css'
import InputField from '../components/InputField';
import Button from '../components/Button';
import { useNavigate ,useParams} from "react-router-dom";
import InputSelect from '../components/InputSelect';
import SideNavigation from '../components/SideNavigation';
import { useState, useEffect } from 'react';
import { useUpdateEmployeeMutation } from '../services/api';
import { useGetEmployeeByIdQuery } from '../services/api';



const UpdateEmployee = () => {

    const navigate = useNavigate();
   

    const params = useParams()
    console.log(params.id)
    const {data, error,isLoading} = useGetEmployeeByIdQuery(params.id)
    console.log(data?.data);

    const [updateEmp, result] = useUpdateEmployeeMutation();

    useEffect(()=>{
        if(result.isSuccess){
            navigate('/list');
        }
    },[result]);
    
    const [state, setInputState] = useState({
        name:"",
        experience:0,
        dateOfJoining:"",
        role:"",
        status:"",
        departmentId:'32377714-b7cd-4d97-b960-bd3f89f27b00',
        username:"",
        password:"",
        line1:"",
        line2:"",
        state:"",
        country:"",
        pinCode:""
    } 
    );
    
    useEffect(()=>{
        if(data?.data){
            setInputState(data.data
                
                )
        }
    },[data])

    const onInputChange =(key,value)=>{
        setInputState({
            ...state,
            [key]:value,
        })
    }

   useEffect(()=>{
    console.log(state)
    },[state])

    const goToList = () => {
        navigate('/list')
    }
    return (
        <>
        <SideNavigation/>
        <main>
        <section class ="Section1"> <h1>Update Employee</h1> </section>
        <section className="Section2">
            <div>
            <div className="f">

                <InputField value={state.name} label="Name" id="name" type="text" placeholder="Employee Name" name="name" onChange={(value) => onInputChange("name", value)}/>
                <InputField value={state.id} id="eid" label="Employee ID" type="text" placeholder="Employee ID" onChange={(value) => onInputChange("eid", value)}/>
                <InputField value={state.dateOfJoining} id="date" label="Date of joining" type="text" placeholder="Joining Date" onChange={(value) => onInputChange("dateOfJoining", value)}/>

                <InputSelect value={state.role} label="Role" option={[{ key: "qa", label: "qa" },
                { key: "dev", label: "dev" }]} onChange={(value) => onInputChange("role", value)}/>

                <InputSelect value={state.status} label="status" option={[{ key: "Probation", label: "Probation" }, { key: "Active", label: "Active", },{ key: "Inactive", label: "Inactive", }]}  onChange={(value) => onInputChange("status", value)}/>

                <InputField value={state.experience} label="Experience" id="experience" type="text" placeholder="Experience" onChange={(value) => onInputChange("experience", Number(value))}/>
                <InputField value={data?.data.address.line1} id="line1" label="Address line1" type="text" placeholder="Address line1" onChange={(value) => onInputChange("line1", value)}/>
                <InputField value={data?.data.address.line2} id="line2" label="Address line2" type="text" placeholder="Address line2" onChange={(value) => onInputChange("line2", value)}/>
                <InputField value={data?.data.address.state} id="state" label="State" type="text" placeholder="State" onChange={(value) => onInputChange("state", value)}/>
                <InputField value={data?.data.address.country} id="country" label="Country" type="text" placeholder="Country" onChange={(value) => onInputChange("country", value)}/>
                <InputField value={data?.data.address.pinCode} id="pinCode" label="Pin Code" type="text" placeholder="Pin Code" onChange={(value) => onInputChange("pinCode", value)}/>


                <InputField value={state.username} id="username" label="Username" type="text" placeholder="Username" onChange={(value) => onInputChange("username", value)}/>
                <InputField  id="password" label="Password" type="text" placeholder="Password" onChange={(value) => onInputChange("password", value)}/>

                <div className='input'>
                    <label >Upload ID Proof</label>
                    <div className="browse">
                        Choose a file
                        <label className="upload" htmlFor="upload-photo">Browse</label>
                        <input type="file" name="photo" id="upload-photo" />
                    </div>

                </div>
                </div>
                <div className='button'>
                <button type='submit' className='Create' onClick={() => updateEmp(state)}>Update</button>
                 {/* <Button label="Create" type="submit" className="Create" value="Create" handleClick={() => createEmp(state)} /> */}
                <Button label="Cancel" type="submit" className="Cancel" value="Cancel" handleClick={goToList} />

                </div>
               



            </div>

        </section>
        </main>
        
        </>
        
    )
}


export default UpdateEmployee;

