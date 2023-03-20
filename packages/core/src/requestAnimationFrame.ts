// 定义兼容不同浏览器requestAnimationFrame的函数
const requestAnimationFrame =
  window?.requestAnimationFrame ||
  // window?.webkitRequestAnimationFrame ||
  // window?.mozRequestAnimationFrame ||
  function (callback: FrameRequestCallback) {
    return window.setTimeout(callback, 1000 / 60);
  };

// 定义兼容不同浏览器cancelAnimationFrame的函数
const cancelAnimationFrame =
  window?.cancelAnimationFrame ||
  // window?.webkitCancelAnimationFrame ||
  // window?.mozCancelAnimationFrame ||
  function (id: number) {
    window.clearTimeout(id);
  };

// 封装requestAnimationFrame函数
export function animate(
  callback: FrameRequestCallback,
  element?: HTMLElement,
  fps = 60
) {
  let start: number;
  let id: number;
  let lastTimestamp = Date.now();
  const interval = 1000 / fps;
  function loop(timestamp: number) {
    if (!start) {
      start = timestamp;
    }
    const elapsed = timestamp - start;
    if (elapsed < interval) {
      id = requestAnimationFrame(loop);
      return;
    }
    const delta = timestamp - lastTimestamp;
    lastTimestamp = timestamp;
    callback(delta);
    id = requestAnimationFrame(loop);
  }
  if (element) {
    element.scrollTop = 0;
    loop(0);
  } else {
    id = requestAnimationFrame(loop);
  }
  return {
    cancel: () => cancelAnimationFrame(id),
  };
}
