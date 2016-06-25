import Xray from 'x-ray';
const x = Xray();

const statsBuilder = (html) => {
  return Promise.all([getIdAndNames(html), getIdAndStats(html)])
    .then((values) => {
      let idAndNames = reformNames(values[0]);
      let idAndStats = reformStats(values[1]);
      return combineNameAndStates(idAndNames, idAndStats);
    }, (err) => {
      throw err;
    });
};

const getIdAndNames = (html) => {
  return new Promise(
    (resolve, reject) => {
      x(html, '#stats-section .js-career-select option',
        [{
          id: '@value',
          name: '@text'
        }]
      )((err, names) => {
        if (names.length === 0) {
          reject({ message: "找不到与该战网id相关的信息，请检查服务器与战网id后重试。" });
        }
        resolve(names);
      })
    }
  )
}

const getIdAndStats = (html) => {
  return new Promise(
    (resolve, reject) => {
      x(html, '.js-stats',
        [{
          id: '@data-category-id', // Hero id
          stats: x('tr',
            [{
              key: 'td:first-child', // Record name
              val: 'td:last-child' // Record value
            }]
          )
        }])((err, stats) => {
          if (stats.length === 0) {
            reject({ message: "找不到与该战网id相关的信息，请检查服务器与战网id后重试。" });
          }
          resolve(stats);
        });
    }
  );
};

const reformNames = (heroes) => {
  return heroes.reduce((prev, curr) => {
    prev[curr.id] = curr.name;
    return prev;
  }, {});
}

const reformStats = (heroes) => {
  return heroes.map((hero) => {
    hero.stats = hero.stats.reduce((prev, curr) => {
      prev[curr.key] = curr.val;
      return prev;
    }, {});

    return hero;
  });
}

const combineNameAndStates = (ids, stats) => {
  return stats.map((state) => {
    state['name'] = ids[state.id];
    return state;
  });
}

export default statsBuilder;
