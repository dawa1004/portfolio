'use strict';

{
  // DOM
  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const scoreLabel = document.querySelector('#result>p')

  // クイズデータ 問題と選択肢 （正解は最初の要素に設定する）
  const quizSet = shuffle([
    { q: 'チンパンジーの血液型で9割を占めるものは何型？', c: ['A型', 'B型', 'O型', 'AB型'] },
    { q: '「日本最北端の線路」がある駅の名前は？', c: ['稚内駅', '網走駅', '遠軽駅', '北見駅'] },
    { q: 'アメリカの世界遺産の国立公園の名称は？', c: ['イエローストーン国立公園', 'ザイオン国立公園', 'ヨセミテ国立公園', 'グレイシャー国立公園'] },
    { q: '世界で最も使用率の高いプログラミング言語は？', c: ['JavaScript', 'C言語', 'Python', 'HTML'] },
    { q: 'インドネシアの通貨は？', c: ['ルピア', 'ドン', 'ルピー', 'バーツ'] },
    { q: 'ピーマンの収穫量1位は？', c: ['茨城県', '宮崎県', '高知県', '鹿児島県'] },
    { q: 'nginxの読み方は？', c: ['エンジンエックス', 'エヌジンクス', 'ヌグックス', 'エヌジーインクス'] },
    { q: 'フットサルの日は何月何日？', c: ['5月5日', '6月6日', '3月3日', '9月9日'] },
    { q: '床からバスケットリングまでの高さは？', c: ['3.05m', '2.85m', '3.25m', '3.5m'] },
    { q: 'ドライアイスは何を個体にしたもの？', c: ['二酸化炭素', '窒素', '水素', '塩素'] },
  ]);
  let currentNum = 0;
  let isAnswered; // 回答状況の管理
  let score = 0; // 正答数の定義

  // シャッフル処理
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
  }

  // 正誤判定
  function checkAnswer(li) {
    if (isAnswered) { // 回答状況の管理
      return;
    }
    isAnswered = true;
    if (li.textContent === quizSet[currentNum].c[0]) {
      li.classList.add('correct');
      score++; //正解時にスコア+1
    } else {
      li.classList.add('wrong');
    }

    btn.classList.remove('disabled'); // ボタンの色変更→青（次の問題へ）
  }

  function setQuiz() {
    // 回答状況の管理
    isAnswered = false;

    question.textContent = quizSet[currentNum].q;
    // 前の選択肢表示をリセット（choicesの子要素を消す）
    while(choices.firstChild) {
      choices.removeChild(choices.firstChild);
    }

    // 選択肢のシャッフル
    const shuffledChoices = shuffle([...quizSet[currentNum].c]);
    shuffledChoices.forEach((choice) => {
      const li = document.createElement('li');
      li.textContent = choice;
      li.addEventListener('click', () => {
        checkAnswer(li);
      });
      choices.appendChild(li);
    });
    // 最後の問題のボタンのテキストを変更する
    if (currentNum === quizSet.length - 1) {
      btn.textContent = '結果を見る';
    }
  }

  setQuiz();

  // 回答→Nextクリックで次の問題へ
  btn.addEventListener('click', () => {
    if (btn.classList.contains('disabled')) {
      return;
    }
    btn.classList.add('disabled');

    if (currentNum === quizSet.length - 1) {
      scoreLabel.textContent = `正解数: ${score} / ${quizSet.length}`; // スコアの計算
      result.classList.remove('hidden'); //スコアの表示
    } else {
      currentNum++;
      setQuiz();
    }
  });
}
