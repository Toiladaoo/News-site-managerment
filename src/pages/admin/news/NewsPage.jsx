import React, { useState } from "react";
import DetailNew from "./modal/DetailNew";
import AddNews from "./AddNewsPage";
import StatusNews from "./component/StatusNews";
import "./component/News.css";
import { MyTable } from "../../../components/template/table/MyTable/MyTable";
import CustomMultiSelect from "../../../components/template/multiselect/CustomMultiSelect/CustomMultiSelect";
import PostPage from "../../news/PostPage";
import AddNew from "../../news/AddNew";
import { CaretLeft } from "phosphor-react";
import { ICON_SIZE_BIG } from "../../../utils/constraint";
function News(props) {
  const [isShowAdd, setIsShowAdd] = useState(false);
  const [isShowAddNew, setIsShowAddNew] = useState(false);
  const [title, setTitle] = useState("");
  const [sum, setSum] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState(null);
  let state = [
    {
      code: 0,
      name: "New",
    },
    {
      code: 1,
      name: "Awaiting approval",
    },
    {
      code: 2,
      name: "Published",
    },
    {
      code: 3,
      name: "Removed",
    },
  ];
 

  return (
    <div className="padding-body">
      {!isShowAdd && (
        <>
          <div className="header_of_customer">
            <div className="row">
              <div className="col-8">
                <div className="header_bar_left_Cus ">
                  <div className="title_total_number_Cus">
                    <h3 className="title_Cus">News List </h3>
                    <p className="total_number_Cus">10</p>
                  </div>
                  <p className="introduce_Cus">
                    View, add, edit and delete your news details.{" "}
                  </p>
                </div>
              </div>

              <div className="col-4">
                <div className="feature_of_customer" onClick={() => setIsShowAdd(true)}>
                  <PostPage  />
                </div>
              </div>
            </div>
          </div>
          <div className="state_news">
            <CustomMultiSelect selectList={state} />
          </div>
          <MyTable />
        </>
      )}
      {isShowAdd && (
        <>
         <div
            className="go_back_button_container"
            onClick={() => setIsShowAdd(false)}
          >
            <CaretLeft size={ICON_SIZE_BIG} />
          </div>
          <h3>Add news</h3>
          <AddNew  title={title}
            setTitle={setTitle}
            content={content}
            setContent={setContent}
            sum={sum}
            setSum={setSum}
            image={image}
            setImage={setImage}
            type={type}
            setType={setType} 
            onClick= {() => setIsShowAdd(false)}/>
        </>
      )}
    </div>
  );
}

export default News;
