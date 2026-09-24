import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Layout from "../components/Layout";

function onlyLettersAndSpace(str){
    return /[a-zA-Z]/.test(str) && /^[A-Za-z\s]+$/.test(str);
}

function isValidEmail(str){
    const pattern = /^[a-zA-Z][\w.-]*@(?:\w+\.){1,3}\w{2,3}$/;
    return pattern.test(str);
}

function Jobs(){
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        startdate: "",
        experience: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        startdate: "",
        experience: ""
    });

    function validateField(name, value){
        if(name === "name"){
            if(value.length === 0) return "Name is required.";
            if(!onlyLettersAndSpace(value)) return "Name can only contain letters and spaces.";
        }

        if(name === "email"){
            if(value.length === 0) return "Email is required.";
            if(!isValidEmail(value)) return "Email format is incorrect.";
        }

        if(name === "startdate" && value.length > 0){
            const today = new Date();
            const startdate = new Date(value);

            if(today.getTime() >= startdate.getTime()){
                return "Start date must be after today.";
            }
        }

        if(name === "experience" && value.length === 0){
            return "Experience is required.";
        }

        return "";
    }

    function handleChange(event){
        const {name, value} = event.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        setErrors(prev => ({
            ...prev,
            [name]: validateField(name, value)
        }));
    }

    function handleSubmit(event){
        event.preventDefault();

        const newErrors = {
            name: validateField("name", formData.name),
            email: validateField("email", formData.email),
            startdate: validateField("startdate", formData.startdate),
            experience: validateField("experience", formData.experience)
        };

        setErrors(newErrors);

        if(Object.values(newErrors).some(error => error !== "")){
            return;
        }

        navigate("/application-received", {
            state: formData
        });
    }

    function handleReset(){
        setFormData({
            name: "",
            email: "",
            startdate: "",
            experience: ""
        });

        setErrors({
            name: "",
            email: "",
            startdate: "",
            experience: ""
        });
    }

    return (
        <Layout activePage="Jobs">
            <h2>Jobs at JavaJam</h2>

            <p>
                Want to work at JavaJam? Fill out the form below to start your
                application. Required fields are marked with an asterisk *
            </p>

            <form id="job-form" onSubmit={handleSubmit} onReset={handleReset}>
                <div className="mt-[10px]">
                    <label htmlFor="name">*Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name here"
                    />
                    {errors.name && <span>{errors.name}</span>}
                </div>

                <div className="mt-[10px]">
                    <label htmlFor="email">*E-mail:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your Email-ID here"
                    />
                    {errors.email && <span>{errors.email}</span>}
                </div>

                <div className="mt-[10px]">
                    <label htmlFor="startdate">Start Date:</label>
                    <input
                        type="date"
                        id="startdate"
                        name="startdate"
                        value={formData.startdate}
                        onChange={handleChange}
                    />
                    {errors.startdate && <span>{errors.startdate}</span>}
                </div>

                <div className="mt-[10px]">
                    <label htmlFor="experience">*Experience:</label>
                    <textarea
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        placeholder="Enter your past experience here"
                    />
                    {errors.experience && <span>{errors.experience}</span>}
                </div>

                <div className="mt-4">
                    <button type="reset">Clear</button>
                    <button type="submit">Apply Now</button>
                </div>
            </form>
        </Layout>
    );
}

export default Jobs;