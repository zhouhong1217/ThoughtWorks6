const loadAllItems = require('./loadAllItems.js');

module.exports = function main(inputs) {
     let allItems = loadAllItems();
    let data = inputs;
    let Cart = [];
    let str = `***<没钱赚商店>购物清单***\n`;
    let money = 0;
    data.map((item,index)=>{
        if(!Cart[item]){
            Cart[item]={};
            Cart[item].count = 1;
        }else{
            Cart[item].count++;
        }
    })
    for(key in Cart){
        allItems.map((item,index)=>{
            if(item.barcode === key){
                Cart[key].item = item;
                str += `名称：${item.name}，数量：${Cart[key].count}${item.unit}，单价：${(item.price).toFixed(2)}(元)，小计：${(Cart[key].count*item.price).toFixed(2)}(元)\n`
                money +=Cart[key].count*item.price;
            }
        })
    }
    str += `----------------------\n`
    str += `总计：${money.toFixed(2)}(元)\n`
    str += `**********************`
    return str;
};
