/*1*/
CREATE TABLE "Participants"
(
    id      bigserial primary key,
    creator integer references "Users" (id) not null,
    guest   integer references "Users" (id) not null,
    unique (creator, guest)
);

CREATE TABLE "AccessSetting"
(
    id      integer primary key,
    creator bool not null,
    guest   bool not null
);

insert into "AccessSetting"
values (1, false, false),
       (2, false, true),
       (3, true, false),
       (4, true, true);

CREATE TABLE "Conversation"
(
    id           bigserial primary key,
    participants bigint references "Participants" (id) not null,
    blackList    integer references "AccessSetting" (id) default 1,
    favoriteList integer references "AccessSetting" (id) default 1,
    createdAt    timestamp                               default current_timestamp,
    updateAt     timestamp                               default current_timestamp
);

CREATE TABLE "Messages"
(
    id           bigserial primary key,
    body         varchar(255)                          not null,
    conversation bigint references "Conversation" (id) not null,
    sender       bigint references "Users" (id)        not null,
    createdAt    timestamp default current_timestamp,
    updateAt     timestamp default current_timestamp
);

CREATE TABLE "Catalogs"
(
    id          bigserial primary key,
    catalogName varchar(255)                          not null,
    chats       bigint references "Conversation" (id) not null unique,
    userId      bigint references "Users" (id)        not null
);

/*2*/
ALTER TYPE "enum_Users_role" ADD VALUE 'moderator';

INSERT INTO "Users" ("firstName", "lastName", "displayName", password, email, role)
VALUES ('Moderator', 'Moderator', 'Moderator', '123456', 'email@mail.com', 'moderator');

SELECT role, count(*) FROM "Users"  GROUP BY  role;

/*3*/
UPDATE "Users"
SET "balance" = balance + CASHBACK * 0.1
FROM(
    SELECT "userId", sum(prize) AS CASHBACK FROM "Contests"
    INNER JOIN "Users" ON "Contests"."userId" = "Users".id
    WHERE ("createdAt" BETWEEN ('2019-12-25') AND ('2020-01-14'))
    GROUP BY "userId") as something
WHERE "userId" = "Users".id;

/*4*/
UPDATE "Users"
SET "balance" = balance + 10
WHERE id = ANY (SELECT id FROM "Users" WHERE role = 'creator' ORDER BY rating DESC LIMIT 3);

