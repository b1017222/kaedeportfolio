<template>
    <section>
        <div class="page-wrapper">
            <h1 class="title">Contact</h1>
            <p>{{ message}}</p>
            <div>
                <form class="form" action="https://formspree.io/f/mbjqrejd" method="POST">
                    <tbody>
                        <tr v-for="(item, i) in items" :key="i">
                            <th valign="top">{{ item.name }}</th>
                            <td valign="top" v-if="item.kind" class="">
                                <label>
                                    <input class="text back-color" type="{item.kind}" name="{item.text}">
                                </label>
                            </td>
                            <td valign="top" v-else class="text last-td">
                                <label>
                                    <textarea class="text back-color" name="{item.text}"></textarea>
                                </label>
                            </td>
                        </tr>
                    </tbody>
                    <button class="btn btn-warning" type="submit">Send</button>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      message: 'お気軽にどうぞ',
      items: [
        {name: 'Your email', kind: 'email', text: '_replyto'},
        {name: 'Your name', kind: '', text: 'message'},
        {name: 'Your message', kind: '', text: 'test'}
      ]
    }
  }
}
</script>
<style scoped>
@import '../assets/styles/base.css';
@import url(https://formspree.io/f/mbjqrejd);

.form{
    padding :40px;
    display:flex;
    flex-flow: column;
    align-items: center;
}
.resize-btn{
 width:100px;
 background-color:#FFF;
 border:solid #C0C0C0;
 border-width:1px;
 border-radius: 8px;
}
.resize-btn:hover{
    background-color:#EEEEEE;
    border:solid #C0C0C0;
    border-radius: 8px;
    border-width:1px;
}

 .text{
  resize: none;
  width:300px;
  height:80px;
  border:none;
  padding:10px;
}
</style>
