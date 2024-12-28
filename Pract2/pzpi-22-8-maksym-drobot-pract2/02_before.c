#include <stdio.h>

typedef struct {
    char name[100];
    int age;
} Person;

typedef struct {
    Person person;
    double salary;
} Employee;

// Метод, що належить Person, але має більше сенсу для Employee
void printSalary(Employee *emp) {
    printf("Salary: %.2f\n", emp->salary);
}

// Функція для виведення інформації про людину
void printPersonInfo(Person *person) {
    printf("Name: %s\n", person->name);
    printf("Age: %d\n", person->age);
}

int main() {
    Employee emp = {{"John Doe", 30}, 50000.0};
    printPersonInfo((Person*)&emp);  // Виведе: Name: John Doe, Age: 30
    printSalary(&emp);               // Виведе: Salary: 50000.00

    return 0;
}

