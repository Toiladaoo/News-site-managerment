import React, { useState } from "react";
import "../../assets/css/Pages/news/postNew.css";
import AddNew from "./AddNew";
import { CaretCircleLeft, CaretLeft } from "phosphor-react";
import { ICON_SIZE_EXTRA_LARGE } from "../../utils/constraint";

function PostPage(props) {
  const [isShowAddNew, setIsShowAddNew] = useState(false);
  const [title, setTitle] = useState("");
  const [sum, setSum] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState(null);

  const handleCloseAdd = () => {
    setIsShowAddNew(false);
  };

  const handleClearPost = () => {
    setTitle("");
    setSum("");
    setContent("");
    setType("");
    setImage(null);
  };

  return (
    <div className="post_page_box">
      {!isShowAddNew ? (
        <button
          onClick={() => setIsShowAddNew(true)}
          className="button button_primary"
        >
          Post a news
        </button>
      ) : (
        <div>
          <div className="goBack_container">
            <span>
              <CaretLeft
                onClick={handleCloseAdd}
                size={ICON_SIZE_EXTRA_LARGE}
              />
            </span>
            go back
          </div>
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
          />
        </div>
      )}
    </div>
  );
}

export default PostPage;
