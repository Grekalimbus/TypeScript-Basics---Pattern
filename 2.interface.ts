// что такое интерфесы и для чего они нужны
// по сути мы создаем некоторый тип, который в основном служит для объектов, или для классов, где мы указывам какие поля, какие функции
// и какие вообще элементы должны присутствовать у этих объектов
// интерфейс Rect будет типом, который можно будет указать в переменной, ниже будет пример на 16 строке
interface Rect {
    // readonly - указывает, что данное поле будет только для чтения
    // ? - добавляет параметр, как необязательный
    readonly id: string
    color?: string
    size: {
        width: number
        heigth: number
    }
}
// мы создали интерфейс, и теперь мы можем создавать объекты, которые будут являтся типом Rect
const rect1: Rect = {
    id: '1234',
    size: {
        width: 20,
        heigth: 30
    },
    color: '#ccc'
}

const rect2: Rect = {
    id: '12345',
    size: {
        width: 10,
        heigth: 5
    }
}
rect2.color = 'black'

// мы создали объект, который в последствии будет являтся типом Rect
const rect3 = {} as Rect


// ========
// НАСЛЕДОВАНИЕ ИНТЕРФЕЙСОВ
interface RectWidthArea extends Rect{
    // на строке ниже была добавлена функция. после : был указан тип данных что это функция, то есть скобки
    // после стрелочки указывается тип данных, который должен быть возвращен
    getArea: () => number
}

const rect4: RectWidthArea = {
    id: '1234',
    size: {
        width: 15,
        heigth: 20
    },
    getArea(): number{
        return this.size.width * this.size.heigth
    }
}

// ==========
interface IClock {
    // у поля time тип данных Date
    time: Date
    setTime(date: Date): void
}

// чтобы тайпскрипт понял, что данный класс имплеметнируется от интерфейска, пишется ключевое слово implements
class Clock implements IClock {
    time: Date = new Date()
    setTime(date: Date): void {
        this.time = date
    }
}

// =============
// бывают ситуации, когда нужно создать интефейс, для объекиа, у которого большое количество динамических ключей

interface Styles {
    // в [] мы указываем тип ключа, после []: укащываем, какой тип будет у значений ключа
    [key: string]: string
}

const css: Styles = {
    border: '1px splid black',
    marginTop: '2px',
    borderRadius: '15px'
}
// с интерфейсами пока что всё)