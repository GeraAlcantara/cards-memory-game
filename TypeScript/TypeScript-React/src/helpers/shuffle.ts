import { Item } from "../ts/item.interface";

export const Shuffle = (list: Item[]) => {
  const newList = list.concat(list);
  for (var i = newList.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = newList[i];
      newList[i] = newList[j];
      newList[j] = temp;
  }
  return newList;
}