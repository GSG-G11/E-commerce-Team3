BEGIN;

DROP TABLE IF EXISTS meals CASCADE;

CREATE TABLE meals (
    id SERIAL PRIMARY KEY,
    name varchar(50) NOT NULL,
    description TEXT NOT NULL,
    category varchar(50) NOT NULL,
    price INT NOT NULL,
    img_url TEXT NOT NULL
);

INSERT INTO
    meals (name, description, category, price, img_url)
VALUES
    (
        'Meat',
        'Lorem ipsum dolor sit amet.Vel asperiores corporis aut modi cumque est cumque ipsum.Et consectetur incidunt non possimus vero non rerum saepe.',
        'Meat',
        22,
        'https://j.top4top.io/p_22931vc7h1.png'
    ),
    (
        'Meat',
        'Lorem ipsum dolor sit amet.Vel asperiores corporis aut modi cumque est cumque ipsum.Et consectetur incidunt non possimus vero non rerum saepe.',
        'Meat',
        33,
        'https://k.top4top.io/p_2293wwgep2.png'
    ),
    (
        'Salad',
        'Lorem ipsum dolor sit amet.Vel asperiores corporis aut modi cumque est cumque ipsum.Et consectetur incidunt non possimus vero non rerum saepe.',
        'Salads',
        33,
        'https://a.top4top.io/p_2293axzjy4.png'
    ),
    (
        'Soup',
        'Lorem ipsum dolor sit amet.Vel asperiores corporis aut modi cumque est cumque ipsum.Et consectetur incidunt non possimus vero non rerum saepe.',
        'Soups',
        33,
        'https://b.top4top.io/p_2293tsvro5.png'
    ),
    (
        'Salads',
        'Lorem ipsum dolor sit amet.Vel asperiores corporis aut modi cumque est cumque ipsum.Et consectetur incidunt non possimus vero non rerum saepe.',
        'Salads',
        13,
        'https://c.top4top.io/p_2293rlgmk6.png'
    ),
    (
        'Soup',
        'Lorem ipsum dolor sit amet.Vel asperiores corporis aut modi cumque est cumque ipsum.Et consectetur incidunt non possimus vero non rerum saepe.',
        'Soups',
        15,
        'https://c.top4top.io/p_22933slk31.png'
    );

COMMIT;