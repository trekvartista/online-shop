import { useState } from "react";
import BrandModal from "../components/modals/BrandModal";
import ItemModal from "../components/modals/ItemModal";
import TypeModal from "../components/modals/TypeModal";

const Admin = () => {
    const [typeVisible, setTypeVisible] = useState(false);
    const [brandVisible, setBrandVisible] = useState(false);
    const [itemVisible, setItemVisible] = useState(false);

    return (
        <div className="flex justify-center items-center flex-col">
            <div className="flex flex-col">
                <TypeModal show={typeVisible} setVisible={setTypeVisible}/>
                <BrandModal show={brandVisible} setVisible={setBrandVisible}/>
                <ItemModal show={itemVisible} setVisible={setItemVisible}/>
            </div>
            
        </div>
    );
};

export default Admin;
