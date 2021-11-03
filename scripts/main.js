let currentState = {
  bc: true,
  gc: true,
  rc: true,
  rd: true,
  fc: true
}

window.addEventListener('load', () => {
  chrome.storage.sync.get(['bc', 'gc', 'rc', 'rd', 'fc'], value => {
    value.bc !== undefined ? currentState.bc = value.bc : '';
    value.gc !== undefined ? currentState.gc = value.gc : '';
    value.rc !== undefined ? currentState.rc = value.rc : '';
    value.rd !== undefined ? currentState.rd = value.rd : '';
    value.fc !== undefined ? currentState.fc = value.fc : '';

    chrome.storage.sync.set({
      bc: currentState.bc,
      gc: currentState.gc,
      rc: currentState.rc,
      rd: currentState.rd,
      fc: currentState.fc,
    }, () => {});
  });

  const cookie = document.getElementById('bigCookie');
  setInterval(() => {
    if(currentState.bc) cookie.click();
    if(currentState.gc) (s=>s?s.click():s)(document.querySelector('#shimmers .shimmer[alt="Golden cookie"],.shimmer[alt="金のクッキー"]'));
    if(currentState.rc) (s=>s?s.click():s)(document.querySelector('#shimmers .shimmer[alt="Wrath cookie"]'));
    if(currentState.rd) (s=>s?s.click():s)(document.querySelector('#shimmers .shimmer[alt="Reindeer"]'));
    if(currentState.fc) (s=>s?s.click():s)(document.querySelector('#commentsText .fortune'));
  }, 10);
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  chrome.storage.sync.set({
    bc: currentState.bc = msg.bc,
    gc: currentState.gc = msg.gc,
    rc: currentState.rc = msg.rc,
    rd: currentState.rd = msg.rd,
    fc: currentState.fc = msg.fc
  }, () => {});
});
