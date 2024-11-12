 /* 
This was extracted from a react interview challenge. The items were to be displayed in category groups.
Given an array of objects that contain a category key,
return a hash table to group the objects by their category.
Make the grouping case-insensitive.
Bonus: allow the key that is grouped by to be provided.
*/


const objects = [
    {
      name: "Baby Yoda",
      category: "cute",
    },
    {
      name: "Cricket Protein",
      category: "food",
    },
    {
      name: "Groot",
      category: "Cute",
    },
    {
      name: "House of Dragon",
      category: "TV Show",
    },
    {
      name: "Wasp Crackers",
      category: "Food",
    },
    {
      name: "Stranger Things",
      category: "TV Show",
    },
  ];
  
  const expected = {
    cute: [
      {
        name: "Baby Yoda",
        category: "cute",
      },
      {
        name: "Groot",
        category: "Cute",
      },
    ],
    food: [
      {
        name: "Cricket Protein",
        category: "food",
      },
      {
        name: "Wasp Crackers",
        category: "Food",
      },
    ],
    "TV show": [
      {
        name: "House of Dragon",
        category: "TV show",
      },
      {
        name: "Stranger Things",
        category: "TV show",
      },
    ],
  };
  
  /* 
  Given an array of objects that contain a category key,
  return a hash table to group the objects by their category.
  Make the grouping case-insensitive.
  Bonus: allow the key that is grouped by to be provided.
  */
  function groupObjects(items) {

    let map = {}  

    for(const obj of items){
        let key = obj["category"].toLowerCase()
        if(!Object.hasOwn(map, key)){
            map[key] = [obj];
        }else{
            map[key].push(obj);
        }
  }
    return map
  }
  console.log(groupObjects(objects))
  