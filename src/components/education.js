import React from 'react';
import '../css/education.css'
import { Icon } from 'react-icons-kit'
import {fileText2} from 'react-icons-kit/icomoon/fileText2'


const Education = () => {
    return (
        <div className="wrap">
            <table className="table">
                <caption className="info"><h3>Информация об уровне образования, формах обучения,
                    нормативном сроке обучения, о сроке действия
                    государственной аккредитации образовательной программы
                    (при наличии государственной аккредитации),
                    о языках, на которых осуществляется образование (обучение)</h3></caption>

                <tr>
                    <th rowSpan="2">Код</th>
                    <th rowSpan="2">Наименование</th>
                    <th rowSpan="2">Уровень образования</th>
                    <th rowSpan="2">Языки, на которых осуществляется образование (обучение)</th>
                    <th colSpan="3">Нормативный срок обучения (форма обучения)</th>
                    <th rowSpan="2">link</th>
                </tr>

                <tr className="th" >
                    <td >очная</td>
                    <td >очно-заочная</td>
                    <td >заочная</td>
                </tr>
                <tr>
                    <td>09.03.03</td>
                    <td>Прикладная информатика</td>
                    <td>Высшее образование - бакалавриат</td>
                    <td>Русский язык</td>
                    <td>4 года</td>
                    <td>5 лет</td>
                    <td></td>
                    <td><a href="https://drive.google.com/drive/folders/1qj19U6GwvV5fUCYkYccKnqIm7WdtPLbM?usp=sharing"><Icon size={32} icon={fileText2} /></a></td>
                </tr>
                <tr >
                    <td>37.03.01</td>
                    <td>Психология</td>
                    <td>Высшее образование - бакалавриат</td>
                    <td>Русский язык</td>
                    <td>4 года</td>
                    <td>5 лет</td>
                    <td></td>
                    <td><a href="https://drive.google.com/drive/folders/1ZHVqoyHL_TpiBfiRzXVj-eOH-wnvkZ8E?usp=sharing"><Icon size={32} icon={fileText2} /></a></td>
                </tr>
                <tr >
                    <td>38.03.01</td>
                    <td>Экономика</td>
                    <td>Высшее образование - бакалавриат</td>
                    <td>Русский язык</td>
                    <td>4 года</td>
                    <td>5 лет</td>
                    <td></td>
                    <td><a href="https://drive.google.com/drive/folders/1pNn12BZOBLM-wubYYvBWCOJ-evZbRwpy?usp=sharing"><Icon size={32} icon={fileText2} /></a></td>
                </tr>
                <tr >
                    <td>38.03.04</td>
                    <td>Государственное и муниципальное управлениее</td>
                    <td>Высшее образование - бакалавриат</td>
                    <td>Русский язык</td>
                    <td>4 года</td>
                    <td>5 лет</td>
                    <td></td>
                    <td><a href="https://drive.google.com/drive/folders/1iQbUjEEvKeG_XZ8m8Y0wygXcjUWSI1L3?usp=sharing"><Icon size={32} icon={fileText2} /></a></td>
                </tr>
            </table>
        </div>
    );
};

export default Education;