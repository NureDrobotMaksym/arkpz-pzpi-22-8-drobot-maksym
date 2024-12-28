#include <stdio.h>

// Функція, що працює зі значенням, а не з вказівником
int increment(int num) {
    num++;
    return num;
}

// Основна функція
int main() {
    int x = 10;
    x = increment(x);
    printf("Incremented value: %d\n", x);  // Виведе: Incremented value: 11

    return 0;
}

