import React from 'react'
import styled from 'styled-components'
import { useSearchParams, useNavigate } from 'react-router-dom'

export const TermsAndConditions = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate()
    const texts = {
        createPost: ["Умови використання сайту продажу автомобілів CARSALEO для створення публікацій включає наступне", `1. Заявник повинен бути законним власником автомобіля, який він пропонує для продажу. Він також повинен мати всі необхідні документи для переоформлення прав власності на автомобіль на іншу особу
    
        2. Заявник повинен забезпечити точність та повноту інформації, наданої в оголошенні. Він повинен зазначити всі відомі йому деталі щодо стану автомобіля, його характеристик, вартості, місця знаходження та інші відповідні деталі.
        
        3. Заявник повинен забезпечити, що фотографії, надані в оголошенні, відображають дійсний стан автомобіля та його вигляд.
        
        4. Заявник повинен розмістити оголошення тільки в тому розділі сайту, який відповідає за продаж автомобілів. Він не повинен розміщувати оголошення, що містять неправдиву або обманливу інформацію.
        
        5. Сайт має право відхилити будь-яке оголошення, яке не відповідає зазначеним умовам, або оголошення, яке не є відповідним для сайту.
        
        6. Заявник зобов'язується не зловживати послугами сайту та не порушувати права інших користувачів.
        
        7. Сайт не несе відповідальності за будь-які транзакції, що відбуваються між покупцем та продавцем. Кожен користувач самостійно зобов'язаний проводити всі необхідні перевірки, перш ніж укладати угоди з іншими користувачами.
        
        8. Заявник розуміє та погоджується з тим, що сайт може збирати та обробляти персональні дані, надані користувачем, відповідно до політики конфіденційності сайту.
        
        9. Сайт залишає за собою право змінювати ці умови в будь-який час та без повідомлення користувачів. Продовження використання сайту після зміни умов означає прийняття нових умов користування.
        
        10. Ці умови є правовим договором між заявником та сайтом та регулюють використання послуг сайту. Будь-які спори, що виникають між заявником та сайтом, повинні бути вирішені відповідно до законодавства.
        
        11. Користувач, який розміщує оголошення на сайті, погоджується відшкодувати будь-яку шкоду, яку сайт може понести внаслідок порушення цих умов.
    
        12. Користувачі, які розміщують оголошення на сайті, погоджуються з тим, що сайт може використовувати їхні контактні дані для зв'язку з ними стосовно їхнього оголошення.
        `],
        general: ["Умови використання сайту для продажу автомобілів CARSALEO включає наступне", `1. Реєстрація: Користувачі повинні зареєструватися на Сайті та створити профіль, щоб мати можливість продавати або купувати автомобілі.

        2. Правила використання: Сайт може мати правила використання, які забороняють певні типи вмісту, наприклад, незаконні пропозиції, дискримінація, образи, нецензурні вирази тощо.
        
        3. Заборона на шахрайство: Сайт може заборонити будь -які дії, які можна розглядати як шахрайство, наприклад, спроби продати автомобіль із фальшивою документацією або помилковим описом.
        
        4. Заборона щодо несанкціонованого доступу: Сайт повинен забороняти спроби несанкціонованого доступу до користувачів або системи сайту.
        
        5. Комісія: Сайт може взяти комісію з продажу автомобілів. Комісія може бути фіксованою або відсотковою від вартості продажу.
        
        6. Правила оплати: Сайт може мати правила оплати, які визначають, як користувачі повинні платити за продаж автомобіля.
        
        7. Відповідальність: Сайт несе відповідальність за обробку особистих даних користувачів та захищає їх конфіденційність. Крім того, сайт повинен обмежити свою відповідальність щодо технічних збоїв або помилок, які можуть статися на сайті.
        
        8. Авторські права: Сайт повинен захищати авторські права на будь -який вміст, опублікований на його сторінках, включаючи фотографії та текстові описи автомобілів.
        
        9. Резолюція суперечок: Сайт може мати правила вирішення суперечок між продавцями та покупцями, наприклад, звертаючись до адміністраторів сайту або третьою стороною.
        
        10. Зміни в умовах: Сайт може мати право змінювати умови використання в будь -який час, і користувачі повинні бути повідомлені про цю зміну.
        `]
    }

    return (
        <Container>
            <SubHeader>{texts[searchParams.get("type").toString()] ? texts[searchParams.get("type").toString()][0] : navigate("/")}:</SubHeader>
            {texts[searchParams.get("type").toString()] ? texts[searchParams.get("type").toString()][1] : null}
        </Container>
    )
}

const SubHeader = styled.h2`
    margin: 0;
    margin-bottom: 20px;
`

const Container = styled.div`
    padding: 20px;
    white-space: pre-line;
    box-sizing: border-box;
    width: 100%;
    height: max-content;
    background: #cc4343;
    border-radius: 5px;
`