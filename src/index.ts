import { initialize as singleResponsibilityInit } from './single-responsibility';
import { initialize as openForExtentionInit } from './open-for-extention-closed-for-modification';
import { initialize as liskovSubstitutionInit } from './liskov-subsitution';
import { initialize as interfaceSegregationInit } from './interface-segregation';
import { initialize as dependencyInversionInit } from './dependency-inversion/solution';
import { initialize as dependencyInversionProblemInit } from './dependency-inversion/problem';

console.log('----Single Responsibility Principle Output Start----');
singleResponsibilityInit();
console.log('----Single Responsibility Principle Output End----\n');

console.log('----Open for extention and closed for modification Start----');
openForExtentionInit();
console.log('----Open for extention and closed for modification End----\n');

console.log('---- Liskov Subsitution Principle Start----');
liskovSubstitutionInit();
console.log('---- Liskov Subsitution Principle End----\n');

console.log('---- Interface Segregation Start----');
interfaceSegregationInit();
console.log('---- Interface Segregation Start----\n');

console.log('---- Dependency Inversion Principle Start----');
dependencyInversionProblemInit();
dependencyInversionInit();
console.log('---- Dependency Inversion Principle End----\n');

