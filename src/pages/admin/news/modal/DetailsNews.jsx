import React, { useEffect, useState } from "react";
import "../../../../assets/css/Pages/news/postNew.css";
import {
  ArrowCounterClockwise,
  ClosedCaptioning,
  ImageSquare,
  Link,
  ListNumbers,
  TextBolder,
  TextItalic,
  UploadSimple,
  X,
} from "phosphor-react";
import { ICON_SIZE_EXTRA_LARGE } from "../../../../utils/constraint";
import Dropdown from "../../../../components/Dropdown/DropDown";
import toast from "react-hot-toast";
import {
  getNewsDetail,
  getNewsTypeDropdownData,
  setAction,
} from "../../../../services/NewsService";
import { MyButton } from "../../../../components";

function DetailsNews({
  newsSelected = {},
  buttonType,
  isAdmin = false,
  handleClose = function () {},
}) {
  const [isError, setIsError] = useState({
    title: false,
    sum: false,
    type: false,
    content: false,
    image: false,
  });
  const [dataDetails, setDataDetails] = useState({});
  const [items, setItems] = useState([]);

  const [title, setTitle] = useState("");
  const [sum, setSum] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmitPost = () => {
    if (title === "") {
      setIsError({ ...isError, title: true });
      toast.error("Title empty, please enter title ");
    } else if (sum === "") {
      setIsError({ ...isError, title: false, sum: true });
      toast.error("Sumary empty, please enter sumary ");
    } else if (type === "") {
      setIsError({ ...isError, sum: false, type: true });
      toast.error("Type empty, please enter type ");
    } else if (content === "") {
      setIsError({ ...isError, type: false, content: true });
      toast.error("Content empty, please enter content ");
    } else if (image === null) {
      setIsError({ ...isError, content: false, image: true });
      toast.error("Image empty, please enter a image ");
    } else {
      toast.success("Submit success");
    }
    console.log(title, content, sum, image, type, image);
  };

  const handleActionButtons = async (type) => {
    let res = null;
    switch (type) {
      case "decline": {
        res = await setAction(newsSelected.ID, "2");

        if (res.status === 200) {
          toast.success("News has been declined successfully");
          return;
        }
        break;
      }
      case "confirm": {
        res = await setAction(newsSelected.ID, "1");

        if (res.status === 200) {
          toast.success("News has been confirm successfully");
          return;
        }
        break;
      }
      default:
        break;
    }

    toast.error("Something went wrong");
    handleClose();
  };

  const handleImage = async (e) => {
    console.log(URL.createObjectURL(e.target.files[0]));
    await setImage(() => URL.createObjectURL(e.target.files[0]));
  };

  const getNewsType = async () => {
    try {
      let res = await getNewsTypeDropdownData();
      if (res.status === 200) {
        console.log(res.data);
        setItems(res.data);
      }
    } catch (e) {
      console.log(e.message);
      toast.error("Server went wrong");
    }
  };

  const fetchDetail = async () => {
    try {
      const data = await getNewsDetail(newsSelected.ID);
      if (data.status === 200) {
        setDataDetails(data.data);

        setContent(data.data.content);
        setTitle(data.data.title);
        setType(data.data.type);
        setSum(data.data.sub_content);
        setImage(data.data.image);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetail();
    getNewsType();
  }, []);

  return (
    <div className="add_post_container">
      <div className="add_post_header">
        <div className="add_post_header_title_box">
          <p className={isError.title ? "warning_empty" : ""}>
            Title<span className="required">*</span>
          </p>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={title || (dataDetails && dataDetails.title)}
          />
        </div>
        <div className="add_subtitle_box">
          <p className={isError.sum ? "warning_empty" : ""}>
            Summary<span className="required">*</span>
          </p>
          <textarea
            value={sum || (dataDetails && dataDetails.sub_content)}
            onChange={(e) => setSum(e.target.value)}
            className="input_summary"
            id="text"
            name="text"
            rows="3"
            cols="50"
          >
            {dataDetails.sub_content}
          </textarea>
          <p className={isError.type ? "warning_empty" : ""}>
            Type <span className="required">*</span>
          </p>
          <Dropdown
            value={newsSelected.type ?? type}
            setValue={setType}
            item={items}
            placeholder="Post type"
          />
        </div>
      </div>
      <div className="add_post_body">
        <div className="add_post_body_main_content">
          <p className={isError.content ? "warning_empty" : ""}>
            Main content<span className="required">*</span>
          </p>
          <div className="tool_bar_container">
            <TextBolder
              className="tool_bar_container--icon"
              size={ICON_SIZE_EXTRA_LARGE}
            />
            <TextItalic
              className="tool_bar_container--icon"
              size={ICON_SIZE_EXTRA_LARGE}
            />
            <Link
              className="tool_bar_container--icon"
              size={ICON_SIZE_EXTRA_LARGE}
            />
            <ImageSquare
              className="tool_bar_container--icon"
              size={ICON_SIZE_EXTRA_LARGE}
            />
            <ListNumbers
              className="tool_bar_container--icon"
              size={ICON_SIZE_EXTRA_LARGE}
            />
          </div>
          <textarea
            className="input_summary"
            id="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            name="text"
            rows="10"
            cols="50"
          ></textarea>
          <div className="main_content_image_box">
            <p className={isError.image ? "warning_empty" : ""}>
              Thumb nails<span className="required">*</span>
            </p>
            <div className="thumb_nails_img">
              {image ? (
                <div className="thumb_nails_img--image">
                  <div
                    className="btn_delete_img"
                    onClick={() => setImage(null)}
                  >
                    <X size={ICON_SIZE_EXTRA_LARGE} />
                  </div>
                  <img src={image} alt="" />
                </div>
              ) : (
                <>
                  <label htmlFor="thumb_nails_img">
                    <UploadSimple size={40} className="thumb_nails_img--icon" />
                  </label>
                  <p>Please enter a thumb nail for your post</p>
                  <input
                    onChange={handleImage}
                    hidden
                    id="thumb_nails_img"
                    type="file"
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <p>
        * After confirm this article, you cannot edit or delete it. Article just
        can be hide from website and save permanently in database.
      </p>
      <div className="add_post_footer w-100">
        {isAdmin ? (
          <div className="">
            <MyButton
              text={"Decline"}
              height={"50px"}
              width={"20em"}
              bgColor={"var(--color-error)"}
              fontColor={"var(--text-white)"}
              margin={"0 10px"}
              callback={() => handleActionButtons("decline")}
            />
            {dataDetails.action_code === "0" && (
              <MyButton
                text={"Comfirm"}
                height={"50px"}
                width={"20em"}
                bgColor={"var(--primary-color)"}
                fontColor={"var(--text-white)"}
                callback={() => handleActionButtons("confirm")}
              />
            )}
          </div>
        ) : (
          <button onClick={handleSubmitPost} className="button button_primary">
            {buttonType}
          </button>
        )}
      </div>
    </div>
  );
}

export default DetailsNews;
