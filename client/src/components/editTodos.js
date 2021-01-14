import React, { useState } from "react";

const EditTodos = ({ todoDescription, id }) => {
  const [openModal, setOpenModal] = useState(false);
  const [description, setDescription] = useState(todoDescription);

  const updateTodo = async (e) => {
    e.preventDefault();

    try {
      const body = { description };
      const response = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  const closeModal = () => {
    setOpenModal(false);
    setDescription(todoDescription);
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-warning"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Edit
      </button>

      {openModal ? (
        <div id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4>Edit todo</h4>
                <button type="button" onClick={closeModal}>
                  &times;
                </button>
              </div>

              <div className="modal-body">
                <input
                  type="text"
                  className="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={(e) => updateTodo(e)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default EditTodos;
