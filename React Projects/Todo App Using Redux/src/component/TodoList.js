import React, { useState } from "react";
import { connect } from "react-redux";
import * as MdIcons from "react-icons/md";
import * as TiIcons from "react-icons/ti";

function TodoList(props) {
  const [filter, setFilter] = useState("All");
  const handelFilter = (e) => {
    console.log(e.target.value);
    setFilter(e.target.value);
  };

  return props.todoItem.length ? (
    <div className="todo_list container mt-5 shadow-lg text-white p-4">
      <div className="d-flex justify-content-between">
        <div>Your Todo's :</div>
        <div>
          <select className="myfilter p-1 mb-2" onClick={handelFilter}>
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Incompleted">Incompleted</option>
          </select>
        </div>
      </div>
      {props.todoItem
        .filter((item) => {
          if (filter == "All") {
            return true;
          } else if (filter == "Completed") {
            return item.status;
          } else if (filter == "Incompleted") {
            return item.status === false;
          } else {
            return item;
          }
        })
        .map((item, i) => {
          return (
            <div
              key={item.id}
              className="d-flex justify-content-between align-items-center my-1  p-1"
            >
              <div className=" w-75 text-break text-wrap ">
                {i + 1}.&nbsp;{item.data}
              </div>
              <div className="mybtn_group d-flex w-25 justify-content-end ">
                <div className=" d-flex">
                  <div className="d-inline-block mt-1">
                    <label>
                      <input
                        type="radio"
                        name={`myradio${i}`}
                        defaultChecked={item.status === false}
                        onClick={(e) => {
                          props.handelIncompleted({
                            selectedInd: item.id,
                          });
                        }}
                      />
                      &nbsp;Incompleted
                    </label>
                    &nbsp;&nbsp;&nbsp;
                    <label>
                      <input
                        type="radio"
                        name={`myradio${i}`}
                        defaultChecked={item.status === true}
                        onClick={(e) => {
                          props.handelCompleted({
                            selectedInd: item.id,
                          });
                        }}
                      />
                      &nbsp;Completed
                    </label>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </div>
                </div>
                <div className=" d-flex">
                  <MdIcons.MdDelete
                    className="mybtn text-danger d-inline-block bg-white "
                    onClick={() => {
                      props.handelDelete(item.id);
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  ) : null;
}

const mapStateToProps = (state) => {
  return {
    todoItem: state.todoItem,
  };
};
const mapDispatchToProps = (dispatch) => ({
  handelCompleted: (val) => dispatch({ type: "ADD_COMPLETED", payload: val }),
  handelIncompleted: (val) =>
    dispatch({ type: "ADD_INCOMPLETED", payload: val }),
  handelDelete: (val) => dispatch({ type: "DELETE_ITEM", payload: val }),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
