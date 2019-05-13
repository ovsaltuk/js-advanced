
let name = new Validator(/[a-z,A-Z]{3,30}|[а-я,А-Я]{3,30}/i, 'name',
    'Имя должно содеражить только буквы');

let phone = new Validator(/\+7\(\d{3}\)\d{3}\-\d{4}/,'phone',
    'Телефон должен соответствовать формату +7(000)000-0000');


let mail = new Validator(/.+@.+\.(ru|com)/, 'mail',
    'E-mail имеет вид mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru.');