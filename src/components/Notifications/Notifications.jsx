import css from './Notifications.module.css';

//notifications bileseni herhangi bir feedback olmadığında
//  kullanıcıya bir mesaj göstermek için kullanılır

export default function Notifications({ message }) {
    return (
        <p className={css.message}>{message}</p>
    );
}
