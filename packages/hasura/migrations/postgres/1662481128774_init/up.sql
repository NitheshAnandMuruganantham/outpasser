SET check_function_bodies = false;
CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE public.class (
    name text NOT NULL,
    id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    department_id integer
);
COMMENT ON TABLE public.class IS 'year of students';
CREATE TABLE public.college_staff (
    id integer NOT NULL,
    class_id integer,
    department_id integer,
    name text NOT NULL,
    role text NOT NULL,
    hostel_id integer NOT NULL
);
CREATE SEQUENCE public.college_staff_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.college_staff_id_seq OWNED BY public.college_staff.id;
CREATE TABLE public.department (
    name text NOT NULL,
    id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);
COMMENT ON TABLE public.department IS 'department';
CREATE SEQUENCE public.department_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.department_id_seq OWNED BY public.department.id;
CREATE TABLE public.hostel (
    id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    name text NOT NULL,
    location text NOT NULL
);
COMMENT ON TABLE public.hostel IS 'database for hostels';
CREATE SEQUENCE public.hostel_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.hostel_id_seq OWNED BY public.hostel.id;
CREATE TABLE public.passes (
    title text NOT NULL,
    reason text NOT NULL,
    start_datetime timestamp with time zone NOT NULL,
    end_datetime timestamp with time zone NOT NULL,
    hod_rejected boolean DEFAULT false NOT NULL,
    hod_approved boolean DEFAULT false NOT NULL,
    id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    student_id integer NOT NULL,
    checked_out boolean DEFAULT false,
    checked_in boolean DEFAULT false,
    hostel_approval boolean DEFAULT false,
    hostel_rejected boolean DEFAULT false,
    class_approved boolean DEFAULT false,
    class_rejected boolean DEFAULT false
);
COMMENT ON TABLE public.passes IS 'table for outpass requests';
CREATE SEQUENCE public.passes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.passes_id_seq OWNED BY public.passes.id;
CREATE TABLE public.staff_role (
    role text NOT NULL
);
COMMENT ON TABLE public.staff_role IS 'roles of the staff';
CREATE TABLE public.students (
    name text NOT NULL,
    rool text NOT NULL,
    dob date NOT NULL,
    phone text NOT NULL,
    id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    hostel_id integer,
    department_id integer,
    class_id integer
);
COMMENT ON TABLE public.students IS 'table for students';
CREATE SEQUENCE public.students_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.students_id_seq OWNED BY public.students.id;
CREATE SEQUENCE public.year_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.year_id_seq OWNED BY public.class.id;
ALTER TABLE ONLY public.class ALTER COLUMN id SET DEFAULT nextval('public.year_id_seq'::regclass);
ALTER TABLE ONLY public.college_staff ALTER COLUMN id SET DEFAULT nextval('public.college_staff_id_seq'::regclass);
ALTER TABLE ONLY public.department ALTER COLUMN id SET DEFAULT nextval('public.department_id_seq'::regclass);
ALTER TABLE ONLY public.hostel ALTER COLUMN id SET DEFAULT nextval('public.hostel_id_seq'::regclass);
ALTER TABLE ONLY public.passes ALTER COLUMN id SET DEFAULT nextval('public.passes_id_seq'::regclass);
ALTER TABLE ONLY public.students ALTER COLUMN id SET DEFAULT nextval('public.students_id_seq'::regclass);
ALTER TABLE ONLY public.college_staff
    ADD CONSTRAINT college_staff_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.department
    ADD CONSTRAINT department_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.hostel
    ADD CONSTRAINT hostel_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.passes
    ADD CONSTRAINT passes_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.staff_role
    ADD CONSTRAINT staff_role_pkey PRIMARY KEY (role);
ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.class
    ADD CONSTRAINT year_pkey PRIMARY KEY (id);
CREATE TRIGGER set_public_department_updated_at BEFORE UPDATE ON public.department FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_department_updated_at ON public.department IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_hostel_updated_at BEFORE UPDATE ON public.hostel FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_hostel_updated_at ON public.hostel IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_passes_updated_at BEFORE UPDATE ON public.passes FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_passes_updated_at ON public.passes IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_students_updated_at BEFORE UPDATE ON public.students FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_students_updated_at ON public.students IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_year_updated_at BEFORE UPDATE ON public.class FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_year_updated_at ON public.class IS 'trigger to set value of column "updated_at" to current timestamp on row update';
ALTER TABLE ONLY public.class
    ADD CONSTRAINT class_department_id_fkey FOREIGN KEY (department_id) REFERENCES public.department(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.college_staff
    ADD CONSTRAINT college_staff_class_id_fkey FOREIGN KEY (class_id) REFERENCES public.class(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.college_staff
    ADD CONSTRAINT college_staff_department_id_fkey FOREIGN KEY (department_id) REFERENCES public.department(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.college_staff
    ADD CONSTRAINT college_staff_hostel_id_fkey FOREIGN KEY (hostel_id) REFERENCES public.hostel(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.college_staff
    ADD CONSTRAINT college_staff_role_fkey FOREIGN KEY (role) REFERENCES public.staff_role(role) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.passes
    ADD CONSTRAINT passes_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.students(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_class_id_fkey FOREIGN KEY (class_id) REFERENCES public.class(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_department_id_fkey FOREIGN KEY (department_id) REFERENCES public.department(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_hostel_id_fkey FOREIGN KEY (hostel_id) REFERENCES public.hostel(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
