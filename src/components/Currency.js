import {React,useContext} from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {

    const { dispatch } = useContext(AppContext);

    const handleChangeCurreny = (event) => {
        console.log('change currency',event.target.value);
        const actionObj = {
            type:"CHG_CURRENCY",
            payload: event.target.value
        }

        dispatch(actionObj);


    }
    const options = [
        {name:'$ Dollar', value:"$", selected: true, symbol:'$'},
        {name:'£ Pound', value:"£", selected: false, symbol:'£'},
        {name:'€ Euro', value:"€", selected: false, symbol:'€'},
        {name:'₹ Ruppee', value:"₹", selected: false, symbol:'₹'},
    ]

    const optionlist = [];
    options.forEach((opt)=> {
        const optTag = <option value={opt.value} key={opt.symbol}>{opt.name}</option>
        optionlist.push(optTag);
    });

    const res = <div>
                    <select className="select-tag" onChange={(event) => handleChangeCurreny(event)} >
                            {optionlist}
                    </select>
                </div>
    return res;
}

export default Currency