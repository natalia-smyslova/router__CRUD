[![Build status](https://ci.appveyor.com/api/projects/status/tg4dfe7jmp5d5f75/branch/main?svg=true)](https://ci.appveyor.com/project/natalia-smyslova/router-crud/branch/main)

[![Netology AHJ](https://github.com/natalia-smyslova/router__CRUD/actions/workflows/web.yml/badge.svg)](https://github.com/natalia-smyslova/router__CRUD/actions/workflows/web.yml)

CRUD
===

Вам необходимо реализовать CRUD при работе с HTTP с использованием Router.

Backend вы можете либо написать сами, либо взять готовый из каталога `backend`.

Нас интересует только ID, content и created, в качестве остальных значений вроде имени и фото, можете поставить заглушки.

## Общая механика

При нахождении на странице `/` отображается список существующих постов, GET на адрес http://localhost:7070/posts. Полученные данные отображаются в виде карточек:

Кнопка «Создать пост» ведёт на страницу добавления (см. ниже) `/posts/new`. Помните про регулярные выражения.

При клике на саму карточку происходит переход на страницу просмотра поста (см. ниже) `/posts/{postId}`.

### Страница создания

На странице создания `/posts/new` отображается карточка создания:

При нажатии на кнопку «Опубликовать» пост сохраняется, после чего осуществляется редирект на главную страницу. POST на адрес http://localhost:7070/posts body: `{"id": 0, "content": "То, что введено в поле ввода"}`.

При нажатии на крестик в верхнем правом углу происходит редирект на главную без сохранения. Advanced: можете сохранить в localStorage и потом вытаскивать оттуда.

### Страница просмотра

На странице просмотра `/posts/{id}` отображается карточка просмотра:

При клике на кнопку «Удалить» происходит удаление поста, после чего осуществляется редирект на главную страницу. DELETE на адрес http://localhost:7070/posts/{id}.

При клике на кнопку «Редактировать» карточка просмотра заменяется карточкой редактирования:

![Edit](./assets/edit.png)

На карточке редактирования:
* кнопка «Сохранить» приводит к сохранению поста и  отображению карточки просмотра с обновлёнными данными. POST на адрес http://localhost:7070/posts body: `{"id": не 0, "content": "То, что введено в поле ввода"}`;
* кнопка крестик приводит к возврату к карточке просмотра.

**Важно**:

1. Не смотрите на то, как это реализовано на Фейсбуке — механика изменена.
1. Но вы можете подглядеть, как пользователю отображается загрузка, сетевые операции добавления, сохранения, удаления.
1. React Router позволяет использовать регулярные выражения в роутах: https://github.com/pillarjs/path-to-regexp/tree/v1.7.0.

