// Toggle abstract / bibtex panels and copy bibtex to clipboard.
(function () {
  var toggles = document.querySelectorAll('.toggle-pub');
  for (var i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener('click', function () {
      var el = document.getElementById(this.getAttribute('data-target'));
      if (el) el.classList.toggle('open');
    });
  }

  var copyBtns = document.querySelectorAll('.copy-bib');
  for (var j = 0; j < copyBtns.length; j++) {
    copyBtns[j].addEventListener('click', function () {
      var btn = this;
      var pre = btn.parentNode.querySelector('pre');
      if (!pre) return;
      var text = pre.innerText;
      var done = function () {
        var prev = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(function () { btn.textContent = prev; }, 1500);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, function () {});
      } else {
        var ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); done(); } catch (e) {}
        document.body.removeChild(ta);
      }
    });
  }

  // Star counts on Code buttons, fetched from GitHub in the visitor's browser.
  // Any failure leaves the button as a plain "Code" link.
  var codeBtns = document.querySelectorAll('.code-btn[data-repo]');
  for (var k = 0; k < codeBtns.length; k++) {
    (function (btn) {
      var repo = btn.getAttribute('data-repo').replace(/\/+$/, '');
      var key = 'stars:' + repo;
      var show = function (n) {
        if (typeof n !== 'number') return;
        btn.querySelector('.code-stars').textContent = '\u2605 ' + n;
      };
      var cached = null;
      try { cached = JSON.parse(sessionStorage.getItem(key)); } catch (e) {}
      if (cached !== null) { show(cached); return; }
      if (!window.fetch) return;
      fetch('https://api.github.com/repos/' + repo)
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (d) {
          if (!d) return;
          show(d.stargazers_count);
          try { sessionStorage.setItem(key, JSON.stringify(d.stargazers_count)); } catch (e) {}
        })
        .catch(function () {});
    })(codeBtns[k]);
  }
})();
