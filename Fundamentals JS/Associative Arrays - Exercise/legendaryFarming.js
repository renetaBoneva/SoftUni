// 55/100
function legendaryFarming(input){
    
    let data = input.split(' ');
    let dataL = data.length;
    let keyMaterials = new Map();
    let junks = new Map();
    let winner = '';
    
    keyMaterials.set('Shadowmourne', 0)
    keyMaterials.set('Valanyr', 0)
    keyMaterials.set('Dragonwrath', 0)
    for(let i = 0; i < dataL - 1; i += 2){
   
        let num = Number(data[i]);
        let item = data[i + 1];
        if(item.toLowerCase() === 'motes'){
            let oldNum = Number( keyMaterials.get('Dragonwrath') );
            keyMaterials.set('Dragonwrath', (oldNum + num) );
        } else if(item.toLowerCase() === 'fragments'){
            let oldNum = Number( keyMaterials.get('Valanyr') );
            keyMaterials.set('Valanyr', (oldNum + num) );
        } else if(item.toLowerCase() === 'shards'){
            let oldNum = Number( keyMaterials.get('Shadowmourne') );
            keyMaterials.set('Shadowmourne', (oldNum + num) );
        } else{
            if(junks.has(item)){
                let oldNum = Number( junks.get(item) );
                junks.set(item, (oldNum + num) );
            } else{
                junks.set(item, num);
            }
        }
        let isWinner = false;
        for(let [km, n] of keyMaterials){
            if(n >= 250){
                winner =  km;
                keyMaterials.delete(km);
                isWinner = true;
                if(winner === 'Shadowmourne'){
                    keyMaterials.set('shards', n - 250);
                } else if(winner === 'Dragonwrath'){
                    keyMaterials.set('motes', n - 250);
                } else if(winner === 'Valanyr'){
                    keyMaterials.set('fragments', n - 250);
                }
                for(let [newKM, newN] of keyMaterials){
                     if(newKM === 'Shadowmourne'){
                        keyMaterials.set('shards', newN);
                        keyMaterials.delete(newKM)
                    } else if(newKM === 'Dragonwrath'){
                        keyMaterials.set('motes', newN);
                        keyMaterials.delete(newKM)
                    } else if(newKM === 'Valanyr'){
                        keyMaterials.set('fragments', newN);
                        keyMaterials.delete(newKM)
                    } 
                }
            }
        }
        if(isWinner){
            break;
        }
    }
    let resKeyMaterials = Array.from(keyMaterials.entries())
                            .sort(([keyA, valueA] , [keyB, valueB]) => {
                                return keyA.localeCompare(keyB);
                            })
                            .sort(([keyA, valueA] , [keyB, valueB]) => {
                                return valueB - valueA;
                            }) 

    let junkMaterials = Array.from(junks.entries())
                        .sort(([keyA, valueA] , [keyB, valueB]) => {
                            return keyA.localeCompare(keyB);
                        });
    
    console.log(`${winner} obtained!`)
    for(let [keyMaterial, quantity] of resKeyMaterials){
        console.log(`${keyMaterial}: ${quantity}`)
    }
    for(let [material, quantity] of junkMaterials){
        console.log(`${material}: ${quantity}`)
    }
}
legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')
console.log('--------------------')
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')