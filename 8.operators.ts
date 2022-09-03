interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person // 'name' | 'age'
// ===

type User = {
    _id: number
    name: string
    email: string
    createdAdd: Date
}
// тип, без ключей которые указаны в <>
type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAdd'> // 'name' | 'email'
type UserKeysNoMeta2 = Pick<User, '_id' | 'createdAdd'> // '_id' | 'createdAdd'

// Exclude указывает что удалить
// Pick указывает что забрать (из типа)