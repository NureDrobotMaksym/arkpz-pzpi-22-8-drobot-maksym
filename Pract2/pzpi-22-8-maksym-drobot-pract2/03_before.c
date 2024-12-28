#include <stdio.h>

// Функція, що змінює значення змінної через вказівник
void increment(int *num) {
    (*num)++;
}

// Основна функція
int main() {
    int x = 10;
    increment(&x);
    printf("Incremented value: %d\n", x);  // Виведе: Incremented value: 11

    return 0;
}

