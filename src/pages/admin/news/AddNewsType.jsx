import React from 'react';
import { Input } from '../../../components';
import toast from "react-hot-toast";

function AddNewsType(props) {
    return (
        <div className="add_type_container">
        <div className="row">
          
          <div className="col col-6">
            <Input  label={"Type name"} />
          </div>
          <div className="col col-6">
            <Input  label={"Child name"} />
          </div>
          <div className="col col-12">
            <Input  label={"Description"} />
          </div>
        </div>
        <button className="btnAdd">
          Add
        </button>
      </div>
    );
}

export default AddNewsType;