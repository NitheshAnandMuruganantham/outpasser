import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** year of students */
export type Class = {
  __typename?: 'class';
  /** An array relationship */
  college_staffs: Array<College_Staff>;
  /** An aggregate relationship */
  college_staffs_aggregate: College_Staff_Aggregate;
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  department?: Maybe<Department>;
  department_id?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  students: Array<Students>;
  /** An aggregate relationship */
  students_aggregate: Students_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** year of students */
export type ClassCollege_StaffsArgs = {
  distinct_on?: InputMaybe<Array<College_Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<College_Staff_Order_By>>;
  where?: InputMaybe<College_Staff_Bool_Exp>;
};


/** year of students */
export type ClassCollege_Staffs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<College_Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<College_Staff_Order_By>>;
  where?: InputMaybe<College_Staff_Bool_Exp>;
};


/** year of students */
export type ClassStudentsArgs = {
  distinct_on?: InputMaybe<Array<Students_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Students_Order_By>>;
  where?: InputMaybe<Students_Bool_Exp>;
};


/** year of students */
export type ClassStudents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Students_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Students_Order_By>>;
  where?: InputMaybe<Students_Bool_Exp>;
};

/** aggregated selection of "class" */
export type Class_Aggregate = {
  __typename?: 'class_aggregate';
  aggregate?: Maybe<Class_Aggregate_Fields>;
  nodes: Array<Class>;
};

/** aggregate fields of "class" */
export type Class_Aggregate_Fields = {
  __typename?: 'class_aggregate_fields';
  avg?: Maybe<Class_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Class_Max_Fields>;
  min?: Maybe<Class_Min_Fields>;
  stddev?: Maybe<Class_Stddev_Fields>;
  stddev_pop?: Maybe<Class_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Class_Stddev_Samp_Fields>;
  sum?: Maybe<Class_Sum_Fields>;
  var_pop?: Maybe<Class_Var_Pop_Fields>;
  var_samp?: Maybe<Class_Var_Samp_Fields>;
  variance?: Maybe<Class_Variance_Fields>;
};


