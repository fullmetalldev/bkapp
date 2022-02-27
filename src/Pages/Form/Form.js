import React, {useState} from 'react';
import "./FormStyles.css";

const Form = ({form, setForm}) => {
    const [content, setContent] = useState('form');
    const contentHandler = () => {
        return setContent('thanks')
    };
    return (
        <>
            <div className="formBlackLayer" onClick={() => setForm(!form)}>

            </div>
            {content === 'form'
                ? <div className="formBack">
                    <div className="formBack-layer">

                    </div>

                    <form className="form">


                        <h2>Напишите нам</h2>

                        <input className="form_inp" type="number" placeholder="Телефон"/>
                        <input className="form_inp" type="text" placeholder="Имя"/>

                        <div className="checkbox">
                            <input type="checkbox" checked={true}/>
                            <span>Ваши данные защищены и используются только для <br/> связи с вами</span>
                        </div>

                        <button onClick={() => contentHandler()} className="form_button">Отправить</button>

                    </form>

                </div>
                : <div className="thanks">
                        <div className="thanks__layer">

                        </div>
                        <div className="thanks__content">
                            <div onClick={() => setForm(!form)} className="thanks-close">
                                X
                            </div>
                            <h2>Спасибо!</h2>
                            <p>Ваше сообщение отправлено!
                                Менеджер свяжется с вами в ближайшее время.</p>
                        </div>
                    </div>
            }
        </>
    );
};

export default Form;