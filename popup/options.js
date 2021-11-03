window.addEventListener('load', () => {
  chrome.storage.sync.get(['bc', 'gc', 'rc', 'rd', 'fc'], value => {
    document.getElementById('click_bc').checked = value.bc;
    document.getElementById('click_gc').checked = value.gc;
    document.getElementById('click_rc').checked = value.rc;
    document.getElementById('click_rd').checked = value.rd;
    document.getElementById('click_fc').checked = value.fc;
  });
});

const change = () => {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      bc: document.getElementById('click_bc').checked,
      gc: document.getElementById('click_gc').checked,
      rc: document.getElementById('click_rc').checked,
      rd: document.getElementById('click_rd').checked,
      fc: document.getElementById('click_fc').checked
    });
  });
};

document.getElementById('click_bc').addEventListener('change', () => change());
document.getElementById('click_gc').addEventListener('change', () => change());
document.getElementById('click_rc').addEventListener('change', () => change());
document.getElementById('click_rd').addEventListener('change', () => change());
document.getElementById('click_fc').addEventListener('change', () => change());
