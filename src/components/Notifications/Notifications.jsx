import css from './Notifications.module.css';

//notifications bileşeni herhangi bir feedback olmadığında
//  kullanıcıya bir mesaj göstermek için kullanılır

export default function Notifications() {
    return (
        <p className={css.message}>No feedback given</p>
    );
}
