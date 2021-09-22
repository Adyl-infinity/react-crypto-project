// import React from 'react';
// import Modal from 'react-modal';
//
//
//
// const Modals = ({modalIsOpen,setIsOpen, register, handleSubmit, reset}) => {
//
//     const customStyles = {
//         content: {
//             top: '50%',
//             left: '50%',
//             right: 'auto',
//             bottom: 'auto',
//             marginRight: '-50%',
//             transform: 'translate(-50%, -50%)',
//         },
//     };
//
//     function closeModal() {
//         setIsOpen(false)
//     }
//
//
//
//     return (
//         <Modal
//             isOpen={modalIsOpen}
//             style={customStyles}
//             contentLabel="Example Modal"
//         >
//             <button onClick={closeModal}>x</button>
//             <h3 className="link__custom mb-8 text-center">Добавить проект</h3>
//             <form>
//                 <div className="flex flex-col">
//                     <label htmlFor="photo" className="link__custom text-center mb-3">Добавить фото</label>
//                     <input type="file" onChange={handleImage}/>
//
//                     <input type="text" className="border rounded-md mt-3" placeholder="Название проекта"/>
//
//                     <label htmlFor="date" className="link__custom text-center mt-3 mb-3">Дата начала проекта</label>
//                     <input type="date" className="border rounded-md" placeholder="date"/>
//
//                     <label htmlFor="date" className="link__custom text-center mt-3 mb-3">Дата окончания проекта</label>
//                     <input type="date" className="border rounded-md mb-5" placeholder="date"/>
//
//
//                     <input type="text" className="border rounded-md mb-5" placeholder="Автор Проекта"/>
//                     <input type="text" className="border rounded-md mb-5" placeholder="Заказчик Проекта"/>
//
//
//                     <button className="modal-btn">Добавить</button>
//                 </div>
//             </form>
//         </Modal>
//     );
// };
//
// export default Modals;