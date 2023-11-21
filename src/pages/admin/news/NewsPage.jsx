import React, { useEffect, useState } from "react";
import "./component/News.css";
import { MyTable } from "../../../components/template/table/MyTable/MyTable";
import CustomMultiSelect from "../../../components/template/multiselect/CustomMultiSelect/CustomMultiSelect";
import PostPage from "../../news/PostPage";
import AddNew from "../../news/AddNew";
import { CaretLeft } from "phosphor-react";
import { ICON_SIZE_BIG } from "../../../utils/constraint";
import toast from "react-hot-toast";
import {
  getActionList,
  getNewsList,
  getNewsListByAction,
} from "../../../services/NewsService";
import { deleteUser } from "../../../services/UserService";
import tableSlice from "../../../features/table/tableSlice";
import { useDispatch, useSelector } from "react-redux";
import { tableSelector } from "../../../selectors/consumerSelector";
import DetailsNews from "./modal/DetailsNews";
import { NewsTableFromJson } from "../../../utils/handleData";
function News(props) {
  const [isShowAdd, setIsShowAdd] = useState(false);
  const [isShowAddNew, setIsShowAddNew] = useState(false);
  const [title, setTitle] = useState("");
  const [sum, setSum] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState(null);
  const [buttonType, setButtonType] = useState("Add");
  let state = [
    {
      code: 0,
      name: "New",
    },
    {
      code: 1,
      name: "Waiting approval",
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

  const handleClose = () => {
    setContent("");
    setSum("");
    setTitle("");
    setType("");
    setImage(null);
    setIsShowAdd(false);
  };
  const [list, setList] = useState([]);
  const [actionList, setActionList] = useState([]);

  const [activeIndex, setActiveIndex] = useState("0");

  const [dataSelected, setDataSelected] = useState({});
  const [isShowDetail, setIsShowDetail] = useState(false);

  const tableData = useSelector(tableSelector);
  const dispatch = useDispatch();

  const getNewsData = async () => {
    try {
      let res = await getNewsListByAction(activeIndex);
      if (res.status === 200) {
        setList([]);
        for (let i = 0; i < res.data.length; i++) {
          setList((list) => [...list, NewsTableFromJson(res.data[i])]);
        }
      }
    } catch (e) {
      console.log(e.message);
      toast.error("Server went wrong");
    }
  };
  const getActionData = async () => {
    try {
      let res = await getActionList();

      if (res.status === 200) {
        setActionList(res.data);
      }
    } catch (e) {
      console.log(e.message);
      toast.error("Server went wrong");
    }
  };
  const handleButtonAction = async (data, type) => {
    switch (type) {
      case "details": {
        await setDataSelected(data);
        setIsShowDetail(true);
        break;
      }
      case "delete": {
        await deleteUser(data.id);
        break;
      }
      default:
        break;
    }
  };
  const handleCloseDetail = () => {
    setIsShowDetail(false);
  };
  const handleDelete = async () => {
    let list = [...tableData.selectList];
    if (list.length === 0) {
      toast.error("Choose item to delete");
      return;
    }
    for (let i = 0; i < list.length; i++) {
      let res = await deleteUser(list[i].id);
      if (!res) {
        toast.error("Something went wrong");
        return;
      }
    }
    toast.success("Deleted successfully");
    dispatch(tableSlice.actions.handleSelected([]));
    getNewsData();
  };

  useEffect(() => {
    getNewsData();
    getActionData();

    return () => {
      setList([]);
    };
  }, [activeIndex, isShowDetail, isShowAdd]);

  return (
    <div className="padding-body">
      {!isShowAdd && !isShowDetail && (
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
                <div
                  className="feature_of_customer"
                  onClick={() => setIsShowAdd(true)}
                >
                  <PostPage />
                </div>
              </div>
            </div>
          </div>
          <div className="state_news">
            <CustomMultiSelect
              selectList={actionList}
              onSelected={setActiveIndex}
              activeIndex={activeIndex}
            />
          </div>
          <MyTable
            showCheckBox={true}
            callback={handleButtonAction}
            deleteCallback={handleDelete}
            list={list.length > 0 ? list : []}
          />
        </>
      )}

      {isShowDetail && (
        <>
          <div
            className="go_back_button_container"
            onClick={() => setIsShowDetail(false)}
          >
            <CaretLeft size={ICON_SIZE_BIG} />
          </div>
          <h3>View news</h3>
          <DetailsNews
            onClick={() => setIsShowDetail(false)}
            handleClose={handleCloseDetail}
            buttonType="Save"
            newsSelected={dataSelected}
            //change this when making login data saving
            isAdmin={true}
          />
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
          <AddNew
            title={title}
            setTitle={setTitle}
            content={content}
            setContent={setContent}
            sum={sum}
            setSum={setSum}
            image={image}
            setImage={setImage}
            type={type}
            setType={setType}
            onClick={() => setIsShowAdd(false)}
            handleClose={handleClose}
            getNewsListByAction={getNewsListByAction}
          />
        </>
      )}
    </div>
  );
}

export default News;
