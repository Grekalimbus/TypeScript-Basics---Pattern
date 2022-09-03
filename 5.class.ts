class TypeScript {
    version: string

    constructor(version: string){
        this.version = version
    }

    info(name: string){
        return `[${name}]: Typescript version ${this.version}`
    }
}
// ====

// class Car {
//     readonly model: string
//     readonly numberOfWheels: number = 4
//     // учитывая, что поле model = readonly, мы всё равно в конструкторе можем перезаписать
//     constructor(theModel: string){
//         this.model = theModel
//     }
// }
// АНАЛОГИЧНАЯ ЗАПИСЬ С НЕМНОГО ДРУГИМ СИНТАКСИСОМ ДЛЯ КОНСТРУКТОРА
// учитывая, что мы указываем модификатор прямо внутри конструктора, ТС создаст поле Редонли модал в классе и в конструкторе он его просто определит
// на входящий параметр model
class Car {
    readonly model: string
    constructor(readonly model: string){}     
}
// ===========

// 1. когда мы задаем модификатор protected для определенных свойств - это значит, что данные поля могут быть
// допступны в классе Animal и в классах которые наследуются от Animal
// 2. private модификаторы доступны только в том классе, в котором были определены
// 3. public доступны для всех, как например для переменной на строке 50
class Animal {
    protected voice: string = ''
    public color: string = 'black'

    private go(){
        console.log('go');        
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void{
        this.voice = voice
    }
}

const cat = new Cat()
// ===================
// Абстрактные классы
// ОТ абстрактных классов можно наследоваться, но при этом они ни во что не кампилируются
abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render(): void {
        console.log('component on render');        
    }
    info(): string {
        return 'String Component'
    }
}