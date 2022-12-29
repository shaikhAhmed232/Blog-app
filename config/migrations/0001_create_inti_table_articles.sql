CREATE SEQUENCE IF NOT EXISTS article_id_seq
    START WITH 1
    INCREMENT BY 1
    MINVALUE 1
    NO MAXVALUE
    CACHE 1;

CREATE TABLE IF NOT EXISTS articles (
    id BIGINT NOT NULL DEFAULT nextval('article_id_seq'::regclass),
    title VARCHAR(255) NOT NULL,
    descriptions text,
    created_at timestamp with time zone NOT NULL,
    CONSTRAINT articles_pk PRIMARY KEY (id)
);
