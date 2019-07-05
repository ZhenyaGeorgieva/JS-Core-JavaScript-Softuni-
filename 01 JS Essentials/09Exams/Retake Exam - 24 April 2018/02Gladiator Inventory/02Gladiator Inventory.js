function solve(input) {
    let currentEquipment = input.shift().split(' ');
    input.pop();
   
    for (let index = 0; index < input.length; index++) {
        let tokens = input[index].split(' ');
        let action = tokens[0];
       
        if (action == 'Buy') {
            let armour = tokens[1];
            if (!currentEquipment.includes(armour)) {
                currentEquipment.push(armour);
            }
        } else if (action == 'Trash') {
            let armour = tokens[1];
            if (currentEquipment.includes(armour)) {
                let index = currentEquipment.indexOf(armour);
                currentEquipment.splice(index, 1);
            }
        } else if (action == 'Repair') {
            let armour = tokens[1];
            if (currentEquipment.includes(armour)) {
                let index = currentEquipment.indexOf(armour);
                currentEquipment.splice(index, 1);
                currentEquipment.push(armour);
            }
        } else if (action == 'Upgrade') {
            let tokensEquipment = tokens[1].split('-');
            let armour = tokensEquipment[0];
            let upgrade = tokensEquipment[1];
            if (currentEquipment.includes(armour)) {
                let index = currentEquipment.indexOf(armour);
                currentEquipment.splice(index + 1, 0, `${armour}:${upgrade}`)
            }
        }
    }
    console.log(currentEquipment.join(' '));
}
solve(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel',
    'Fight!'])
