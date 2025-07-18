document.getElementById("zodiacForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const month = parseInt(document.getElementById("month").value);
  const day = parseInt(document.getElementById("day").value);

  // Map zodiac signs to HTML entity symbols
  const symbols = {
    Aries: "&#9800;",
    Taurus: "&#9801;",
    Gemini: "&#9802;",
    Cancer: "&#9803;",
    Leo: "&#9804;",
    Virgo: "&#9805;",
    Libra: "&#9806;",
    Scorpio: "&#9807;",
    Sagittarius: "&#9808;",
    Capricorn: "&#9809;",
    Aquarius: "&#9810;",
    Pisces: "&#9811;"
  };

  let zodiac = "";

  // Zodiac sign date ranges
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) zodiac = "Aries";
  else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) zodiac = "Taurus";
  else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) zodiac = "Gemini";
  else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) zodiac = "Cancer";
  else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) zodiac = "Leo";
  else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) zodiac = "Virgo";
  else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) zodiac = "Libra";
  else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) zodiac = "Scorpio";
  else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) zodiac = "Sagittarius";
  else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) zodiac = "Capricorn";
  else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) zodiac = "Aquarius";
  else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) zodiac = "Pisces";
  else zodiac = "Unknown";

  // Display result
  document.getElementById("signName").innerHTML = zodiac;
  document.getElementById("signSymbol").innerHTML = symbols[zodiac] || "";
  document.getElementById("signImage").src = `images/${zodiac.toLowerCase()}.jpg`;
  document.getElementById("result").style.display = "block";
});
