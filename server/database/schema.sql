-- create table user (
--   id int unsigned primary key auto_increment not null,
--   email varchar(255) not null unique,
--   password varchar(255) not null
-- );

-- create table item (
--   id int unsigned primary key auto_increment not null,
--   title varchar(255) not null,
--   user_id int unsigned not null,
--   foreign key(user_id) references user(id)
-- );

-- insert into user(id, email, password)
-- values
--   (1, "jdoe@mail.com", "123456");

-- insert into item(id, title, user_id)
-- values
--   (1, "Stuff", 1),
--   (2, "Doodads", 1);
-- 1. Table category

CREATE TABLE category (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE program (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    synopsis TEXT,
    poster VARCHAR(255),
    country VARCHAR(255),
    year INT,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES category(id)
);

CREATE TABLE actor (
    id INT PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    birth_date DATE
);

CREATE TABLE program_actor (
    actor_id INT,
    program_id INT,
    PRIMARY KEY (actor_id, program_id),
    FOREIGN KEY (actor_id) REFERENCES actor(id) ON DELETE CASCADE,
    FOREIGN KEY (program_id) REFERENCES program(id) ON DELETE CASCADE
);

CREATE TABLE season (
    id INT PRIMARY KEY AUTO_INCREMENT,
    program_id INT NOT NULL,
    number INT NOT NULL,
    year INT,
    description TEXT,
    FOREIGN KEY (program_id) REFERENCES program(id) ON DELETE CASCADE
);

CREATE TABLE episode (
    id INT PRIMARY KEY AUTO_INCREMENT,
    season_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    number INT,
    synopsis TEXT,
    FOREIGN KEY (season_id) REFERENCES season(id) ON DELETE CASCADE
);

CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    bio TEXT
);

CREATE TABLE watch_list (
    user_id INT,
    episode_id INT,
    seen BOOLEAN DEFAULT FALSE,
    liked BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (user_id, episode_id),
    FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE,
    FOREIGN KEY (episode_id) REFERENCES episode(id) ON DELETE CASCADE
);

CREATE TABLE comment (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    episode_id INT NOT NULL,
    comment TEXT,
    rate INT CHECK(rate BETWEEN 0 AND 10),
    FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE,
    FOREIGN KEY (episode_id) REFERENCES episode(id) ON DELETE CASCADE
);
