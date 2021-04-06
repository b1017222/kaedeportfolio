<template>
    <section>
        <div class="page-wrapper">
          <div class="row"><h1 class="title col">skill</h1></div>
          <div class="row">
            <div class="col">
              <p>{{ message}}</p>
            </div>
          </div>

              <div class="box-wrapper row">
                <div v-for="(skill, i) in skills" :key="i" class="card-wrapper back-color">
                  <div class="row">
                    <h3 class="col pt-3">{{ skill.title }}</h3>
                  </div>
                  <div class="row pt-3">
                    <ul class="col-md-2 col-sm-12">
                      <li v-for="(lang, i) in skill.langs" :key="i" >
                        {{ lang.name }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

          <div class="table-wrapper back-color">
            <div class="row">
              <h3 class="col pt-3">インターン</h3>
            </div>
            
              <table>
                  <tbody>
                      <tr v-for="(intern, i) in interns" :key="i">
                        <div class="row pt-4">
                          <th class="col-md-2 col-sm-12">{{ intern.name }}</th>
                          <td class="col-md-2 col-sm-12">{{ intern.company }}</td>
                          <td class="col-md-2 col-sm-12">{{ intern.contents }}</td>
                          <td class="col-md-6 col-sm-12">{{ intern.detail }}</td>
                        </div>
                      </tr>
                  </tbody>
              </table>
            
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
.row{
  margin:0;
}
.card-wrapper{
    box-shadow: 0 0 10px 0 rgb(0 0 0 / 10%);
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
    padding:10px;
    margin: auto;
    list-style-type: none;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, 100px);
     /* @media(max-width: 1410px) {
            grid-template-columns: repeat(2, 200px);
    }
    @media (max-width: 670px) {
             grid-template-columns: 200px;
    } */
}
table {
    display: inline-block;
    text-align: left;
}
tr {
    height: 100px;
}
th {
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
