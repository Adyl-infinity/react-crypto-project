import React, {useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import axios from "axios";


const Home = () => {
    const [projects, setProjects] = useState([])
    const [IsOpen, setIsOpen] = useState(false);
    const {register, handleSubmit, reset} = useForm()
    const [image, setImage] = useState({})

    useEffect(() => {
        axios("https://6140aa7d357db50017b3d7d4.mockapi.io/api/gallery")
            .then(({data}) => {
                setProjects(data)
            })
    })

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    function closeModal() {
        setIsOpen(false)
    }

    const handleImage = (e) => {
        const formData = new FormData()
        formData.append("file", e.target.files[0])
        formData.append("upload_preset", "images")
        axios.post("https://api.cloudinary.com/v1_1/dthdafi0s/upload", formData)
            .then(({data}) => setImage(data))
    }

    const onSubmit = (d) => {
        d.image = image.url
        axios.post("https://6140aa7d357db50017b3d7d4.mockapi.io/api/gallery", d)
            .then(({data}) => {
                setProjects([...projects, data])
                closeModal()
                reset()
            })
    }



    return (
        <div className="main">
            <h3 className="project__desc">Проекты</h3>
          <div>
              <button className="modal-btn" onClick={() => setIsOpen(true)}>Добавить</button>
          </div>
            <div className="project__item">
                {
                    projects.map(el =>
                    <div key={el.id} className='box'>
                        <div className="project__img">
                            <img src={el.image} alt="" className="project__img"/>
                        </div>

                        <div className="mt-4">
                            <h4 className="description">Проект: {el.title}</h4>
                            <div className="description"><span>{el.start_date}</span> - <span>{el.end_date}</span></div>
                            <h4 className="description">Автор: {el.author}</h4>
                            <h4 className="description">Заказчик: {el.client}</h4>
                        </div>

                    </div>
                    )
                }
            </div>

            <div>
                <Modal
                    isOpen={IsOpen}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <button onClick={closeModal}>x</button>
                    <h3 className="link__custom mb-8 text-center">Добавить проект</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col">
                            <label htmlFor="photo" className="link__custom text-center mb-3">Добавить фото</label>
                            <input type="file" onChange={handleImage}/>

                            <input type="text" className="border rounded-md mt-3" placeholder="Название проекта" {...register("title")}/>

                            <label htmlFor="date" className="link__custom text-center mt-3 mb-3">Дата начала проекта</label>
                            <input type="date" className="border rounded-md" placeholder="date" {...register("start_date")}/>

                            <label htmlFor="date" className="link__custom text-center mt-3 mb-3">Дата окончания проекта</label>
                            <input type="date" className="border rounded-md mb-5" placeholder="date" {...register("end_date")}/>


                            <input type="text" className="border rounded-md mb-5" placeholder="Автор Проекта" {...register("author")}/>
                            <input type="text" className="border rounded-md mb-5" placeholder="Заказчик Проекта" {...register("client")}/>
                            <button className="add-btn">Добавить проект</button>
                        </div>
                    </form>
                </Modal>
            </div>
            {/*<Modals modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} register={register} handleSubmit={handleSubmit} reset={reset}/>*/}
        </div>
    );
};

export default Home;