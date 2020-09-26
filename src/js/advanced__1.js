export default function skill(obj) {
    let array = [];
    for (let value of obj.special) {
        const {id, name, icon, description = 'Описание недоступно'} = value;
        let myObj = {};
        myObj.id = id;
        myObj.name = name;
        myObj.icon = icon;
        myObj.description = description;
        array.push(myObj);

    }
    console.log(array);
    return array;
}