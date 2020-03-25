
function app() {
  pjs.defineDisplay("display", "app.json");

  while (true) {
    display.mainScreen.execute();
    if (addPayment) {
      pjs.query("INSERT INTO payments SET ?", { customerNumber, checkNumber, amount, type });
    }
  }
}

exports.default = app;
