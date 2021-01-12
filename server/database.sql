/*in terminal enter psql*/
CREATE DATABASE perntodo;
/* \c perntodo*/
CREATE TABLE todo(
todo_id SERIAL PRIMARY KEY,
description VARCHAR(225)
);

/*to add todo*/

INSERT INTO todo(description) VALUES ("what to do");