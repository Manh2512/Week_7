import {useLocation, Navigate} from "react-router-dom";
import Layout from "../components/Layout";

function ApplicationReceived(){
    const location = useLocation();
    const formData = location.state;

    if(!formData){
        return <Navigate to="/jobs" replace />;
    }

    return (
        <Layout activePage="Jobs">
            <h2>Thank You for Applying</h2>

            <p>
                We received the following information:
            </p>

            <table className="menu-table">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td>{formData.name}</td>
                    </tr>
                    <tr>
                        <th>E-mail</th>
                        <td>{formData.email}</td>
                    </tr>
                    <tr>
                        <th>Start Date</th>
                        <td>{formData.startdate}</td>
                    </tr>
                    <tr>
                        <th>Experience</th>
                        <td>{formData.experience}</td>
                    </tr>
                </tbody>
            </table>
        </Layout>
    );
}

export default ApplicationReceived;