/** aggregate fields of "class" */
export type Class_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Class_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "class" */
export type Class_Aggregate_Order_By = {
  avg?: InputMaybe<Class_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Class_Max_Order_By>;
  min?: InputMaybe<Class_Min_Order_By>;
  stddev?: InputMaybe<Class_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Class_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Class_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Class_Sum_Order_By>;
  var_pop?: InputMaybe<Class_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Class_Var_Samp_Order_By>;
  variance?: InputMaybe<Class_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "class" */
export type Class_Arr_Rel_Insert_Input = {
  data: Array<Class_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Class_On_Conflict>;
};

/** aggregate avg on columns */
export type Class_Avg_Fields = {
  __typename?: 'class_avg_fields';
  department_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "class" */
export type Class_Avg_Order_By = {
  department_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "class". All fields are combined with a logical 'AND'. */
export type Class_Bool_Exp = {
  _and?: InputMaybe<Array<Class_Bool_Exp>>;
  _not?: InputMaybe<Class_Bool_Exp>;
  _or?: InputMaybe<Array<Class_Bool_Exp>>;
  college_staffs?: InputMaybe<College_Staff_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  department?: InputMaybe<Department_Bool_Exp>;
  department_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  students?: InputMaybe<Students_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "class" */
export enum Class_Constraint {
  /** unique or primary key constraint on columns "id" */
  YearPkey = 'year_pkey'
}

/** input type for incrementing numeric columns in table "class" */
export type Class_Inc_Input = {
  department_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "class" */
export type Class_Insert_Input = {
  college_staffs?: InputMaybe<College_Staff_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  department?: InputMaybe<Department_Obj_Rel_Insert_Input>;
  department_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  students?: InputMaybe<Students_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Class_Max_Fields = {
  __typename?: 'class_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  department_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "class" */
export type Class_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  department_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Class_Min_Fields = {
  __typename?: 'class_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  department_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "class" */
export type Class_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  department_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "class" */
export type Class_Mutation_Response = {
  __typename?: 'class_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Class>;
};

/** input type for inserting object relation for remote table "class" */
export type Class_Obj_Rel_Insert_Input = {
  data: Class_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Class_On_Conflict>;
};

/** on_conflict condition type for table "class" */
export type Class_On_Conflict = {
  constraint: Class_Constraint;
  update_columns?: Array<Class_Update_Column>;
  where?: InputMaybe<Class_Bool_Exp>;
};

/** Ordering options when selecting data from "class". */
export type Class_Order_By = {
  college_staffs_aggregate?: InputMaybe<College_Staff_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  department?: InputMaybe<Department_Order_By>;
  department_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  students_aggregate?: InputMaybe<Students_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: class */
export type Class_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "class" */
export enum Class_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DepartmentId = 'department_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "class" */
export type Class_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  department_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Class_Stddev_Fields = {
  __typename?: 'class_stddev_fields';
  department_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "class" */
export type Class_Stddev_Order_By = {
  department_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Class_Stddev_Pop_Fields = {
  __typename?: 'class_stddev_pop_fields';
  department_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "class" */
export type Class_Stddev_Pop_Order_By = {
  department_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Class_Stddev_Samp_Fields = {
  __typename?: 'class_stddev_samp_fields';
  department_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "class" */
export type Class_Stddev_Samp_Order_By = {
  department_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Class_Sum_Fields = {
  __typename?: 'class_sum_fields';
  department_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "class" */
export type Class_Sum_Order_By = {
  department_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "class" */
export enum Class_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DepartmentId = 'department_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Class_Var_Pop_Fields = {
  __typename?: 'class_var_pop_fields';
  department_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "class" */
export type Class_Var_Pop_Order_By = {
  department_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Class_Var_Samp_Fields = {
  __typename?: 'class_var_samp_fields';
  department_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "class" */
export type Class_Var_Samp_Order_By = {
  department_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Class_Variance_Fields = {
  __typename?: 'class_variance_fields';
  department_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "class" */
export type Class_Variance_Order_By = {
  department_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "college_staff" */
export type College_Staff = {
  __typename?: 'college_staff';
  blocked?: Maybe<Scalars['Boolean']>;
  /** An object relationship */
  class?: Maybe<Class>;
  class_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  department?: Maybe<Department>;
  department_id?: Maybe<Scalars['Int']>;
  email_verified?: Maybe<Scalars['Boolean']>;
  forgot_password_token_hash?: Maybe<Scalars['String']>;
  /** An object relationship */
  hostel: Hostel;
  hostel_id: Scalars['Int'];
  id: Scalars['Int'];
  mail: Scalars['String'];
  name: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  refresh_token_hash?: Maybe<Scalars['String']>;
  role: Staff_Role_Enum;
  /** An object relationship */
  staff_role: Staff_Role;
};

/** aggregated selection of "college_staff" */
export type College_Staff_Aggregate = {
  __typename?: 'college_staff_aggregate';
  aggregate?: Maybe<College_Staff_Aggregate_Fields>;
  nodes: Array<College_Staff>;
};

/** aggregate fields of "college_staff" */
export type College_Staff_Aggregate_Fields = {
  __typename?: 'college_staff_aggregate_fields';
  avg?: Maybe<College_Staff_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<College_Staff_Max_Fields>;
  min?: Maybe<College_Staff_Min_Fields>;
  stddev?: Maybe<College_Staff_Stddev_Fields>;
  stddev_pop?: Maybe<College_Staff_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<College_Staff_Stddev_Samp_Fields>;
  sum?: Maybe<College_Staff_Sum_Fields>;
  var_pop?: Maybe<College_Staff_Var_Pop_Fields>;
  var_samp?: Maybe<College_Staff_Var_Samp_Fields>;
  variance?: Maybe<College_Staff_Variance_Fields>;
};


/** aggregate fields of "college_staff" */
export type College_Staff_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<College_Staff_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "college_staff" */
export type College_Staff_Aggregate_Order_By = {
  avg?: InputMaybe<College_Staff_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<College_Staff_Max_Order_By>;
  min?: InputMaybe<College_Staff_Min_Order_By>;
  stddev?: InputMaybe<College_Staff_Stddev_Order_By>;
  stddev_pop?: InputMaybe<College_Staff_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<College_Staff_Stddev_Samp_Order_By>;
  sum?: InputMaybe<College_Staff_Sum_Order_By>;
  var_pop?: InputMaybe<College_Staff_Var_Pop_Order_By>;
  var_samp?: InputMaybe<College_Staff_Var_Samp_Order_By>;
  variance?: InputMaybe<College_Staff_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "college_staff" */
export type College_Staff_Arr_Rel_Insert_Input = {
  data: Array<College_Staff_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<College_Staff_On_Conflict>;
};

/** aggregate avg on columns */
export type College_Staff_Avg_Fields = {
  __typename?: 'college_staff_avg_fields';
  class_id?: Maybe<Scalars['Float']>;
  department_id?: Maybe<Scalars['Float']>;
  hostel_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "college_staff" */
export type College_Staff_Avg_Order_By = {
  class_id?: InputMaybe<Order_By>;
  department_id?: InputMaybe<Order_By>;
  hostel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "college_staff". All fields are combined with a logical 'AND'. */
export type College_Staff_Bool_Exp = {
  _and?: InputMaybe<Array<College_Staff_Bool_Exp>>;
  _not?: InputMaybe<College_Staff_Bool_Exp>;
  _or?: InputMaybe<Array<College_Staff_Bool_Exp>>;
  blocked?: InputMaybe<Boolean_Comparison_Exp>;
  class?: InputMaybe<Class_Bool_Exp>;
  class_id?: InputMaybe<Int_Comparison_Exp>;
  department?: InputMaybe<Department_Bool_Exp>;
  department_id?: InputMaybe<Int_Comparison_Exp>;
  email_verified?: InputMaybe<Boolean_Comparison_Exp>;
  forgot_password_token_hash?: InputMaybe<String_Comparison_Exp>;
  hostel?: InputMaybe<Hostel_Bool_Exp>;
  hostel_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  mail?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  refresh_token_hash?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<Staff_Role_Enum_Comparison_Exp>;
  staff_role?: InputMaybe<Staff_Role_Bool_Exp>;
};

/** unique or primary key constraints on table "college_staff" */
export enum College_Staff_Constraint {
  /** unique or primary key constraint on columns "mail" */
  CollegeStaffMailKey = 'college_staff_mail_key',
  /** unique or primary key constraint on columns "id" */
  CollegeStaffPkey = 'college_staff_pkey'
}

/** input type for incrementing numeric columns in table "college_staff" */
export type College_Staff_Inc_Input = {
  class_id?: InputMaybe<Scalars['Int']>;
  department_id?: InputMaybe<Scalars['Int']>;
  hostel_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "college_staff" */
export type College_Staff_Insert_Input = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  class?: InputMaybe<Class_Obj_Rel_Insert_Input>;
  class_id?: InputMaybe<Scalars['Int']>;
  department?: InputMaybe<Department_Obj_Rel_Insert_Input>;
  department_id?: InputMaybe<Scalars['Int']>;
  email_verified?: InputMaybe<Scalars['Boolean']>;
  forgot_password_token_hash?: InputMaybe<Scalars['String']>;
  hostel?: InputMaybe<Hostel_Obj_Rel_Insert_Input>;
  hostel_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  mail?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  refresh_token_hash?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Staff_Role_Enum>;
  staff_role?: InputMaybe<Staff_Role_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type College_Staff_Max_Fields = {
  __typename?: 'college_staff_max_fields';
  class_id?: Maybe<Scalars['Int']>;
  department_id?: Maybe<Scalars['Int']>;
  forgot_password_token_hash?: Maybe<Scalars['String']>;
  hostel_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  mail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  refresh_token_hash?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "college_staff" */
export type College_Staff_Max_Order_By = {
  class_id?: InputMaybe<Order_By>;
  department_id?: InputMaybe<Order_By>;
  forgot_password_token_hash?: InputMaybe<Order_By>;
  hostel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mail?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  refresh_token_hash?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type College_Staff_Min_Fields = {
  __typename?: 'college_staff_min_fields';
  class_id?: Maybe<Scalars['Int']>;
  department_id?: Maybe<Scalars['Int']>;
  forgot_password_token_hash?: Maybe<Scalars['String']>;
  hostel_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  mail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  refresh_token_hash?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "college_staff" */
export type College_Staff_Min_Order_By = {
  class_id?: InputMaybe<Order_By>;
  department_id?: InputMaybe<Order_By>;
  forgot_password_token_hash?: InputMaybe<Order_By>;
  hostel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mail?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  refresh_token_hash?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "college_staff" */
export type College_Staff_Mutation_Response = {
  __typename?: 'college_staff_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<College_Staff>;
};

/** on_conflict condition type for table "college_staff" */
export type College_Staff_On_Conflict = {
  constraint: College_Staff_Constraint;
  update_columns?: Array<College_Staff_Update_Column>;
  where?: InputMaybe<College_Staff_Bool_Exp>;
};

/** Ordering options when selecting data from "college_staff". */
export type College_Staff_Order_By = {
  blocked?: InputMaybe<Order_By>;
  class?: InputMaybe<Class_Order_By>;
  class_id?: InputMaybe<Order_By>;
  department?: InputMaybe<Department_Order_By>;
  department_id?: InputMaybe<Order_By>;
  email_verified?: InputMaybe<Order_By>;
  forgot_password_token_hash?: InputMaybe<Order_By>;
  hostel?: InputMaybe<Hostel_Order_By>;
  hostel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mail?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  refresh_token_hash?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  staff_role?: InputMaybe<Staff_Role_Order_By>;
};

/** primary key columns input for table: college_staff */
export type College_Staff_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "college_staff" */
export enum College_Staff_Select_Column {
  /** column name */
  Blocked = 'blocked',
  /** column name */
  ClassId = 'class_id',
  /** column name */
  DepartmentId = 'department_id',
  /** column name */
  EmailVerified = 'email_verified',
  /** column name */
  ForgotPasswordTokenHash = 'forgot_password_token_hash',
  /** column name */
  HostelId = 'hostel_id',
  /** column name */
  Id = 'id',
  /** column name */
  Mail = 'mail',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  RefreshTokenHash = 'refresh_token_hash',
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "college_staff" */
export type College_Staff_Set_Input = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  class_id?: InputMaybe<Scalars['Int']>;
  department_id?: InputMaybe<Scalars['Int']>;
  email_verified?: InputMaybe<Scalars['Boolean']>;
  forgot_password_token_hash?: InputMaybe<Scalars['String']>;
  hostel_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  mail?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  refresh_token_hash?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Staff_Role_Enum>;
};

/** aggregate stddev on columns */
export type College_Staff_Stddev_Fields = {
  __typename?: 'college_staff_stddev_fields';
  class_id?: Maybe<Scalars['Float']>;
  department_id?: Maybe<Scalars['Float']>;
  hostel_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "college_staff" */
export type College_Staff_Stddev_Order_By = {
  class_id?: InputMaybe<Order_By>;
  department_id?: InputMaybe<Order_By>;
  hostel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type College_Staff_Stddev_Pop_Fields = {
  __typename?: 'college_staff_stddev_pop_fields';
  class_id?: Maybe<Scalars['Float']>;
  department_id?: Maybe<Scalars['Float']>;
  hostel_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "college_staff" */
export type College_Staff_Stddev_Pop_Order_By = {
  class_id?: InputMaybe<Order_By>;
  department_id?: InputMaybe<Order_By>;
  hostel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type College_Staff_Stddev_Samp_Fields = {
  __typename?: 'college_staff_stddev_samp_fields';
  class_id?: Maybe<Scalars['Float']>;
  department_id?: Maybe<Scalars['Float']>;
  hostel_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "college_staff" */
export type College_Staff_Stddev_Samp_Order_By = {
  class_id?: InputMaybe<Order_By>;
  department_id?: InputMaybe<Order_By>;
  hostel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type College_Staff_Sum_Fields = {
  __typename?: 'college_staff_sum_fields';
  class_id?: Maybe<Scalars['Int']>;
  department_id?: Maybe<Scalars['Int']>;
  hostel_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "college_staff" */
export type College_Staff_Sum_Order_By = {
  class_id?: InputMaybe<Order_By>;
  department_id?: InputMaybe<Order_By>;
  hostel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "college_staff" */
export enum College_Staff_Update_Column {
  /** column name */
  Blocked = 'blocked',
  /** column name */
  ClassId = 'class_id',
  /** column name */
  DepartmentId = 'department_id',
  /** column name */
  EmailVerified = 'email_verified',
  /** column name */
  ForgotPasswordTokenHash = 'forgot_password_token_hash',
  /** column name */
  HostelId = 'hostel_id',
  /** column name */
  Id = 'id',
  /** column name */
  Mail = 'mail',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  RefreshTokenHash = 'refresh_token_hash',
  /** column name */
  Role = 'role'
}

/** aggregate var_pop on columns */
export type College_Staff_Var_Pop_Fields = {
  __typename?: 'college_staff_var_pop_fields';
  class_id?: Maybe<Scalars['Float']>;
  department_id?: Maybe<Scalars['Float']>;
  hostel_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "college_staff" */
export type College_Staff_Var_Pop_Order_By = {
  class_id?: InputMaybe<Order_By>;
  department_id?: InputMaybe<Order_By>;
  hostel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type College_Staff_Var_Samp_Fields = {
  __typename?: 'college_staff_var_samp_fields';
  class_id?: Maybe<Scalars['Float']>;
  department_id?: Maybe<Scalars['Float']>;
  hostel_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "college_staff" */
export type College_Staff_Var_Samp_Order_By = {
  class_id?: InputMaybe<Order_By>;
  department_id?: InputMaybe<Order_By>;
  hostel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type College_Staff_Variance_Fields = {
  __typename?: 'college_staff_variance_fields';
  class_id?: Maybe<Scalars['Float']>;
  department_id?: Maybe<Scalars['Float']>;
  hostel_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "college_staff" */
export type College_Staff_Variance_Order_By = {
  class_id?: InputMaybe<Order_By>;
  department_id?: InputMaybe<Order_By>;
  hostel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** department */
export type Department = {
  __typename?: 'department';
  /** An array relationship */
  classes: Array<Class>;
  /** An aggregate relationship */
  classes_aggregate: Class_Aggregate;
  /** An array relationship */
  college_staffs: Array<College_Staff>;
  /** An aggregate relationship */
  college_staffs_aggregate: College_Staff_Aggregate;
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  students: Array<Students>;
  /** An aggregate relationship */
  students_aggregate: Students_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** department */
export type DepartmentClassesArgs = {
  distinct_on?: InputMaybe<Array<Class_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Class_Order_By>>;
  where?: InputMaybe<Class_Bool_Exp>;
};


/** department */
export type DepartmentClasses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Class_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Class_Order_By>>;
  where?: InputMaybe<Class_Bool_Exp>;
};


/** department */
export type DepartmentCollege_StaffsArgs = {
  distinct_on?: InputMaybe<Array<College_Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<College_Staff_Order_By>>;
  where?: InputMaybe<College_Staff_Bool_Exp>;
};


/** department */
export type DepartmentCollege_Staffs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<College_Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<College_Staff_Order_By>>;
  where?: InputMaybe<College_Staff_Bool_Exp>;
};


/** department */
export type DepartmentStudentsArgs = {
  distinct_on?: InputMaybe<Array<Students_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Students_Order_By>>;
  where?: InputMaybe<Students_Bool_Exp>;
};


/** department */
export type DepartmentStudents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Students_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Students_Order_By>>;
  where?: InputMaybe<Students_Bool_Exp>;
};

/** aggregated selection of "department" */
export type Department_Aggregate = {
  __typename?: 'department_aggregate';
  aggregate?: Maybe<Department_Aggregate_Fields>;
  nodes: Array<Department>;
};

/** aggregate fields of "department" */
export type Department_Aggregate_Fields = {
  __typename?: 'department_aggregate_fields';
  avg?: Maybe<Department_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Department_Max_Fields>;
  min?: Maybe<Department_Min_Fields>;
  stddev?: Maybe<Department_Stddev_Fields>;
  stddev_pop?: Maybe<Department_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Department_Stddev_Samp_Fields>;
  sum?: Maybe<Department_Sum_Fields>;
  var_pop?: Maybe<Department_Var_Pop_Fields>;
  var_samp?: Maybe<Department_Var_Samp_Fields>;
  variance?: Maybe<Department_Variance_Fields>;
};


/** aggregate fields of "department" */
export type Department_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Department_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Department_Avg_Fields = {
  __typename?: 'department_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "department". All fields are combined with a logical 'AND'. */
export type Department_Bool_Exp = {
  _and?: InputMaybe<Array<Department_Bool_Exp>>;
  _not?: InputMaybe<Department_Bool_Exp>;
  _or?: InputMaybe<Array<Department_Bool_Exp>>;
  classes?: InputMaybe<Class_Bool_Exp>;
  college_staffs?: InputMaybe<College_Staff_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  students?: InputMaybe<Students_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "department" */
export enum Department_Constraint {
  /** unique or primary key constraint on columns "id" */
  DepartmentPkey = 'department_pkey'
}

/** input type for incrementing numeric columns in table "department" */
export type Department_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "department" */
export type Department_Insert_Input = {
  classes?: InputMaybe<Class_Arr_Rel_Insert_Input>;
  college_staffs?: InputMaybe<College_Staff_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  students?: InputMaybe<Students_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Department_Max_Fields = {
  __typename?: 'department_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Department_Min_Fields = {
  __typename?: 'department_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "department" */
export type Department_Mutation_Response = {
  __typename?: 'department_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Department>;
};

/** input type for inserting object relation for remote table "department" */
export type Department_Obj_Rel_Insert_Input = {
  data: Department_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Department_On_Conflict>;
};

/** on_conflict condition type for table "department" */
export type Department_On_Conflict = {
  constraint: Department_Constraint;
  update_columns?: Array<Department_Update_Column>;
  where?: InputMaybe<Department_Bool_Exp>;
};

/** Ordering options when selecting data from "department". */
export type Department_Order_By = {
  classes_aggregate?: InputMaybe<Class_Aggregate_Order_By>;
  college_staffs_aggregate?: InputMaybe<College_Staff_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  students_aggregate?: InputMaybe<Students_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: department */
export type Department_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "department" */
export enum Department_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "department" */
export type Department_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Department_Stddev_Fields = {
  __typename?: 'department_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Department_Stddev_Pop_Fields = {
  __typename?: 'department_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Department_Stddev_Samp_Fields = {
  __typename?: 'department_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Department_Sum_Fields = {
  __typename?: 'department_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "department" */
export enum Department_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Department_Var_Pop_Fields = {
  __typename?: 'department_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Department_Var_Samp_Fields = {
  __typename?: 'department_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Department_Variance_Fields = {
  __typename?: 'department_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** database for hostels */
export type Hostel = {
  __typename?: 'hostel';
  /** An array relationship */
  college_staffs: Array<College_Staff>;
  /** An aggregate relationship */
  college_staffs_aggregate: College_Staff_Aggregate;
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  location: Scalars['String'];
  name: Scalars['String'];
  /** An array relationship */
  students: Array<Students>;
  /** An aggregate relationship */
  students_aggregate: Students_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** database for hostels */
export type HostelCollege_StaffsArgs = {
  distinct_on?: InputMaybe<Array<College_Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<College_Staff_Order_By>>;
  where?: InputMaybe<College_Staff_Bool_Exp>;
};


/** database for hostels */
export type HostelCollege_Staffs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<College_Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<College_Staff_Order_By>>;
  where?: InputMaybe<College_Staff_Bool_Exp>;
};


/** database for hostels */
export type HostelStudentsArgs = {
  distinct_on?: InputMaybe<Array<Students_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Students_Order_By>>;
  where?: InputMaybe<Students_Bool_Exp>;
};


/** database for hostels */
export type HostelStudents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Students_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Students_Order_By>>;
  where?: InputMaybe<Students_Bool_Exp>;
};

/** aggregated selection of "hostel" */
export type Hostel_Aggregate = {
  __typename?: 'hostel_aggregate';
  aggregate?: Maybe<Hostel_Aggregate_Fields>;
  nodes: Array<Hostel>;
};

/** aggregate fields of "hostel" */
export type Hostel_Aggregate_Fields = {
  __typename?: 'hostel_aggregate_fields';
  avg?: Maybe<Hostel_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Hostel_Max_Fields>;
  min?: Maybe<Hostel_Min_Fields>;
  stddev?: Maybe<Hostel_Stddev_Fields>;
  stddev_pop?: Maybe<Hostel_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Hostel_Stddev_Samp_Fields>;
  sum?: Maybe<Hostel_Sum_Fields>;
  var_pop?: Maybe<Hostel_Var_Pop_Fields>;
  var_samp?: Maybe<Hostel_Var_Samp_Fields>;
  variance?: Maybe<Hostel_Variance_Fields>;
};


/** aggregate fields of "hostel" */
export type Hostel_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Hostel_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Hostel_Avg_Fields = {
  __typename?: 'hostel_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "hostel". All fields are combined with a logical 'AND'. */
export type Hostel_Bool_Exp = {
  _and?: InputMaybe<Array<Hostel_Bool_Exp>>;
  _not?: InputMaybe<Hostel_Bool_Exp>;
  _or?: InputMaybe<Array<Hostel_Bool_Exp>>;
  college_staffs?: InputMaybe<College_Staff_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  location?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  students?: InputMaybe<Students_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "hostel" */
export enum Hostel_Constraint {
  /** unique or primary key constraint on columns "id" */
  HostelPkey = 'hostel_pkey'
}

/** input type for incrementing numeric columns in table "hostel" */
export type Hostel_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "hostel" */
export type Hostel_Insert_Input = {
  college_staffs?: InputMaybe<College_Staff_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  location?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  students?: InputMaybe<Students_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Hostel_Max_Fields = {
  __typename?: 'hostel_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Hostel_Min_Fields = {
  __typename?: 'hostel_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "hostel" */
export type Hostel_Mutation_Response = {
  __typename?: 'hostel_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Hostel>;
};

/** input type for inserting object relation for remote table "hostel" */
export type Hostel_Obj_Rel_Insert_Input = {
  data: Hostel_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Hostel_On_Conflict>;
};

/** on_conflict condition type for table "hostel" */
export type Hostel_On_Conflict = {
  constraint: Hostel_Constraint;
  update_columns?: Array<Hostel_Update_Column>;
  where?: InputMaybe<Hostel_Bool_Exp>;
};

/** Ordering options when selecting data from "hostel". */
export type Hostel_Order_By = {
  college_staffs_aggregate?: InputMaybe<College_Staff_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  students_aggregate?: InputMaybe<Students_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: hostel */
export type Hostel_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "hostel" */
export enum Hostel_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "hostel" */
export type Hostel_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  location?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Hostel_Stddev_Fields = {
  __typename?: 'hostel_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Hostel_Stddev_Pop_Fields = {
  __typename?: 'hostel_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Hostel_Stddev_Samp_Fields = {
  __typename?: 'hostel_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Hostel_Sum_Fields = {
  __typename?: 'hostel_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "hostel" */
export enum Hostel_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Hostel_Var_Pop_Fields = {
  __typename?: 'hostel_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Hostel_Var_Samp_Fields = {
  __typename?: 'hostel_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Hostel_Variance_Fields = {
  __typename?: 'hostel_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "class" */
  delete_class?: Maybe<Class_Mutation_Response>;
  /** delete single row from the table: "class" */
  delete_class_by_pk?: Maybe<Class>;
  /** delete data from the table: "college_staff" */
  delete_college_staff?: Maybe<College_Staff_Mutation_Response>;
  /** delete single row from the table: "college_staff" */
  delete_college_staff_by_pk?: Maybe<College_Staff>;
  /** delete data from the table: "department" */
  delete_department?: Maybe<Department_Mutation_Response>;
  /** delete single row from the table: "department" */
  delete_department_by_pk?: Maybe<Department>;
  /** delete data from the table: "hostel" */
  delete_hostel?: Maybe<Hostel_Mutation_Response>;
  /** delete single row from the table: "hostel" */
  delete_hostel_by_pk?: Maybe<Hostel>;
  /** delete data from the table: "passes" */
  delete_passes?: Maybe<Passes_Mutation_Response>;
  /** delete single row from the table: "passes" */
  delete_passes_by_pk?: Maybe<Passes>;
  /** delete data from the table: "staff_role" */
  delete_staff_role?: Maybe<Staff_Role_Mutation_Response>;
  /** delete single row from the table: "staff_role" */
  delete_staff_role_by_pk?: Maybe<Staff_Role>;
  /** delete data from the table: "students" */
  delete_students?: Maybe<Students_Mutation_Response>;
  /** delete single row from the table: "students" */
  delete_students_by_pk?: Maybe<Students>;
  /** insert data into the table: "class" */
  insert_class?: Maybe<Class_Mutation_Response>;
  /** insert a single row into the table: "class" */
  insert_class_one?: Maybe<Class>;
  /** insert data into the table: "college_staff" */
  insert_college_staff?: Maybe<College_Staff_Mutation_Response>;
  /** insert a single row into the table: "college_staff" */
  insert_college_staff_one?: Maybe<College_Staff>;
  /** insert data into the table: "department" */
  insert_department?: Maybe<Department_Mutation_Response>;
  /** insert a single row into the table: "department" */
  insert_department_one?: Maybe<Department>;
  /** insert data into the table: "hostel" */
  insert_hostel?: Maybe<Hostel_Mutation_Response>;
  /** insert a single row into the table: "hostel" */
  insert_hostel_one?: Maybe<Hostel>;
  /** insert data into the table: "passes" */
  insert_passes?: Maybe<Passes_Mutation_Response>;
  /** insert a single row into the table: "passes" */
  insert_passes_one?: Maybe<Passes>;
  /** insert data into the table: "staff_role" */
  insert_staff_role?: Maybe<Staff_Role_Mutation_Response>;
  /** insert a single row into the table: "staff_role" */
  insert_staff_role_one?: Maybe<Staff_Role>;
  /** insert data into the table: "students" */
  insert_students?: Maybe<Students_Mutation_Response>;
  /** insert a single row into the table: "students" */
  insert_students_one?: Maybe<Students>;
  /** update data of the table: "class" */
  update_class?: Maybe<Class_Mutation_Response>;
  /** update single row of the table: "class" */
  update_class_by_pk?: Maybe<Class>;
  /** update data of the table: "college_staff" */
  update_college_staff?: Maybe<College_Staff_Mutation_Response>;
  /** update single row of the table: "college_staff" */
  update_college_staff_by_pk?: Maybe<College_Staff>;
  /** update data of the table: "department" */
  update_department?: Maybe<Department_Mutation_Response>;
  /** update single row of the table: "department" */
  update_department_by_pk?: Maybe<Department>;
  /** update data of the table: "hostel" */
  update_hostel?: Maybe<Hostel_Mutation_Response>;
  /** update single row of the table: "hostel" */
  update_hostel_by_pk?: Maybe<Hostel>;
  /** update data of the table: "passes" */
  update_passes?: Maybe<Passes_Mutation_Response>;
  /** update single row of the table: "passes" */
  update_passes_by_pk?: Maybe<Passes>;
  /** update data of the table: "staff_role" */
  update_staff_role?: Maybe<Staff_Role_Mutation_Response>;
  /** update single row of the table: "staff_role" */
  update_staff_role_by_pk?: Maybe<Staff_Role>;
  /** update data of the table: "students" */
  update_students?: Maybe<Students_Mutation_Response>;
  /** update single row of the table: "students" */
  update_students_by_pk?: Maybe<Students>;
};


/** mutation root */
export type Mutation_RootDelete_ClassArgs = {
  where: Class_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Class_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_College_StaffArgs = {
  where: College_Staff_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_College_Staff_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_DepartmentArgs = {
  where: Department_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Department_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_HostelArgs = {
  where: Hostel_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Hostel_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_PassesArgs = {
  where: Passes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Passes_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Staff_RoleArgs = {
  where: Staff_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Staff_Role_By_PkArgs = {
  role: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_StudentsArgs = {
  where: Students_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Students_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_ClassArgs = {
  objects: Array<Class_Insert_Input>;
  on_conflict?: InputMaybe<Class_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Class_OneArgs = {
  object: Class_Insert_Input;
  on_conflict?: InputMaybe<Class_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_College_StaffArgs = {
  objects: Array<College_Staff_Insert_Input>;
  on_conflict?: InputMaybe<College_Staff_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_College_Staff_OneArgs = {
  object: College_Staff_Insert_Input;
  on_conflict?: InputMaybe<College_Staff_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DepartmentArgs = {
  objects: Array<Department_Insert_Input>;
  on_conflict?: InputMaybe<Department_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Department_OneArgs = {
  object: Department_Insert_Input;
  on_conflict?: InputMaybe<Department_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_HostelArgs = {
  objects: Array<Hostel_Insert_Input>;
  on_conflict?: InputMaybe<Hostel_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Hostel_OneArgs = {
  object: Hostel_Insert_Input;
  on_conflict?: InputMaybe<Hostel_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PassesArgs = {
  objects: Array<Passes_Insert_Input>;
  on_conflict?: InputMaybe<Passes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Passes_OneArgs = {
  object: Passes_Insert_Input;
  on_conflict?: InputMaybe<Passes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Staff_RoleArgs = {
  objects: Array<Staff_Role_Insert_Input>;
  on_conflict?: InputMaybe<Staff_Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Staff_Role_OneArgs = {
  object: Staff_Role_Insert_Input;
  on_conflict?: InputMaybe<Staff_Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_StudentsArgs = {
  objects: Array<Students_Insert_Input>;
  on_conflict?: InputMaybe<Students_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Students_OneArgs = {
  object: Students_Insert_Input;
  on_conflict?: InputMaybe<Students_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ClassArgs = {
  _inc?: InputMaybe<Class_Inc_Input>;
  _set?: InputMaybe<Class_Set_Input>;
  where: Class_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Class_By_PkArgs = {
  _inc?: InputMaybe<Class_Inc_Input>;
  _set?: InputMaybe<Class_Set_Input>;
  pk_columns: Class_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_College_StaffArgs = {
  _inc?: InputMaybe<College_Staff_Inc_Input>;
  _set?: InputMaybe<College_Staff_Set_Input>;
  where: College_Staff_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_College_Staff_By_PkArgs = {
  _inc?: InputMaybe<College_Staff_Inc_Input>;
  _set?: InputMaybe<College_Staff_Set_Input>;
  pk_columns: College_Staff_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_DepartmentArgs = {
  _inc?: InputMaybe<Department_Inc_Input>;
  _set?: InputMaybe<Department_Set_Input>;
  where: Department_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Department_By_PkArgs = {
  _inc?: InputMaybe<Department_Inc_Input>;
  _set?: InputMaybe<Department_Set_Input>;
  pk_columns: Department_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_HostelArgs = {
  _inc?: InputMaybe<Hostel_Inc_Input>;
  _set?: InputMaybe<Hostel_Set_Input>;
  where: Hostel_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Hostel_By_PkArgs = {
  _inc?: InputMaybe<Hostel_Inc_Input>;
  _set?: InputMaybe<Hostel_Set_Input>;
  pk_columns: Hostel_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PassesArgs = {
  _inc?: InputMaybe<Passes_Inc_Input>;
  _set?: InputMaybe<Passes_Set_Input>;
  where: Passes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Passes_By_PkArgs = {
  _inc?: InputMaybe<Passes_Inc_Input>;
  _set?: InputMaybe<Passes_Set_Input>;
  pk_columns: Passes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Staff_RoleArgs = {
  _set?: InputMaybe<Staff_Role_Set_Input>;
  where: Staff_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Staff_Role_By_PkArgs = {
  _set?: InputMaybe<Staff_Role_Set_Input>;
  pk_columns: Staff_Role_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_StudentsArgs = {
  _inc?: InputMaybe<Students_Inc_Input>;
  _set?: InputMaybe<Students_Set_Input>;
  where: Students_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Students_By_PkArgs = {
  _inc?: InputMaybe<Students_Inc_Input>;
  _set?: InputMaybe<Students_Set_Input>;
  pk_columns: Students_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** table for outpass requests */
export type Passes = {
  __typename?: 'passes';
  checked_in?: Maybe<Scalars['Boolean']>;
  checked_out?: Maybe<Scalars['Boolean']>;
  class_approved?: Maybe<Scalars['Boolean']>;
  class_rejected?: Maybe<Scalars['Boolean']>;
  created_at: Scalars['timestamptz'];
  end_datetime: Scalars['timestamptz'];
  hod_approved: Scalars['Boolean'];
  hod_rejected: Scalars['Boolean'];
  hostel_approval?: Maybe<Scalars['Boolean']>;
  hostel_rejected?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  key?: Maybe<Scalars['uuid']>;
  reason: Scalars['String'];
  start_datetime: Scalars['timestamptz'];
  /** An object relationship */
  student: Students;
  student_id: Scalars['Int'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "passes" */
export type Passes_Aggregate = {
  __typename?: 'passes_aggregate';
  aggregate?: Maybe<Passes_Aggregate_Fields>;
  nodes: Array<Passes>;
};

/** aggregate fields of "passes" */
export type Passes_Aggregate_Fields = {
  __typename?: 'passes_aggregate_fields';
  avg?: Maybe<Passes_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Passes_Max_Fields>;
  min?: Maybe<Passes_Min_Fields>;
  stddev?: Maybe<Passes_Stddev_Fields>;
  stddev_pop?: Maybe<Passes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Passes_Stddev_Samp_Fields>;
  sum?: Maybe<Passes_Sum_Fields>;
  var_pop?: Maybe<Passes_Var_Pop_Fields>;
  var_samp?: Maybe<Passes_Var_Samp_Fields>;
  variance?: Maybe<Passes_Variance_Fields>;
};


/** aggregate fields of "passes" */
export type Passes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Passes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "passes" */
export type Passes_Aggregate_Order_By = {
  avg?: InputMaybe<Passes_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Passes_Max_Order_By>;
  min?: InputMaybe<Passes_Min_Order_By>;
  stddev?: InputMaybe<Passes_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Passes_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Passes_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Passes_Sum_Order_By>;
  var_pop?: InputMaybe<Passes_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Passes_Var_Samp_Order_By>;
  variance?: InputMaybe<Passes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "passes" */
export type Passes_Arr_Rel_Insert_Input = {
  data: Array<Passes_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Passes_On_Conflict>;
};

/** aggregate avg on columns */
export type Passes_Avg_Fields = {
  __typename?: 'passes_avg_fields';
  id?: Maybe<Scalars['Float']>;
  student_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "passes" */
export type Passes_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  student_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "passes". All fields are combined with a logical 'AND'. */
export type Passes_Bool_Exp = {
  _and?: InputMaybe<Array<Passes_Bool_Exp>>;
  _not?: InputMaybe<Passes_Bool_Exp>;
  _or?: InputMaybe<Array<Passes_Bool_Exp>>;
  checked_in?: InputMaybe<Boolean_Comparison_Exp>;
  checked_out?: InputMaybe<Boolean_Comparison_Exp>;
  class_approved?: InputMaybe<Boolean_Comparison_Exp>;
  class_rejected?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  end_datetime?: InputMaybe<Timestamptz_Comparison_Exp>;
  hod_approved?: InputMaybe<Boolean_Comparison_Exp>;
  hod_rejected?: InputMaybe<Boolean_Comparison_Exp>;
  hostel_approval?: InputMaybe<Boolean_Comparison_Exp>;
  hostel_rejected?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  key?: InputMaybe<Uuid_Comparison_Exp>;
  reason?: InputMaybe<String_Comparison_Exp>;
  start_datetime?: InputMaybe<Timestamptz_Comparison_Exp>;
  student?: InputMaybe<Students_Bool_Exp>;
  student_id?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "passes" */
export enum Passes_Constraint {
  /** unique or primary key constraint on columns "id" */
  PassesPkey = 'passes_pkey'
}

/** input type for incrementing numeric columns in table "passes" */
export type Passes_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  student_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "passes" */
export type Passes_Insert_Input = {
  checked_in?: InputMaybe<Scalars['Boolean']>;
  checked_out?: InputMaybe<Scalars['Boolean']>;
  class_approved?: InputMaybe<Scalars['Boolean']>;
  class_rejected?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  end_datetime?: InputMaybe<Scalars['timestamptz']>;
  hod_approved?: InputMaybe<Scalars['Boolean']>;
  hod_rejected?: InputMaybe<Scalars['Boolean']>;
  hostel_approval?: InputMaybe<Scalars['Boolean']>;
  hostel_rejected?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  key?: InputMaybe<Scalars['uuid']>;
  reason?: InputMaybe<Scalars['String']>;
  start_datetime?: InputMaybe<Scalars['timestamptz']>;
  student?: InputMaybe<Students_Obj_Rel_Insert_Input>;
  student_id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Passes_Max_Fields = {
  __typename?: 'passes_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  end_datetime?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['uuid']>;
  reason?: Maybe<Scalars['String']>;
  start_datetime?: Maybe<Scalars['timestamptz']>;
  student_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "passes" */
export type Passes_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  end_datetime?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  reason?: InputMaybe<Order_By>;
  start_datetime?: InputMaybe<Order_By>;
  student_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Passes_Min_Fields = {
  __typename?: 'passes_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  end_datetime?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['uuid']>;
  reason?: Maybe<Scalars['String']>;
  start_datetime?: Maybe<Scalars['timestamptz']>;
  student_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "passes" */
export type Passes_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  end_datetime?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  reason?: InputMaybe<Order_By>;
  start_datetime?: InputMaybe<Order_By>;
  student_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "passes" */
export type Passes_Mutation_Response = {
  __typename?: 'passes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Passes>;
};

/** on_conflict condition type for table "passes" */
export type Passes_On_Conflict = {
  constraint: Passes_Constraint;
  update_columns?: Array<Passes_Update_Column>;
  where?: InputMaybe<Passes_Bool_Exp>;
};

/** Ordering options when selecting data from "passes". */
export type Passes_Order_By = {
  checked_in?: InputMaybe<Order_By>;
  checked_out?: InputMaybe<Order_By>;
  class_approved?: InputMaybe<Order_By>;
  class_rejected?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  end_datetime?: InputMaybe<Order_By>;
  hod_approved?: InputMaybe<Order_By>;
  hod_rejected?: InputMaybe<Order_By>;
  hostel_approval?: InputMaybe<Order_By>;
  hostel_rejected?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  reason?: InputMaybe<Order_By>;
  start_datetime?: InputMaybe<Order_By>;
  student?: InputMaybe<Students_Order_By>;
  student_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: passes */
export type Passes_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "passes" */
export enum Passes_Select_Column {
  /** column name */
  CheckedIn = 'checked_in',
  /** column name */
  CheckedOut = 'checked_out',
  /** column name */
  ClassApproved = 'class_approved',
  /** column name */
  ClassRejected = 'class_rejected',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EndDatetime = 'end_datetime',
  /** column name */
  HodApproved = 'hod_approved',
  /** column name */
  HodRejected = 'hod_rejected',
  /** column name */
  HostelApproval = 'hostel_approval',
  /** column name */
  HostelRejected = 'hostel_rejected',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  Reason = 'reason',
  /** column name */
  StartDatetime = 'start_datetime',
  /** column name */
  StudentId = 'student_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "passes" */
export type Passes_Set_Input = {
  checked_in?: InputMaybe<Scalars['Boolean']>;
  checked_out?: InputMaybe<Scalars['Boolean']>;
  class_approved?: InputMaybe<Scalars['Boolean']>;
  class_rejected?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  end_datetime?: InputMaybe<Scalars['timestamptz']>;
  hod_approved?: InputMaybe<Scalars['Boolean']>;
  hod_rejected?: InputMaybe<Scalars['Boolean']>;
  hostel_approval?: InputMaybe<Scalars['Boolean']>;
  hostel_rejected?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  key?: InputMaybe<Scalars['uuid']>;
  reason?: InputMaybe<Scalars['String']>;
  start_datetime?: InputMaybe<Scalars['timestamptz']>;
  student_id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Passes_Stddev_Fields = {
  __typename?: 'passes_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  student_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "passes" */
export type Passes_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  student_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Passes_Stddev_Pop_Fields = {
  __typename?: 'passes_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  student_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "passes" */
export type Passes_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  student_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Passes_Stddev_Samp_Fields = {
  __typename?: 'passes_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  student_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "passes" */
export type Passes_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  student_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Passes_Sum_Fields = {
  __typename?: 'passes_sum_fields';
  id?: Maybe<Scalars['Int']>;
  student_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "passes" */
export type Passes_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  student_id?: InputMaybe<Order_By>;
};

/** update columns of table "passes" */
export enum Passes_Update_Column {
  /** column name */
  CheckedIn = 'checked_in',
  /** column name */
  CheckedOut = 'checked_out',
  /** column name */
  ClassApproved = 'class_approved',
  /** column name */
  ClassRejected = 'class_rejected',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EndDatetime = 'end_datetime',
  /** column name */
  HodApproved = 'hod_approved',
  /** column name */
  HodRejected = 'hod_rejected',
  /** column name */
  HostelApproval = 'hostel_approval',
  /** column name */
  HostelRejected = 'hostel_rejected',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  Reason = 'reason',
  /** column name */
  StartDatetime = 'start_datetime',
  /** column name */
  StudentId = 'student_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Passes_Var_Pop_Fields = {
  __typename?: 'passes_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  student_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "passes" */
export type Passes_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  student_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Passes_Var_Samp_Fields = {
  __typename?: 'passes_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  student_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "passes" */
export type Passes_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  student_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Passes_Variance_Fields = {
  __typename?: 'passes_variance_fields';
  id?: Maybe<Scalars['Float']>;
  student_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "passes" */
export type Passes_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  student_id?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "class" */
  class: Array<Class>;
  /** fetch aggregated fields from the table: "class" */
  class_aggregate: Class_Aggregate;
  /** fetch data from the table: "class" using primary key columns */
  class_by_pk?: Maybe<Class>;
  /** fetch data from the table: "college_staff" */
  college_staff: Array<College_Staff>;
  /** fetch aggregated fields from the table: "college_staff" */
  college_staff_aggregate: College_Staff_Aggregate;
  /** fetch data from the table: "college_staff" using primary key columns */
  college_staff_by_pk?: Maybe<College_Staff>;
  /** fetch data from the table: "department" */
  department: Array<Department>;
  /** fetch aggregated fields from the table: "department" */
  department_aggregate: Department_Aggregate;
  /** fetch data from the table: "department" using primary key columns */
  department_by_pk?: Maybe<Department>;
  /** fetch data from the table: "hostel" */
  hostel: Array<Hostel>;
  /** fetch aggregated fields from the table: "hostel" */
  hostel_aggregate: Hostel_Aggregate;
  /** fetch data from the table: "hostel" using primary key columns */
  hostel_by_pk?: Maybe<Hostel>;
  /** An array relationship */
  passes: Array<Passes>;
  /** An aggregate relationship */
  passes_aggregate: Passes_Aggregate;
  /** fetch data from the table: "passes" using primary key columns */
  passes_by_pk?: Maybe<Passes>;
  /** fetch data from the table: "staff_role" */
  staff_role: Array<Staff_Role>;
  /** fetch aggregated fields from the table: "staff_role" */
  staff_role_aggregate: Staff_Role_Aggregate;
  /** fetch data from the table: "staff_role" using primary key columns */
  staff_role_by_pk?: Maybe<Staff_Role>;
  /** An array relationship */
  students: Array<Students>;
  /** An aggregate relationship */
  students_aggregate: Students_Aggregate;
  /** fetch data from the table: "students" using primary key columns */
  students_by_pk?: Maybe<Students>;
};


export type Query_RootClassArgs = {
  distinct_on?: InputMaybe<Array<Class_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Class_Order_By>>;
  where?: InputMaybe<Class_Bool_Exp>;
};


export type Query_RootClass_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Class_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Class_Order_By>>;
  where?: InputMaybe<Class_Bool_Exp>;
};


export type Query_RootClass_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootCollege_StaffArgs = {
  distinct_on?: InputMaybe<Array<College_Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<College_Staff_Order_By>>;
  where?: InputMaybe<College_Staff_Bool_Exp>;
};


export type Query_RootCollege_Staff_AggregateArgs = {
  distinct_on?: InputMaybe<Array<College_Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<College_Staff_Order_By>>;
  where?: InputMaybe<College_Staff_Bool_Exp>;
};


export type Query_RootCollege_Staff_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootDepartmentArgs = {
  distinct_on?: InputMaybe<Array<Department_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Department_Order_By>>;
  where?: InputMaybe<Department_Bool_Exp>;
};


export type Query_RootDepartment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Department_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Department_Order_By>>;
  where?: InputMaybe<Department_Bool_Exp>;
};


export type Query_RootDepartment_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootHostelArgs = {
  distinct_on?: InputMaybe<Array<Hostel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hostel_Order_By>>;
  where?: InputMaybe<Hostel_Bool_Exp>;
};


export type Query_RootHostel_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hostel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hostel_Order_By>>;
  where?: InputMaybe<Hostel_Bool_Exp>;
};


export type Query_RootHostel_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPassesArgs = {
  distinct_on?: InputMaybe<Array<Passes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Passes_Order_By>>;
  where?: InputMaybe<Passes_Bool_Exp>;
};


export type Query_RootPasses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Passes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Passes_Order_By>>;
  where?: InputMaybe<Passes_Bool_Exp>;
};


export type Query_RootPasses_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootStaff_RoleArgs = {
  distinct_on?: InputMaybe<Array<Staff_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Staff_Role_Order_By>>;
  where?: InputMaybe<Staff_Role_Bool_Exp>;
};


export type Query_RootStaff_Role_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staff_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Staff_Role_Order_By>>;
  where?: InputMaybe<Staff_Role_Bool_Exp>;
};


export type Query_RootStaff_Role_By_PkArgs = {
  role: Scalars['String'];
};


export type Query_RootStudentsArgs = {
  distinct_on?: InputMaybe<Array<Students_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Students_Order_By>>;
  where?: InputMaybe<Students_Bool_Exp>;
};


export type Query_RootStudents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Students_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Students_Order_By>>;
  where?: InputMaybe<Students_Bool_Exp>;
};


export type Query_RootStudents_By_PkArgs = {
  id: Scalars['Int'];
};

/** roles of the staff */
export type Staff_Role = {
  __typename?: 'staff_role';
  /** An array relationship */
  college_staffs: Array<College_Staff>;
  /** An aggregate relationship */
  college_staffs_aggregate: College_Staff_Aggregate;
  role: Scalars['String'];
};


/** roles of the staff */
export type Staff_RoleCollege_StaffsArgs = {
  distinct_on?: InputMaybe<Array<College_Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<College_Staff_Order_By>>;
  where?: InputMaybe<College_Staff_Bool_Exp>;
};


/** roles of the staff */
export type Staff_RoleCollege_Staffs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<College_Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<College_Staff_Order_By>>;
  where?: InputMaybe<College_Staff_Bool_Exp>;
};

/** aggregated selection of "staff_role" */
export type Staff_Role_Aggregate = {
  __typename?: 'staff_role_aggregate';
  aggregate?: Maybe<Staff_Role_Aggregate_Fields>;
  nodes: Array<Staff_Role>;
};

/** aggregate fields of "staff_role" */
export type Staff_Role_Aggregate_Fields = {
  __typename?: 'staff_role_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Staff_Role_Max_Fields>;
  min?: Maybe<Staff_Role_Min_Fields>;
};


/** aggregate fields of "staff_role" */
export type Staff_Role_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Staff_Role_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "staff_role". All fields are combined with a logical 'AND'. */
export type Staff_Role_Bool_Exp = {
  _and?: InputMaybe<Array<Staff_Role_Bool_Exp>>;
  _not?: InputMaybe<Staff_Role_Bool_Exp>;
  _or?: InputMaybe<Array<Staff_Role_Bool_Exp>>;
  college_staffs?: InputMaybe<College_Staff_Bool_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "staff_role" */
export enum Staff_Role_Constraint {
  /** unique or primary key constraint on columns "role" */
  StaffRolePkey = 'staff_role_pkey'
}

export enum Staff_Role_Enum {
  Admin = 'admin',
  ClassAdvisor = 'class_advisor',
  Hod = 'hod',
  ItLead = 'it_lead',
  Office = 'office',
  Warden = 'warden'
}

/** Boolean expression to compare columns of type "staff_role_enum". All fields are combined with logical 'AND'. */
export type Staff_Role_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Staff_Role_Enum>;
  _in?: InputMaybe<Array<Staff_Role_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Staff_Role_Enum>;
  _nin?: InputMaybe<Array<Staff_Role_Enum>>;
};

/** input type for inserting data into table "staff_role" */
export type Staff_Role_Insert_Input = {
  college_staffs?: InputMaybe<College_Staff_Arr_Rel_Insert_Input>;
  role?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Staff_Role_Max_Fields = {
  __typename?: 'staff_role_max_fields';
  role?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Staff_Role_Min_Fields = {
  __typename?: 'staff_role_min_fields';
  role?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "staff_role" */
export type Staff_Role_Mutation_Response = {
  __typename?: 'staff_role_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Staff_Role>;
};

/** input type for inserting object relation for remote table "staff_role" */
export type Staff_Role_Obj_Rel_Insert_Input = {
  data: Staff_Role_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Staff_Role_On_Conflict>;
};

/** on_conflict condition type for table "staff_role" */
export type Staff_Role_On_Conflict = {
  constraint: Staff_Role_Constraint;
  update_columns?: Array<Staff_Role_Update_Column>;
  where?: InputMaybe<Staff_Role_Bool_Exp>;
};

/** Ordering options when selecting data from "staff_role". */
export type Staff_Role_Order_By = {
  college_staffs_aggregate?: InputMaybe<College_Staff_Aggregate_Order_By>;
  role?: InputMaybe<Order_By>;
};

/** primary key columns input for table: staff_role */
export type Staff_Role_Pk_Columns_Input = {
  role: Scalars['String'];
};

/** select columns of table "staff_role" */
export enum Staff_Role_Select_Column {
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "staff_role" */
export type Staff_Role_Set_Input = {
  role?: InputMaybe<Scalars['String']>;
};

/** update columns of table "staff_role" */
export enum Staff_Role_Update_Column {
  /** column name */
  Role = 'role'
}

/** table for students */
export type Students = {
  __typename?: 'students';
  /** An object relationship */
  class?: Maybe<Class>;
  class_id?: Maybe<Scalars['Int']>;
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  department?: Maybe<Department>;
  department_id?: Maybe<Scalars['Int']>;
  dob: Scalars['date'];
  /** An object relationship */
  hostel?: Maybe<Hostel>;
  hostel_id?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  mail: Scalars['String'];
  name: Scalars['String'];
  /** An array relationship */
  passes: Array<Passes>;
  /** An aggregate relationship */
  passes_aggregate: Passes_Aggregate;
  phone: Scalars['String'];
  rool: Scalars['String'];
  uid: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};


/** table for students */
export type StudentsPassesArgs = {
  distinct_on?: InputMaybe<Array<Passes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Passes_Order_By>>;
  where?: InputMaybe<Passes_Bool_Exp>;
};


/** table for students */
export type StudentsPasses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Passes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Passes_Order_By>>;
  where?: InputMaybe<Passes_Bool_Exp>;
};

/** aggregated selection of "students" */
export type Students_Aggregate = {
  __typename?: 'students_aggregate';
  aggregate?: Maybe<Students_Aggregate_Fields>;
  nodes: Array<Students>;
};

/** aggregate fields of "students" */
export type Students_Aggregate_Fields = {
  __typename?: 'students_aggregate_fields';
  avg?: Maybe<Students_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Students_Max_Fields>;
  min?: Maybe<Students_Min_Fields>;
  stddev?: Maybe<Students_Stddev_Fields>;
  stddev_pop?: Maybe<Students_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Students_Stddev_Samp_Fields>;
  sum?: Maybe<Students_Sum_Fields>;
  var_pop?: Maybe<Students_Var_Pop_Fields>;
  var_samp?: Maybe<Students_Var_Samp_Fields>;
  variance?: Maybe<Students_Variance_Fields>;
};


/** aggregate fields of "students" */
export type Students_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Students_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "students" */
export type Students_Aggregate_Order_By = {
  avg?: InputMaybe<Students_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Students_Max_Order_By>;
  min?: InputMaybe<Students_Min_Order_By>;
  stddev?: InputMaybe<Students_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Students_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Students_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Students_Sum_Order_By>;
  var_pop?: InputMaybe<Students_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Students_Var_Samp_Order_By>;
  variance?: InputMaybe<Students_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "students" */
export type Students_Arr_Rel_Insert_Input = {
  data: Array<Students_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Students_On_Conflict>;
};

/** aggregate avg on columns */
export type Students_Avg_Fields = {
  __typename?: 'students_avg_fields';
  class_id?: Maybe<Scalars['Float']>;
  department_id?: Maybe<Scalars['Float']>;
  hostel_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "students" */
export type Students_Avg_Order_By = {
  class_id?: InputMaybe<Order_By>;
  department_id?: InputMaybe<Order_By>;
  hostel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "students". All fields are combined with a logical 'AND'. */
export type Students_Bool_Exp = {
  _and?: InputMaybe<Array<Students_Bool_Exp>>;
  _not?: InputMaybe<Students_Bool_Exp>;
  _or?: InputMaybe<Array<Students_Bool_Exp>>;
  class?: InputMaybe<Class_Bool_Exp>;
  class_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  department?: InputMaybe<Department_Bool_Exp>;
  department_id?: InputMaybe<Int_Comparison_Exp>;
  dob?: InputMaybe<Date_Comparison_Exp>;
  hostel?: InputMaybe<Hostel_Bool_Exp>;
  hostel_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  mail?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  passes?: InputMaybe<Passes_Bool_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  rool?: InputMaybe<String_Comparison_Exp>;
  uid?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "students" */
export enum Students_Constraint {
  /** unique or primary key constraint on columns "mail" */
  StudentsMailKey = 'students_mail_key',
  /** unique or primary key constraint on columns "id" */
  StudentsPkey = 'students_pkey'
}

/** input type for incrementing numeric columns in table "students" */
export type Students_Inc_Input = {
  class_id?: InputMaybe<Scalars['Int']>;
  department_id?: InputMaybe<Scalars['Int']>;
  hostel_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "students" */
export type Students_Insert_Input = {
  class?: InputMaybe<Class_Obj_Rel_Insert_Input>;
  class_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  department?: InputMaybe<Department_Obj_Rel_Insert_Input>;
  department_id?: InputMaybe<Scalars['Int']>;
  dob?: InputMaybe<Scalars['date']>;
  hostel?: InputMaybe<Hostel_Obj_Rel_Insert_Input>;
  hostel_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  mail?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  passes?: InputMaybe<Passes_Arr_Rel_Insert_Input>;
  phone?: InputMaybe<Scalars['String']>;
  rool?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Students_Max_Fields = {
  __typename?: 'students_max_fields';
  class_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  department_id?: Maybe<Scalars['Int']>;
  dob?: Maybe<Scalars['date']>;
  hostel_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  mail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  rool?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "students" */
export type Students_Max_Order_By = {
  class_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  department_id?: InputMaybe<Order_By>;
  dob?: InputMaybe<Order_By>;
  hostel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mail?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  rool?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Students_Min_Fields = {
  __typename?: 'students_min_fields';
  class_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  department_id?: Maybe<Scalars['Int']>;
  dob?: Maybe<Scalars['date']>;
  hostel_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  mail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  rool?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "students" */
export type Students_Min_Order_By = {
  class_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  department_id?: InputMaybe<Order_By>;
  dob?: InputMaybe<Order_By>;
  hostel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mail?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  rool?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "students" */
export type Students_Mutation_Response = {
  __typename?: 'students_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Students>;
};

/** input type for inserting object relation for remote table "students" */
export type Students_Obj_Rel_Insert_Input = {
  data: Students_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Students_On_Conflict>;
};

/** on_conflict condition type for table "students" */
export type Students_On_Conflict = {
  constraint: Students_Constraint;
  update_columns?: Array<Students_Update_Column>;
  where?: InputMaybe<Students_Bool_Exp>;
};

/** Ordering options when selecting data from "students". */
export type Students_Order_By = {
  class?: InputMaybe<Class_Order_By>;
  class_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  department?: InputMaybe<Department_Order_By>;
  department_id?: InputMaybe<Order_By>;
  dob?: InputMaybe<Order_By>;
  hostel?: InputMaybe<Hostel_Order_By>;
  hostel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mail?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  passes_aggregate?: InputMaybe<Passes_Aggregate_Order_By>;
  phone?: InputMaybe<Order_By>;
  rool?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: students */
export type Students_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "students" */
export enum Students_Select_Column {
  /** column name */
  ClassId = 'class_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DepartmentId = 'department_id',
  /** column name */
  Dob = 'dob',
  /** column name */
  HostelId = 'hostel_id',
  /** column name */
  Id = 'id',
  /** column name */
  Mail = 'mail',
  /** column name */
  Name = 'name',
  /** column name */
  Phone = 'phone',
  /** column name */
  Rool = 'rool',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "students" */
export type Students_Set_Input = {
  class_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  department_id?: InputMaybe<Scalars['Int']>;
  dob?: InputMaybe<Scalars['date']>;
  hostel_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  mail?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  rool?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Students_Stddev_Fields = {
  __typename?: 'students_stddev_fields';
  class_id?: Maybe<Scalars['Float']>;
  department_id?: Maybe<Scalars['Float']>;
  hostel_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "students" */
export type Students_Stddev_Order_By = {
  class_id?: InputMaybe<Order_By>;
  department_id?: InputMaybe<Order_By>;
  hostel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Students_Stddev_Pop_Fields = {
  __typename?: 'students_stddev_pop_fields';
  class_id?: Maybe<Scalars['Float']>;
  department_id?: Maybe<Scalars['Float']>;
  hostel_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "students" */
export type Students_Stddev_Pop_Order_By = {
  class_id?: InputMaybe<Order_By>;
  department_id?: InputMaybe<Order_By>;
  hostel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Students_Stddev_Samp_Fields = {
  __typename?: 'students_stddev_samp_fields';
  class_id?: Maybe<Scalars['Float']>;
  department_id?: Maybe<Scalars['Float']>;
  hostel_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "students" */
export type Students_Stddev_Samp_Order_By = {
  class_id?: InputMaybe<Order_By>;
  department_id?: InputMaybe<Order_By>;
  hostel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Students_Sum_Fields = {
  __typename?: 'students_sum_fields';
  class_id?: Maybe<Scalars['Int']>;
  department_id?: Maybe<Scalars['Int']>;
  hostel_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "students" */
export type Students_Sum_Order_By = {
  class_id?: InputMaybe<Order_By>;
  department_id?: InputMaybe<Order_By>;
  hostel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "students" */
export enum Students_Update_Column {
  /** column name */
  ClassId = 'class_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DepartmentId = 'department_id',
  /** column name */
  Dob = 'dob',
  /** column name */
  HostelId = 'hostel_id',
  /** column name */
  Id = 'id',
  /** column name */
  Mail = 'mail',
  /** column name */
  Name = 'name',
  /** column name */
  Phone = 'phone',
  /** column name */
  Rool = 'rool',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Students_Var_Pop_Fields = {
  __typename?: 'students_var_pop_fields';
  class_id?: Maybe<Scalars['Float']>;
  department_id?: Maybe<Scalars['Float']>;
  hostel_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "students" */
export type Students_Var_Pop_Order_By = {
  class_id?: InputMaybe<Order_By>;
  department_id?: InputMaybe<Order_By>;
  hostel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Students_Var_Samp_Fields = {
  __typename?: 'students_var_samp_fields';
  class_id?: Maybe<Scalars['Float']>;
  department_id?: Maybe<Scalars['Float']>;
  hostel_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "students" */
export type Students_Var_Samp_Order_By = {
  class_id?: InputMaybe<Order_By>;
  department_id?: InputMaybe<Order_By>;
  hostel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Students_Variance_Fields = {
  __typename?: 'students_variance_fields';
  class_id?: Maybe<Scalars['Float']>;
  department_id?: Maybe<Scalars['Float']>;
  hostel_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "students" */
export type Students_Variance_Order_By = {
  class_id?: InputMaybe<Order_By>;
  department_id?: InputMaybe<Order_By>;
  hostel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "class" */
  class: Array<Class>;
  /** fetch aggregated fields from the table: "class" */
  class_aggregate: Class_Aggregate;
  /** fetch data from the table: "class" using primary key columns */
  class_by_pk?: Maybe<Class>;
  /** fetch data from the table: "college_staff" */
  college_staff: Array<College_Staff>;
  /** fetch aggregated fields from the table: "college_staff" */
  college_staff_aggregate: College_Staff_Aggregate;
  /** fetch data from the table: "college_staff" using primary key columns */
  college_staff_by_pk?: Maybe<College_Staff>;
  /** fetch data from the table: "department" */
  department: Array<Department>;
  /** fetch aggregated fields from the table: "department" */
  department_aggregate: Department_Aggregate;
  /** fetch data from the table: "department" using primary key columns */
  department_by_pk?: Maybe<Department>;
  /** fetch data from the table: "hostel" */
  hostel: Array<Hostel>;
  /** fetch aggregated fields from the table: "hostel" */
  hostel_aggregate: Hostel_Aggregate;
  /** fetch data from the table: "hostel" using primary key columns */
  hostel_by_pk?: Maybe<Hostel>;
  /** An array relationship */
  passes: Array<Passes>;
  /** An aggregate relationship */
  passes_aggregate: Passes_Aggregate;
  /** fetch data from the table: "passes" using primary key columns */
  passes_by_pk?: Maybe<Passes>;
  /** fetch data from the table: "staff_role" */
  staff_role: Array<Staff_Role>;
  /** fetch aggregated fields from the table: "staff_role" */
  staff_role_aggregate: Staff_Role_Aggregate;
  /** fetch data from the table: "staff_role" using primary key columns */
  staff_role_by_pk?: Maybe<Staff_Role>;
  /** An array relationship */
  students: Array<Students>;
  /** An aggregate relationship */
  students_aggregate: Students_Aggregate;
  /** fetch data from the table: "students" using primary key columns */
  students_by_pk?: Maybe<Students>;
};


export type Subscription_RootClassArgs = {
  distinct_on?: InputMaybe<Array<Class_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Class_Order_By>>;
  where?: InputMaybe<Class_Bool_Exp>;
};


export type Subscription_RootClass_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Class_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Class_Order_By>>;
  where?: InputMaybe<Class_Bool_Exp>;
};


export type Subscription_RootClass_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCollege_StaffArgs = {
  distinct_on?: InputMaybe<Array<College_Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<College_Staff_Order_By>>;
  where?: InputMaybe<College_Staff_Bool_Exp>;
};


export type Subscription_RootCollege_Staff_AggregateArgs = {
  distinct_on?: InputMaybe<Array<College_Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<College_Staff_Order_By>>;
  where?: InputMaybe<College_Staff_Bool_Exp>;
};


export type Subscription_RootCollege_Staff_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootDepartmentArgs = {
  distinct_on?: InputMaybe<Array<Department_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Department_Order_By>>;
  where?: InputMaybe<Department_Bool_Exp>;
};


export type Subscription_RootDepartment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Department_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Department_Order_By>>;
  where?: InputMaybe<Department_Bool_Exp>;
};


export type Subscription_RootDepartment_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootHostelArgs = {
  distinct_on?: InputMaybe<Array<Hostel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hostel_Order_By>>;
  where?: InputMaybe<Hostel_Bool_Exp>;
};


export type Subscription_RootHostel_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hostel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hostel_Order_By>>;
  where?: InputMaybe<Hostel_Bool_Exp>;
};


export type Subscription_RootHostel_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPassesArgs = {
  distinct_on?: InputMaybe<Array<Passes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Passes_Order_By>>;
  where?: InputMaybe<Passes_Bool_Exp>;
};


export type Subscription_RootPasses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Passes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Passes_Order_By>>;
  where?: InputMaybe<Passes_Bool_Exp>;
};


export type Subscription_RootPasses_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootStaff_RoleArgs = {
  distinct_on?: InputMaybe<Array<Staff_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Staff_Role_Order_By>>;
  where?: InputMaybe<Staff_Role_Bool_Exp>;
};


export type Subscription_RootStaff_Role_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staff_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Staff_Role_Order_By>>;
  where?: InputMaybe<Staff_Role_Bool_Exp>;
};


export type Subscription_RootStaff_Role_By_PkArgs = {
  role: Scalars['String'];
};


export type Subscription_RootStudentsArgs = {
  distinct_on?: InputMaybe<Array<Students_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Students_Order_By>>;
  where?: InputMaybe<Students_Bool_Exp>;
};


export type Subscription_RootStudents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Students_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Students_Order_By>>;
  where?: InputMaybe<Students_Bool_Exp>;
};


export type Subscription_RootStudents_By_PkArgs = {
  id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type GetReqsSubscriptionVariables = Exact<{
  where?: InputMaybe<Passes_Bool_Exp>;
  distinctOn?: InputMaybe<Array<Passes_Select_Column> | Passes_Select_Column>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Passes_Order_By> | Passes_Order_By>;
}>;


export type GetReqsSubscription = { __typename?: 'subscription_root', passes: Array<{ __typename?: 'passes', checked_in?: boolean | null, checked_out?: boolean | null, key?: any | null, class_approved?: boolean | null, class_rejected?: boolean | null, start_datetime: any, end_datetime: any, hod_approved: boolean, hod_rejected: boolean, hostel_approval?: boolean | null, hostel_rejected?: boolean | null, reason: string, title: string, student_id: number, created_at: any, id: number, student: { __typename?: 'students', name: string, mail: string, hostel?: { __typename?: 'hostel', name: string } | null, department?: { __typename?: 'department', name: string } | null, class?: { __typename?: 'class', name: string } | null } }> };

export type GetTotalReqCountSubscriptionVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Passes_Bool_Exp>;
  distinctOn?: InputMaybe<Array<Passes_Select_Column> | Passes_Select_Column>;
  orderBy?: InputMaybe<Array<Passes_Order_By> | Passes_Order_By>;
}>;


export type GetTotalReqCountSubscription = { __typename?: 'subscription_root', passes_aggregate: { __typename?: 'passes_aggregate', aggregate?: { __typename?: 'passes_aggregate_fields', count: number } | null } };

export type RequestPassMutationVariables = Exact<{
  object: Passes_Insert_Input;
}>;


export type RequestPassMutation = { __typename?: 'mutation_root', insert_passes_one?: { __typename?: 'passes', id: number } | null };


export const GetReqsDocument = gql`
    subscription getReqs($where: passes_bool_exp, $distinctOn: [passes_select_column!], $limit: Int, $offset: Int, $orderBy: [passes_order_by!]) {
  passes(
    where: $where
    distinct_on: $distinctOn
    limit: $limit
    offset: $offset
    order_by: $orderBy
  ) {
    checked_in
    checked_out
    key
    class_approved
    class_rejected
    start_datetime
    end_datetime
    hod_approved
    hod_rejected
    hostel_approval
    hostel_rejected
    reason
    title
    student_id
    created_at
    id
    student {
      name
      mail
      hostel {
        name
      }
      department {
        name
      }
      class {
        name
      }
    }
  }
}
    `;

/**
 * __useGetReqsSubscription__
 *
 * To run a query within a React component, call `useGetReqsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetReqsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReqsSubscription({
 *   variables: {
 *      where: // value for 'where'
 *      distinctOn: // value for 'distinctOn'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useGetReqsSubscription(baseOptions?: Apollo.SubscriptionHookOptions<GetReqsSubscription, GetReqsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<GetReqsSubscription, GetReqsSubscriptionVariables>(GetReqsDocument, options);
      }
export type GetReqsSubscriptionHookResult = ReturnType<typeof useGetReqsSubscription>;
export type GetReqsSubscriptionResult = Apollo.SubscriptionResult<GetReqsSubscription>;
export const GetTotalReqCountDocument = gql`
    subscription getTotalReqCount($limit: Int, $offset: Int, $where: passes_bool_exp, $distinctOn: [passes_select_column!], $orderBy: [passes_order_by!]) {
  passes_aggregate(
    limit: $limit
    offset: $offset
    where: $where
    distinct_on: $distinctOn
    order_by: $orderBy
  ) {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useGetTotalReqCountSubscription__
 *
 * To run a query within a React component, call `useGetTotalReqCountSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetTotalReqCountSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTotalReqCountSubscription({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      where: // value for 'where'
 *      distinctOn: // value for 'distinctOn'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useGetTotalReqCountSubscription(baseOptions?: Apollo.SubscriptionHookOptions<GetTotalReqCountSubscription, GetTotalReqCountSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<GetTotalReqCountSubscription, GetTotalReqCountSubscriptionVariables>(GetTotalReqCountDocument, options);
      }
export type GetTotalReqCountSubscriptionHookResult = ReturnType<typeof useGetTotalReqCountSubscription>;
export type GetTotalReqCountSubscriptionResult = Apollo.SubscriptionResult<GetTotalReqCountSubscription>;
export const RequestPassDocument = gql`
    mutation requestPass($object: passes_insert_input!) {
  insert_passes_one(object: $object) {
    id
  }
}
    `;
export type RequestPassMutationFn = Apollo.MutationFunction<RequestPassMutation, RequestPassMutationVariables>;

/**
 * __useRequestPassMutation__
 *
 * To run a mutation, you first call `useRequestPassMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestPassMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestPassMutation, { data, loading, error }] = useRequestPassMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useRequestPassMutation(baseOptions?: Apollo.MutationHookOptions<RequestPassMutation, RequestPassMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RequestPassMutation, RequestPassMutationVariables>(RequestPassDocument, options);
      }
export type RequestPassMutationHookResult = ReturnType<typeof useRequestPassMutation>;
export type RequestPassMutationResult = Apollo.MutationResult<RequestPassMutation>;
export type RequestPassMutationOptions = Apollo.BaseMutationOptions<RequestPassMutation, RequestPassMutationVariables>;