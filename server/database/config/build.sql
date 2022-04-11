BEGIN;

DROP TABLE IF EXISTS products CASCADE;

CREATE TABLE meals (
    id SERIAL PRIMARY KEY,
    name varchar(50) NOT NULL,
    description TEXT NOT NULL,
    category varchar(50) NOT NULL,
    price INT NOT NULL,
    img_url TEXT NOT NULL
);

INSERT INTO meals (name,description,category,price,img_url) VALUES ('Product 1','Lorem ipsum dolor sit amet ','Category 1',10,'https://m.media-amazon.com/images/I/81MySRhmDnL._AC_SL1500_.jpg');

COMMIT;