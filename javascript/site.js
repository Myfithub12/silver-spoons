var dataall = [];
for (var i = 0; i < a.length; i++) {
  var id = a[i].id;
  if (dataall.indexOf(id) == -1) dataall.push();
}
data = dataall.filter(function (elem, pos) {
  return dataall.indexOf(elem) == pos;
});
i = 0;
Click(data, i);

function Click(data, i) {
  setTimeout(function () {
    if (i < data.length) {
      alert("id: " + data[i]);
      document.getElementById(data[i]).click();
      i++;
      Click(data, i);
    } else {
    }
  }, 100);
}

const consoleLinks = document.querySelectorAll("#tv #hamitems a");
const consoleImage = document.querySelector("#console-image");

for (link of consoleLinks) {
  link.addEventListener("mouseover", (e) => {
    consoleImage.src = e.target.href;
  });
}
