import React, { useState } from "react";
import Modal from "react-modal";
import { AiFillRightCircle,AiFillLeftCircle } from "react-icons/ai";

function Items({ item,data, index }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(index);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentIndex(index);
  };

  const next = () => {
    const nextIndex = (currentIndex + 1) % data.length;
    setCurrentIndex(nextIndex);
  };

  const prev = () => {
    const prevIndex = (currentIndex - 1 + data.length) % data.length;
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="items">
      <img
        src={item.img}
        alt="xyz"
        height="300px"
        width="300px"
        onClick={openModal}
        style={{ cursor: "pointer" }}
      />
      <div className="user-content">
        <div className="user-details">
        <p>{item.title}</p>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Item Details Modal"
        ariaHideApp={false} 
      >
        <div>
          <img            
            src={data[currentIndex].img}            
            alt="img"
            height="300px"
            width="450px"
          />
          <div className="user-content">
            <div className="user-details">             
              <p>{data[currentIndex].title}</p>
            </div>
          </div>
          <button style={{position:'absolute', left: '20px'}} onClick={prev}> <AiFillLeftCircle size={20}/></button>
          <button style={{position:'absolute', right: '20px'}} onClick={next}><AiFillRightCircle size={20}/></button>
          {/* <button onClick={closeModal}>Close</button> */}
        </div>
      </Modal>
    </div>
  );
}

export default Items;
