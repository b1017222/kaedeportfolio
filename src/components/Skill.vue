<template>
    <section>
        <div class="page-wrapper">
            <h1 class="title">skill</h1>
            <p>{{ message}}</p>
            <div class="box-wrapper">
                <div v-for="(skill, i) in skills" :key="i" class="card-wrapper back-color">
                    <h3>{{ skill.title }}</h3>
                    <ul>
                        <li v-for="(lang, i) in skill.langs" :key="i">
                            {{ lang.name }}
                        </li>
                    </ul>
                </div>
                <div class="table-wrapper back-color">
                    <h3>インターン</h3>
                    <table>
                        <tbody>
                            <tr v-for="(intern, i) in interns" :key="i">
                                <th>{{ intern.name }}</th>
                                <td>{{ intern.company }}</td>
                                <td>{{ intern.contents }}</td>
                                <td>{{ intern.detail }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Skills',
  data () {
    return {
      message: '各分野で主に扱っている言語の一覧をご紹介します。',
      skills: [
        {title: 'アルバイト',
          langs: [
            { name: 'HTML/CSS' },
            { name: 'jQuery' },
            { name: 'JavaScript' },
            { name: 'PHP' },
            { name: 'MySQL' },
            { name: 'Swift' },
            { name: 'Kotlin' },
            { name: 'GitHub' },
            { name: 'Docker' },
            { name: 'WordPress' }
          ]
        },
        {title: '講義',
          langs: [
            { name: 'Python' },
            { name: 'Java' },
            { name: 'C' },
            { name: 'Processing' }
          ]
        },
        {title: '個人学習',
          langs: [
            { name: 'Go' },
            { name: 'Vue.js' },
            { name: 'PHP(Laravel)' },
            { name: 'MySQL' },
            { name: 'Docker' }
          ]
        }
      ],
      interns: [
        {name: 'Go,MySQL', company: '株式会社サイバーエージェント', contents: 'Dojo CA Tech Dojo 〜サーバサイドGo編〜参加', detail: '2週間でwebAPIを自力で作れるようになることを目標に、個々人が課題に取り組む学主型インターンでした。具体的にいうとソーシャルゲームのAPIで、ガチャ機能、ランキング機能などの実装を行いました。'},
        {name: 'PHP(Laravel)', company: '株式会社ウエディングパーク', contents: '４日間のハッカソン型インターン', detail: '３人１組でチームを作り、テーマに沿って企画、設計、開発、プレゼンテーションという一連の流れを短期間で体験するインターンでした。自分はサーバーサイドを担当しました。'},
        {name: 'Docker', company: '株式会社ディレクターズ', contents: 'コンテナ開発', detail: 'コマンド知識の学習や一からDockerイメージの作成をしたり、コンテナの作り方を一から学ぶというものでした。'}
      ]
    }
  }
}
</script>
<style scoped>
@import '../assets/styles/base.css';

.card-wrapper{
    box-shadow: 0 0 10px 0 rgb(0 0 0 / 10%);
    width: 40%;
    vertical-align: top;
    margin: 20px;
    border-radius: 20px;
    position: relative;
    padding-bottom: 10px;
}
.table-wrapper{
    border-radius: 20px;
}
ul{
    padding:0%;
    list-style-type: none;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, 150px);
     /* @media(max-width: 1410px) {
            grid-template-columns: repeat(2, 200px);
    }
    @media (max-width: 670px) {
             grid-template-columns: 200px;
    } */
}
table {
    display: inline-block;
    margin-left: 32px;
    text-align: left;
}
tr {
    height: 100px;
}
th {
    padding-right: 20px;
    font-weight: normal;
    color: rgb(0, 0, 0);
}
td {
    padding-right: 30px;
}
a {
  text-decoration: none;
}
</style>
