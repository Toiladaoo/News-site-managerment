import React from 'react';
import DetailNew from './modal/DetailNew';
import AddNews from './AddNewsPage';
import StatusNews from './component/StatusNews';
import "./component/News.css";
import { MyTable } from '../../../components/template/table/MyTable/MyTable';
import CustomMultiSelect from '../../../components/template/multiselect/CustomMultiSelect/CustomMultiSelect';

function News(props) {
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
        <div className='padding-body'>
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
                <div className="feature_of_customer">
                
                  <button className="btnAdd">
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='state_news'>
            <CustomMultiSelect  selectList={state}/>
          </div>
            <MyTable/>
        </div>
    );
}

export default News;