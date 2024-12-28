#include <stdio.h>

#define MAX_SIZE 100

int numbers[MAX_SIZE];
int count = 0;

void addNumber(int number) {
    if (count < MAX_SIZE) {
        numbers[count] = number;
        count++;
    }
}

void printNumbers() {
    for (int i = 0; i < count; i++) {
        printf("%d ", numbers[i]);
    }
    printf("\n");
}

void removeNumber(int index) {
    if (index >= 0 && index < count) {
        for (int i = index; i < count - 1; i++) {
            numbers[i] = numbers[i + 1];
        }
        count--;
    }
}

int main() {
    addNumber(5);
    addNumber(10);
    addNumber(15);

    printNumbers();  // Виведе: 5 10 15

    removeNumber(1);

    printNumbers();  // Виведе: 5 15

    return 0;
}
