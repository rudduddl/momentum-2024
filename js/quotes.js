const quotes = [
  {
    quote: "먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에",
    author: "엘사 맥스웰",
  },
  {
    quote:
      "절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다.",
    author: "L.론허바드",
  },
  {
    quote: "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.",
    author: "괴테",
  },
  {
    quote:
      "너무 소심하고 까다롭게 자신의 행동을 고민하지 말라. 모든 인생은 실험이다. 더 많이 실험할수록 더 나아진다.",
    author: "랄프 왈도 에머슨",
  },
  {
    quote:
      "네 자신의 불행을 생각하지 않게 되는 가장 좋은 방법은 일에 몰두하는 것이다.",
    author: "베토벤",
  },
  {
    quote:
      "도저히 손댈 수가 없는 곤란에 부딪혔다면 과감하게 그 속으로 뛰어들라. 그리하면 불가능하다고 생각했던 일이 가능해진다. 용기 있는 자로 살아라. 운이 따라주지 않는다면 용기있는 가슴으로 불행에 맞서라.",
    author: "키케로",
  },
  {
    quote:
      "도중에 포기하지 말라. 망설이지 말라. 최후의 성공을 거둘 때까지 밀고 나가자.",
    author: "헨리포드",
  },
  {
    quote:
      "되찾을 수 없는게 세월이니 시시한 일에 시간을 낭비하지 말고 순간순간을 후회 없이 잘 살아야 한다.",
    author: "루소",
  },
  {
    quote: "마음만을 가지고 있어서는 안된다. 반드시 실천하여아 한다.",
    author: "이소룡",
  },
  {
    quote: "문제점을 찾지말고 해결책을 찾으라",
    author: "헨리포드",
  },
  {
    quote:
      "삶을 사는데는 단 두 가지 방법이 있다. 하나는 기적이 전혀 없다고 여기는 것이고 또 다른 하나는 모든 것이 기적이라고 여기는 방식이다.",
    author: "알베르트 아인슈타인",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
