const initPond = [ // 우물
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
let isExist = false; // 더이상 깊은곳이 있는지 체크하기 위한 변수

function exmineDepthOfPond(pond){ // 깊이 조사
    isExist = false; // 조건 초기화
    for(let i = 1; i < pond.length-1; i++){ // 다중 배열 검색하며 조건에 맞을시 깊이 숫자 1씩 올라감
        for(let j = 0; j < pond[i].length; j++){
            if(pond[i][j] != 0){
                if(pond[i][j] <= pond[i-1][j] && pond[i][j] <= pond[i+1][j] && pond[i][j] <= pond[i][j-1] && pond[i][j] <= pond[i][j+1]){
                    pond[i][j] += 1;
                    isExist = true;
                };
            };
        };
    };
    if(isExist){ // 조건(상하좌우 크거나 동일값)일경우 계속 탐사함
        exmineDepthOfPond(pond);
    }
};

exmineDepthOfPond(initPond); 
for (let i = 0; i < initPond.length; i++) {
    console.log(initPond[i].join(' '));
}
