/*
 * Function name MUST be lowercase, optionally separated with underscore _ character
 */

/* Правильно */

void my_func(void);
void myfunc(void);

/* Неправильно */
void MYFunc(void);
void myFunc();

/*
 * When function returns pointer, align asterisk to return type
 */

/* Правильно */

const char* my_func(void);
my_struct_t* my_func(int32_t a, int32_t b);

/* Неправильно */

const char *my_func(void);
my_struct_t * my_func(void);

/*
 * Make variable name all lowercase with optional underscore _ character
 */

/* Правильно */

int32_t a;
int32_t my_var;
int32_t myvar;

/* Неправильно */

int32_t A;
int32_t myVar;
int32_t MYVar;

/*
 * Global variables or constants use uppercase with optional underscore _ character
 */

/* Правильно */

int32_t VARIABLE;
int32_t VARIABLE_WITH_UNDERSCORES;

/* Неправильно */

int32_t variable;
int32_t variable_with_underscores;