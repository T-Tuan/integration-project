let CancelList = {};

function genUniqueKey(config) {
  let data = config.data || config.params;
  return `${config.url}-${JSON.stringify(data)}`;
}

const PromiseCallBack = (type, res, CancelList = []) => {
  if (!CancelList.length) return;
  try {
    CancelList.forEach(item => {
      item[type](res);
    });
  } catch (error) {

  }
};

const request = (data) => {
  return new Promise((resolve, reject) => {
    const key = genUniqueKey(data);
    if (CancelList[key]) {
      CancelList[key].push({
        resolve,
        reject
      });
    } else {
      CancelList[key] = [];
      service(data).then(res => {
        resolve(res);
        PromiseCallBack("resolve", res, CancelList[key]);
      }).catch(error => {
        reject(error);
        PromiseCallBack("reject", error, CancelList[key]);
      }).finally(() => {
        setTimeout(() => {
          delete CancelList[key];
        }, 100);
      });
    }
  });
};