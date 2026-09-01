export function userAgent(classElement) {
  const $container = document.querySelector(`.${classElement}`);
  const device = navigator.userAgent;
  if (/Linux/i.test(device)) {
    $container.innerHTML = `
      <h4 style="text-align:center;margin-top: 20px">Si ves esto, eres un usario de Linux</h4>
    <img src="../img/chad.jpg">
    `
  } else if (/Windows/i.test(device)) {
    $container.innerHTML = `
      <h4 style="text-align:center;margin-top: 20px">Si ves esto, eres un usario de Window</h4>
    <img src="../img/window.jpg">
    `
  }
}
