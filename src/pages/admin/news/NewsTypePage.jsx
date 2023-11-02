import React, { useState } from "react";
import { MyTable } from "../../../components/template/table/MyTable/MyTable";
import { CaretLeft } from "phosphor-react";
import { ICON_SIZE_BIG } from "../../../utils/constraint";
import AddNewsType from "./AddNewsType";

function NewsType(props) {
  const [isShowAdd, setIsShowAdd] = useState(false);

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
                    <p className="total_number_Cus">3</p>
                  </div>
                  <p className="introduce_Cus">
                    View, add, edit and delete your types details.{" "}
                  </p>
                </div>
              </div>

              <div className="col-4">
                <div className="feature_of_customer">
                  <button className="btnAdd" onClick={() => setIsShowAdd(true)}>Add</button>
                </div>
              </div>
            </div>
          </div>
          <MyTable />
        </>
      )}

      {isShowAdd && (
        <div className="add_type_container">
          <div
            className="go_back_button_container"
            
          >
            <CaretLeft size={ICON_SIZE_BIG} onClick={() => setIsShowAdd(false)} />
          </div>
          <h3>Add new type</h3>
          <AddNewsType/>
        </div>
      )}
    </div>
  );
}

export default NewsType;
