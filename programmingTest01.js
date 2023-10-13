const fs = require('fs');

fs.readFile('bread.json', (err, data) => { // json파일에 정의되어 있는 Bread객체를 가져옴
  if (err) {
    console.error('파일이 없거나 에러입니다.');
    return;
  }

  const list = JSON.parse(data)
  let breadList = [];

  for(let i = 0; i < list.length; i++){ // 리스트에 삽입
    const bread = createBread(list[i].breadType, list[i].recipe);
    breadList.push(bread);
  };

  for(let j = 0; j < breadList.length; j++){ // 리스트 내 Bread객체를 순환하며 출력
    const bread = breadList[j];
    console.log(`breadType: ${bread.breadType}`);
    console.log('recipe');
    for(const ingre in bread.recipe) {
      console.log(`${ingre}: ${bread.recipe[ingre]}`);
    };
    console.log('');
  };
});

function createBread(breadType, recipe) {
  return{
    breadType: breadType,
    recipe: recipe,
  };
};
