// типы присваевам после двоеточия и перед =
const isFetching: boolean = true
const usLoading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 3e12

const message: string = 'Hello Typescript'

// массивы, в которым элементы конкретного типа данных и способ объявления таких массивов
const numberArray: number[] = [1,2,3]
const numberArray2: Array<number> = [1,2,3] // такая запись называется дженерективы

// тип данных Tuple
// его идея заключается в том, что мы создаем массив из разных типов данных
const contact: [string, number] = ['Danil', 095205]

// тип данных Any - которая позволяет менять тип данных у переменной
let variable: any = 42
// ...
variable = 'New it String'

// ======
// name - параметр. после двоеточия указывается тип данных этого параметра 
// у функции нет ключевого слова return, поэтому она ничего не возвращает. в таком случае после скобок функции нужно указать void
// void значит, что функция ничего не возвращает
function sayMyName(name: string): void{
    console.log(name);    
}
sayMyName('Danil') 

// тип данных Never (указывается в 2 случаях)
// 1. когда функция либо возвращает ошибку и никогда не заканчивает своё выполнение
// 2. когда функция постоянно что-то делает (например бесконечный цикл)
function throwError(message: string): never{
    throw new Error(message)
}

// конструкция Type - которая позволяет создавать свои типы
type Login = string
const login: Login = 'Admin'
// может принимать быть несколькими типами данных, пример ниже
type ID = string | number
const id1: ID = 1
const id2: ID = '2'

type MoreType = string | null | undefined