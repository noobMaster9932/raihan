CREATE TABLE public.master_user (
	id uuid NOT NULL DEFAULT uuid_generate_v4(),
	username varchar NOT NULL,
	"password" varchar NOT NULL,
	fullname varchar NOT NULL,
	is_active bool NOT NULL DEFAULT true,
	created_date timestamp NOT NULL DEFAULT now(),
	modified_date timestamp NOT NULL DEFAULT now()
);
