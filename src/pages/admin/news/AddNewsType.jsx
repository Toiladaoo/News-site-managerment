import React from "react";
import { Input } from "../../../components";
import toast from "react-hot-toast";
import { insertType } from "../../../services/NewsType";

function AddNewsType({clearInput, code, name, des, setName, setCode, setDes}) {

  const handleCodeTypeOnChange = (e) =>{
    setCode(e.target.value);
  }
  const handleNameTypeOnChange = (e) =>{
    setName(e.target.value);
  }
  const handleDesTypeOnChange = (e) =>{
    setDes(e.target.value);
  }

  const handleInsertType = async () =>{
    try {
      const insertInfo = {
        code: code,
        name: name,
        des: des,
      };
      const checkData = await insertType(insertInfo);
      if(checkData !=200){
        toast.error("Insert failed");
      }else{
        toast.success("Insert success");
        clearInput();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="add_type_container">
      <div className="row">
        <div className="col col-6">
          <Input label={"Type code"} onChange={handleCodeTypeOnChange}/>
        </div>
        <div className="col col-6">
          <Input label={"Type name"} onChange={handleNameTypeOnChange} />
        </div>
        <div className="col col-12">
          <Input label={"Description"} onChange={handleDesTypeOnChange} />
        </div>
      </div>
      <button className="btnAdd" onClick={handleInsertType}>Add</button>
    </div>
  );
}

export default AddNewsType;
