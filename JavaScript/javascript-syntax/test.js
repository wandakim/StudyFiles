
function getTotalStats() {
    // # START:loop
    
      const game1 = {
        player: 'Jim Jonas',
        hits: 2,
        runs: 1,
        errors: 0,
      };
    
      const game2 = {
        player: 'Jim Jonas',
        hits: 3,
        runs: 0,
        errors: 1,
      };
    
      const total = {};
    
      const stats = Object.keys(game1); //*
      for (let i = 0; i < stats.length; i++) {
        const stat = stats[i];
        if (stat !== 'player') {
          total[stat] = game1[stat] + game2[stat];
          //좌항에서는 destructuring 오른쪽에서는 key 로 기존 object의 value에 접근 
          //total.stat = game1.stat + game2.stat; 왜 이건 안될까? 
        }
      }
      console.log(total);
    }

    getTotalStats();