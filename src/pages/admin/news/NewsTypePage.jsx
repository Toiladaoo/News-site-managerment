import React, { useEffect, useState } from "react";
import { MyTable } from "../../../components/template/table/MyTable/MyTable";
import { CaretLeft } from "phosphor-react";
import { ICON_SIZE_BIG } from "../../../utils/constraint";
import AddNewsType from "./AddNewsType";
import { getNewsTypeList, deleteType } from "../../../services/NewsType";
import { useDispatch, useSelector } from "react-redux";
import { tableSelector } from "../../../selectors/consumerSelector";
import toast from "react-hot-toast";
import tableSlice from "../../../features/table/tableSlice";

function NewsType(props) {
  const [isShowAdd, setIsShowAdd] = useState(false);
  const [types, setTypes] = useState([]);
  const [code, setCode] = useState([]);
  const [name, setName] = useState([]);
  const [des, setDes] = useState([]);
  const tableData = useSelector(tableSelector);
  const dispatch = useDispatch();

  const getTypesData = async () => {
    try {
      const data = await getNewsTypeList();
      if (data != null) {
        console.log(data.data);
        setTypes(data);
      }
      return data;
    } catch (error) {
      return null;
    }
  };

  const handleClearInput = () => {
    setCode("");
    setName("");
    setDes("");
  };

  const handleDisplayInsertType = async () => {
    await getTypesData();
    await setIsShowAdd(false);
    await handleClearInput();
  };
  useEffect(() => {
    getTypesData();
  }, [isShowAdd]);

  const handleDelete = async () => {
    let list = [...tableData.selectList];
    if (list.length === 0) {
      toast.error("Choose item to delete");
      return;
    }
    for (let i = 0; i < list.length; i++) {
      let res = await deleteType(list[i].id);
      if (!res) {
        toast.error("Something went wrong");
        return;
      }
    }
    toast.success("Delete successfully");
    dispatch(tableSlice.actions.handleSelected([]));
    getTypesData();
  };

  return (
    <div className="padding-body">
      {!isShowAdd && (
        <>
          <div className="header_of_customer">
            <div className="row">
              <div className="col-8">
                <div className="header_bar_left_Cus ">
                  <div className="title_total_number_Cus">
                    <h3 className="title_Cus">News Types </h3>
                    <p className="total_number_Cus">{types.length}</p>
                  </div>
                  <p className="introduce_Cus">
                    View, add, edit and delete your types details.{" "}
                  </p>
                </div>
              </div>

              <div className="col-4">
                <div className="feature_of_customer">
                  <button className="btnAdd" onClick={() => setIsShowAdd(true)}>
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <MyTable list={types} showCheckBox={true} deleteCallback={handleDelete} />
        </>
      )}

      {isShowAdd && (
        <div className="add_type_container">
          <div
            className="go_back_button_container"
            onClick={handleDisplayInsertType}
          >
            <CaretLeft size={ICON_SIZE_BIG} />
          </div>
          <h3>Add new type</h3>
          <AddNewsType
            code={code}
            name={name}
            des={des}
            setCode={setCode}
            setDes={setDes}
            setName={setName}
            clearInput={handleDisplayInsertType}
          />
        </div>
      )}
    </div>
  );
}

export default NewsType;
