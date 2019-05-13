const phone = /[a-z,A-Z]{3,30}|[а-я,А-Я]{3,30}/i;



let name = new Validator(phone, 'name', 'Имя должно содеражить только буквы');

