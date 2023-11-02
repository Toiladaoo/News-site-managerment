import React, { useState } from "react";
import "../../assets/css/Pages/news/postNew.css";
import {
  ArrowCounterClockwise,
  ClosedCaptioning,
  ImageSquare,
  Link,
  ListNumbers,
  TextBolder,
  TextItalic,
  UploadSimple,
} from "phosphor-react";
import { ICON_SIZE_EXTRA_LARGE } from "../../utils/constraint";
import DropDown from "../../components/Dropdown/DropDown";
import { Dropdown } from "../../components";

function AddNew({
  title,
  setTitle,
  content,
  setContent,
  sum,
  setSum,
  image,
  setImage,
  type,
  setType,
}) {
  const handleSubmitPost = () => {
    console.log(title, content, sum, image, type, image);
  };

  const handleImage = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const items = [
    { content: "Business" },
    { content: "Entertainment" },
    { content: "General" },
    { content: "Health" },
    { content: "Science" },
    { content: "Sports" },
    { content: "Technology" },
  ];

  return (
    <div className="add_post_container">
      <div className="add_post_header">
        <div className="add_post_header_title_box">
          <p>
            Title<span className="required">*</span>
          </p>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Please enter a title..."
          />
        </div>
        <div className="add_subtitle_box">
          <p>
            Summary<span className="required">*</span>
          </p>
          <textarea
            value={sum}
            onChange={(e) => setSum(e.target.value)}
            className="input_summary"
            id="text"
            name="text"
            rows="3"
            cols="50"
          ></textarea>
          <Dropdown
            value={type}
            setValue={setType}
            item={items}
            placeholder="Post type"
          />
        </div>
      </div>
      <div className="add_post_body">
        <div className="add_post_body_main_content">
          <p>
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
            <p>
              Thumb nails<span className="required">*</span>
            </p>
            <div className="thumb_nails_img">
              {image ? (
                <div className="thumb_nails_img--image">
                  <ClosedCaptioning />
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
      <div className="add_post_footer">
        <button onClick={handleSubmitPost} className="button button_primary">
          Submit
        </button>
      </div>
    </div>
  );
}

export default AddNew;
