import '../style/CreateEmployee.css'
import InputField from '../components/InputField';
import Button from '../components/Button';
import { useNavigate } from "react-router-dom";
import InputSelect from '../components/InputSelect';
import SideNavigation from '../components/SideNavigation';
import { useState, useEffect } from 'react';
import { useCreateEmployeeMutation } from '../services/api';



const CreateEmployee = () => {

    const navigate = useNavigate();
    const [createEmp, result] = useCreateEmployeeMutation();
    console.log(result);

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
    )

    const onInputChange =(key,value)=>{
        setInputState({
            ...state,
            [key]:value,
        })
    }

    const onCreate = () => {
        const payload = {
            name:state.name,
            experience:state.experience,
            dateOfJoining: state.dateOfJoining,
            role: state.role,
            status:state.status,
            departmentId:'32377714-b7cd-4d97-b960-bd3f89f27b00',
            username:state.username,
            password:state.password,
            address: {
                line1: state.line1,
                line2: state.line2,
                state: state.state,
                country: state.country,
                pinCode: state.pinCode
            }
            }
            createEmp(payload)
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
        <section class ="Section1"> <h1>Create Employee</h1> </section>
        <section className="Section2">
            <div>
            <div className="f">

                <InputField label="Name" id="name" type="text" placeholder="Employee Name" name="name" onChange={(value) => onInputChange("name", value)}/>
                <InputField id="eid" label="Employee ID" type="text" placeholder="Employee ID" onChange={(value) => onInputChange("eid", value)}/>
                <InputField id="date" label="Date of joining" type="text" placeholder="Joining Date" onChange={(value) => onInputChange("dateOfJoining", value)}/>

                <InputSelect label="Role" option={[{ key: "qa", label: "qa" },
                { key: "dev", label: "dev" }]} onChange={(value) => onInputChange("role", value)}/>

                <InputSelect label="status" option={[{ key: "Probation", label: "Probation" }, { key: "Active", label: "Active", },{ key: "Inactive", label: "Inactive", }]}  onChange={(value) => onInputChange("status", value)}/>

                <InputField label="Experience" id="experience" type="text" placeholder="Experience" onChange={(value) => onInputChange("experience", Number(value))}/>
                <InputField id="line1" label="Address line1" type="text" placeholder="Address line1" onChange={(value) => onInputChange("line1", value)}/>
                <InputField id="line2" label="Address line2" type="text" placeholder="Address line2" onChange={(value) => onInputChange("line2", value)}/>
                <InputField id="state" label="State" type="text" placeholder="State" onChange={(value) => onInputChange("state", value)}/>
                <InputField id="country" label="Country" type="text" placeholder="Country" onChange={(value) => onInputChange("country", value)}/>
                <InputField id="pinCode" label="Pin Code" type="text" placeholder="Pin Code" onChange={(value) => onInputChange("pinCode", value)}/>

                <InputField id="username" label="Username" type="text" placeholder="Username" onChange={(value) => onInputChange("username", value)}/>
                <InputField id="password" label="Password" type="text" placeholder="Password" onChange={(value) => onInputChange("password", value)}/>

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
                <button type='submit' className='Create' onClick={() => onCreate()}>Create</button>
                 {/* <Button label="Create" type="submit" className="Create" value="Create" handleClick={() => createEmp(state)} /> */}
                <Button label="Cancel" type="submit" className="Cancel" value="Cancel" handleClick={goToList} />

                </div>
               



            </div>

        </section>
        </main>
        
        </>
        
    )
}


export default CreateEmployee;

