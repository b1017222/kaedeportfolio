<template>
  <section>
    <div class="page-wrapper">
      <div class="row">
        <div class="col-12"> 
          <h1 class="title">Profile</h1>
        </div>
      </div>
      
      <div class="back-color">
        <div class="line-eq-wrapper row">
          <div class="profile-img col-md-4 col-12 p-5">
            <img class="img-size img-fluid" src="../assets/myface.png" tittle="プロフィール画像">
          </div>
          <div class="col-md-8 col-12">
            <div class="row p-3">
              <div class="col">
              <table>
                <tbody>
                  <tr v-for="(item, i) in items" :key="i">
                  <div class="row">
                    <th valign="top" class="col-12 col-md-2">{{ item.title }}</th>
                      <td valign="top" v-if="item.url" class="col-12 col-md-10">
                      <a :href="item.url" target="_blank" rel="noopener noreferrer" class="url-color">
                        {{ item.value }}
                      </a>
                      </td>
                      <td valign="top" v-else class="last-td col-12 col-md-10">
                        {{ item.value }}
                      </td>
                      </div>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      items: [
        {title: 'Name', value: '広田楓(ひろたかえで)', url: ''},
        {title: 'University', value: '公立はこだて未来大学 情報システム科学部 複雑系コース', url: ''},
        {title: 'E-mail', value: 'b1017222@fun.ac.jp', url: ''},
        {title: 'GitHub', value: 'こちらからどうぞ！', url: 'https://github.com/b1017222'},
        {title: 'Comment', value: '初めまして。北海道函館出身の大学生です。1年半程前にプログラミングに興味を持ち始め、そこからインターンでサーバーサイド言語に触れたのを機にバックエンドからの学習を進めていました。一年前からプログラミングのアルバイトを始め、主にスマホ向けアプリやwebアプリケーションの受託開発に携わっています。そのため普段はバックエンドからフロントエンドまで幅広く案件に触れる機会が多いです。また最近ではwebアプリケーションに興味を持ち始め、モダンjsやデータベースについて学習しています。', url: ''}
      ]
    }
  }
}
</script>

<style scoped>
@import '../assets/styles/base.css';

.line-eq-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing:content-box;

}
.img-size{
  max-width: 100%;
  height: auto;
}
.profile-img{
     display: inline-block;
}
p{
  margin: 0 auto;
 }
/* ▲テーブル▲ */
</style>
