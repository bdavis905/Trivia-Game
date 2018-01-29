function start(al) {
  var bar = document.getElementById('progressBar');
  var status = document.getElementById('status');
  status.innerHTML = al + "%";
  bar.value = al;
  al++;
  var sim = setTimeout("start(" + al + ")", 50);
  if (al == 100) {
    status.innerHTML = "100%";
    bar.value = 100;
    clearTimeout(sim);
    var finalMessage;
    document.getElementById('statusMessage').innerHTML = "<span class="message">Time Is Up!!</span>";
  }}