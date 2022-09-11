CREATE EXTENSION IF NOT EXISTS pgcrypto;
alter table "public"."passes" add column "key" uuid
 null default gen_random_uuid();
