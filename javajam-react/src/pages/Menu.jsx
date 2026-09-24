import {useEffect, useState} from "react";
import Layout from "../components/Layout";

function Menu(){
    const [javaQuantity, setJavaQuantity] = useState("0");
    const [cafeQuantity, setCafeQuantity] = useState("0");
    const [cappuccinoQuantity, setCappuccinoQuantity] = useState("0");

    const [cafePrice, setCafePrice] = useState("");
    const [cappuccinoPrice, setCappuccinoPrice] = useState("");

    const [javaSubtotal, setJavaSubtotal] = useState(0);
    const [cafeSubtotal, setCafeSubtotal] = useState(0);
    const [cappuccinoSubtotal, setCappuccinoSubtotal] = useState(0);

    useEffect(() => {
        const quantity = Number(javaQuantity);

        if(javaQuantity === "" || (Number.isInteger(quantity) && quantity >= 0)){
            setJavaSubtotal(2.0 * (quantity || 0));
        }
    }, [javaQuantity]);

    useEffect(() => {
        const quantity = Number(cafeQuantity);

        if(cafePrice && Number.isInteger(quantity) && quantity >= 0){
            setCafeSubtotal(Number(cafePrice) * quantity);
        }else if(quantity === 0){
            setCafeSubtotal(0);
        }
    }, [cafePrice, cafeQuantity]);

    useEffect(() => {
        const quantity = Number(cappuccinoQuantity);

        if(cappuccinoPrice && Number.isInteger(quantity) && quantity >= 0){
            setCappuccinoSubtotal(Number(cappuccinoPrice) * quantity);
        }else if(quantity === 0){
            setCappuccinoSubtotal(0);
        }
    }, [cappuccinoPrice, cappuccinoQuantity]);

    const totalPrice = javaSubtotal + cafeSubtotal + cappuccinoSubtotal;

    function isValidQuantity(value){
        return value === "" || /^\d+$/.test(value);
    }

    function handleJavaQuantity(event){
        const value = event.target.value;

        if(!isValidQuantity(value)){
            alert("Quantity must be a non-negative integer!");
            return;
        }

        setJavaQuantity(value);
    }

    function handleCafeQuantity(event){
        const value = event.target.value;

        if(!isValidQuantity(value)){
            alert("Quantity must be a non-negative integer!");
            return;
        }

        if(value !== "0" && value !== "" && !cafePrice){
            alert("Please choose Single shot or Double shot for Cafe Au Lait!");
        }

        setCafeQuantity(value);
    }

    function handleCappuccinoQuantity(event){
        const value = event.target.value;

        if(!isValidQuantity(value)){
            alert("Quantity must be a non-negative integer!");
            return;
        }

        if(value !== "0" && value !== "" && !cappuccinoPrice){
            alert("Please choose Single shot or Double shot for Iced Cappuccino!");
        }

        setCappuccinoQuantity(value);
    }

    return (
        <Layout activePage="Menu">
            <h2>Coffee at JavaJam</h2>

            <table className="w-[60%] mx-auto mt-[10px] border-separate border-spacing-x-1 border-spacing-y-0">
                <tbody>
                    <tr>
                        <th className="w-[150px] bg-[#c19a6b] p-3 text-center text-[#2b1c10]">
                            Just Java
                        </th>
                        <td className="bg-[#c19a6b] p-3">
                            Regular house blend, decaffeinated coffee, or flavor of the day.
                            <br />
                            <strong>Endless Cup $2.00</strong>
                        </td>
                        <td className="bg-[#c19a6b] p-3">
                            Quantity:{" "}
                            <input
                                type="text"
                                value={javaQuantity}
                                onChange={handleJavaQuantity}
                                className="w-[50px]"
                            />
                        </td>
                        <td className="bg-[#c19a6b] p-3">
                            Subtotal:{" "}
                            <input
                                type="text"
                                value={javaSubtotal.toFixed(2)}
                                readOnly
                                className="w-[50px]"
                            />
                        </td>
                    </tr>

                    <tr>
                        <th className="w-[150px] bg-[#f5ecd6] p-3 text-center text-[#2b1c10]">
                            Cafe au Lait
                        </th>
                        <td className="bg-[#f5ecd6] p-3">
                            House blended coffee infused into a smooth, steamed milk.
                            <br />
                            <label>
                                <input
                                    type="radio"
                                    name="cafe-price"
                                    value="2"
                                    checked={cafePrice === "2"}
                                    onChange={event => setCafePrice(event.target.value)}
                                />
                                {" "}Single $2.00
                            </label>
                            <br />
                            <label>
                                <input
                                    type="radio"
                                    name="cafe-price"
                                    value="3"
                                    checked={cafePrice === "3"}
                                    onChange={event => setCafePrice(event.target.value)}
                                />
                                {" "}Double $3.00
                            </label>
                        </td>
                        <td className="bg-[#f5ecd6] p-3">
                            Quantity:{" "}
                            <input
                                type="text"
                                value={cafeQuantity}
                                onChange={handleCafeQuantity}
                                className="w-[50px]"
                            />
                        </td>
                        <td className="bg-[#f5ecd6] p-3">
                            Subtotal:{" "}
                            <input
                                type="text"
                                value={cafeSubtotal.toFixed(2)}
                                readOnly
                                className="w-[50px]"
                            />
                        </td>
                    </tr>

                    <tr>
                        <th className="w-[150px] bg-[#c19a6b] p-3 text-center text-[#2b1c10]">
                            Iced Cappuccino
                        </th>
                        <td className="bg-[#c19a6b] p-3">
                            Sweetened espresso blended with icy-cold milk and served in a chilled glass.
                            <br />
                            <label>
                                <input
                                    type="radio"
                                    name="cappuccino-price"
                                    value="4.75"
                                    checked={cappuccinoPrice === "4.75"}
                                    onChange={event => setCappuccinoPrice(event.target.value)}
                                />
                                {" "}Single $4.75
                            </label>
                            <br />
                            <label>
                                <input
                                    type="radio"
                                    name="cappuccino-price"
                                    value="5.75"
                                    checked={cappuccinoPrice === "5.75"}
                                    onChange={event => setCappuccinoPrice(event.target.value)}
                                />
                                {" "}Double $5.75
                            </label>
                        </td>
                        <td className="bg-[#c19a6b] p-3">
                            Quantity:{" "}
                            <input
                                type="text"
                                value={cappuccinoQuantity}
                                onChange={handleCappuccinoQuantity}
                                className="w-[50px]"
                            />
                        </td>
                        <td className="bg-[#c19a6b] p-3">
                            Subtotal:{" "}
                            <input
                                type="text"
                                value={cappuccinoSubtotal.toFixed(2)}
                                readOnly
                                className="w-[50px]"
                            />
                        </td>
                    </tr>

                    <tr>
                        <th className="p-3"></th>
                        <td className="p-3 text-right">
                            <strong>Total price:</strong>
                        </td>
                        <td colSpan="2" className="p-3">
                            <input
                                type="text"
                                value={totalPrice.toFixed(2)}
                                readOnly
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </Layout>
    );
}

export default Menu;
