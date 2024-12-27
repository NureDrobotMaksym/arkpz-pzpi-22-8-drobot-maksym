// ------------------------------
// ------------- 01 -------------
// ------------------------------

// Неправильно

int wrong(int arr[], int size) {
    int sum = 0;

    for (int i = 0; i < size; i++) sum += arr[i] * 2 - arr[i] / 3 + i * i - arr[i] % 5;

    return sum;
}

// Правильно

int correct(int arr[], int size) {
    int sum = 0;

    for (int i = 0; i < size; i++) {
        sum += arr[i] * 2 - arr[i] / 3 + i * i - arr[i] % 5;
    }

    return sum;
}

// ------------------------------
// ------------- 02 -------------
// ------------------------------

/*
 * Do not use tabs, use spaces instead:
 * - 4 spaces per indent level;
 * - 1 between keyword and opening bracket.
 */

/* Правильно */

if (condition)
while (condition)
for (init; condition; step)
do {
    int i = 0;
} while (condition)

/* Неправильно */

if(condition)
while(condition)
for(init;condition;step)
do {
int i = 0;
} while(condition)

// ------------------------------
// ------------- 03 -------------
// ------------------------------

/*
 * Do not use space between function name and opening bracket
 */

int32_t a = sum(4, 3);              /* OK */
int32_t a = sum (4, 3);             /* Wrong */

/*
 * Use only lowercase characters for variables/functions/types with optional underscore _ char
 * Opening curly bracket is always at the same line as keyword (for, while, do, switch, if, ...)
 */

size_t i;
for (i = 0; i < 5; ++i) {           /* Правильно */
}
for (i = 0; i < 5; ++i){            /* Неправильно */
}
for (i = 0; i < 5; ++i)             /* Неправильно */
{
}

/*
 * Use single space before and after comparison and assignment operators
 */

int32_t a;
a = 3 + 4;              /* Правильно */
for (a = 0; a < 5; ++a) /* Правильно */
a=3+4;                  /* Неправильно */
a = 3+4;                /* Неправильно */
for (a=0;a<5;++a)       /* Неправильно */

/*
 * Do not use space between function name and opening bracket
 * Use single space after every comma
 */

func_name(5, 4);          /* Правильно */
func_name(4,3);           /* Неправильно */
func_name (4, 3);         /* Неправильно */

/*
 * Every compound statement MUST include opening and closing curly bracket, even if it includes only 1 nested statement
 * Every compound statement MUST include single indent; when nesting statements, include 1 indent size for each nest
 */

/* Правильно */

if (c) {
do_a();
} else {
do_b();
}

/* Неправильно */

if (c)
do_a();
else
do_b();

/* Неправильно */

if (c) do_a();
else do_b();

/*
 * Use empty lines to create visual separation.
 */

// Неправильно

#include <stdio.h>
int wrong(int arr[], int size) {
    int sum = 0;
    for (int i = 0; i < size; i++) {
        sum += arr[i] * 2 - arr[i] / 3 + i * i - arr[i] % 5;
    }
    return sum;
}

// Правильно

#include <stdio.h>

int correct(int arr[], int size) {
    int sum = 0;

    for (int i = 0; i < size; i++) {
        sum += arr[i] * 2 - arr[i] / 3 + i * i - arr[i] % 5;
    }

    return sum;
}