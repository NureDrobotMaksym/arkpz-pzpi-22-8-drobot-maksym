#include <stdio.h>

#define MAX_SIZE 100

typedef struct {
    int numbers[MAX_SIZE];
    int count;
} NumberCollection;

void initCollection(NumberCollection *collection) {
    collection->count = 0;
}

void addNumber(NumberCollection *collection, int number) {
    if (collection->count < MAX_SIZE) {
        collection->numbers[collection->count] = number;
        collection->count++;
    }
}

void printNumbers(const NumberCollection *collection) {
    for (int i = 0; i < collection->count; i++) {
        printf("%d ", collection->numbers[i]);
    }
    printf("\n");
}

void removeNumber(NumberCollection *collection, int index) {
    if (index >= 0 && index < collection->count) {
        for (int i = index; i < collection->count - 1; i++) {
            collection->numbers[i] = collection->numbers[i + 1];
        }
        collection->count--;
    }
}

int main() {
    NumberCollection collection;
    initCollection(&collection);

    addNumber(&collection, 5);
    addNumber(&collection, 10);
    addNumber(&collection, 15);

    printNumbers(&collection);  // Виведе: 5 10 15

    removeNumber(&collection, 1);

    printNumbers(&collection);  // Виведе: 5 15

    return 0;
}
