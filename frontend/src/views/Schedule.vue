<template>
  <div class='Schedule'>
    <h1>スケジュール登録ページだよーーーー</h1>
    <div class='mainbox' id='newcomer'>
      <h2><span>スケジュールの登録</span></h2>
      <div class='explbox'></div><br/>
      <form name="inputform" method="POST">
        <input type="hidden" name="id" value="4917862">
        <input type="hidden" name="mi" value="46116636">
        <input type="hidden" name="ai">
        <input type="hidden" name="logout">
        <div v-bind:id="bulkdiv">
          <span v-bind:id="bulkbtn"><a @Click="bulkview()">一括で変更する ▼</a></span>
        </div>
        <div v-bind:id="bulkarea">
          <span class="btnsp btnac3" @Click="bulkclick('3')">○</span>
          <span class="btnsp btnac2" @Click="bulkclick('2')">△</span>
          <span class="btnsp btnac1" @Click="bulkclick('1')">×</span>
          <input type="checkbox" id="bulkflag" name="bulkflag">
          <label for="bulkflag">入力済の行は変更しない</label>
        </div>
        <div v-for="(day, key) in weekData" v-bind:key="key">
          <!--平日なら-->
          <div v-if="day.holiday == 0" v-bind:class="'regist '+day.day" id="regdiv">
            <table _fixedhead="rows:1; cols:1; div-auto-size:width; border-color:black; border-style:solid; border-width:2px;" cellspacing="0" class="listtbl" v-bind:id="'listtable'+day.num">
              <tr>
                <td> </td>
                <td class="rline" nowrap>
                  <div align="center">{{day.day}}<input type="hidden" name="membername" v-bind:value="day.day+'曜日'" /></div>
                </td>
              </tr>
              <tr>
                <td nowrap>9:00-10:30</td>
                <td nowrap class="rline" style="height:36px;"><span class="btnsp btnna" v-bind:id="day.num+'13'" @click="btnclick(day.num+'1','3')">◯</span><span class="btnsp btnna" v-bind:id="day.num+'12'" @click="btnclick(day.num+'1','2')">△</span><span class="btnsp btnna" v-bind:id="day.num+'11'" @Click="btnclick(day.num+'1','1')">×</span>
                  <input type="hidden" v-bind:name="'join-'+day.num+'1'" v-bind:id="'join-'+day.num+'1'" value="0">
                </td>
              </tr>
              <tr>
                <td nowrap>10:30-12:00</td>
                <td nowrap class="rline" style="height:36px;"><span class="btnsp btnna" v-bind:id="day.num+'23'" @Click="btnclick(day.num+'2','3')">◯</span><span class="btnsp btnna" v-bind:id="day.num+'22'" @Click="btnclick(day.num+'2','2')">△</span><span class="btnsp btnna" v-bind:id="day.num+'21'" @Click="btnclick(day.num+'2','1')">×</span>
                  <input type="hidden" v-bind:name="'join-'+day.num+'2'" v-bind:id="'join-'+day.num+'2'" value="0">
                </td>
              </tr>
              <tr>
                <td nowrap>12:00-14:00</td>
                <td nowrap class="rline" style="height:36px;"><span class="btnsp btnna" v-bind:id="day.num+'33'" @Click="btnclick(day.num+'3','3')">◯</span><span class="btnsp btnna" v-bind:id="day.num+'32'" @Click="btnclick(day.num+'3','2')">△</span><span class="btnsp btnna" v-bind:id="day.num+'31'" @Click="btnclick(day.num+'3','1')">×</span>
                  <input type="hidden" v-bind:name="'join-'+day.num+'3'" v-bind:id="'join-'+day.num+'3'" value="0">
                </td>
              </tr>
              <tr>
                <td nowrap>14:00-16:00</td>
                <td nowrap class="rline" style="height:36px;"><span class="btnsp btnna" v-bind:id="day.num+'43'" @Click="btnclick(day.num+'4','3')">◯</span><span class="btnsp btnna" v-bind:id="day.num+'42'" @Click="btnclick(day.num+'4','2')">△</span><span class="btnsp btnna" v-bind:id="day.num+'41'" @Click="btnclick(day.num+'4','1')">×</span>
                  <input type="hidden" v-bind:name="'join-'+day.num+'4'" v-bind:id="'join-'+day.num+'4'" value="0">
                </td>
              </tr>
              <tr>
                <td nowrap>16:00-17:30</td>
                <td nowrap class="rline" style="height:36px;"><span class="btnsp btnna" v-bind:id="day.num+'53'" @Click="btnclick(day.num+'5','3')">◯</span><span class="btnsp btnna" v-bind:id="day.num+'52'" @Click="btnclick(day.num+'5','2')">△</span><span class="btnsp btnna" v-bind:id="day.num+'51'" @Click="btnclick(day.num+'5','1')">×</span>
                  <input type="hidden" v-bind:name="'join-'+day.num+'5'" v-bind:id="'join-'+day.num+'5'" value="0">
                </td>
              </tr>
              <tr>
                <td nowrap>17:30-19:00</td>
                <td nowrap class="rline" style="height:36px;"><span class="btnsp btnna" v-bind:id="day.num+'63'" @Click="btnclick(day.num+'6','3')">◯</span><span class="btnsp btnna" v-bind:id="day.num+'62'" @click="btnclick(day.num+'6','2')">△</span><span class="btnsp btnna" v-bind:id="day.num+'61'" @Click="btnclick(day.num+'6','1')">×</span>
                  <input type="hidden" v-bind:name="'join-'+day.num+'6'" v-bind:id="'join-'+day.num+'6'" value="0">
                </td>
              </tr>
              <tr>
                <td nowrap>19:00-20:30</td>
                <td nowrap class="rline" style="height:36px;"><span class="btnsp btnna" v-bind:id="day.num+'73'" @Click="btnclick(day.num+'7','3')">◯</span><span class="btnsp btnna" v-bind:id="day.num+'72'" @Click="btnclick(day.num+'7','2')">△</span><span class="btnsp btnna" v-bind:id="day.num+'71'" @Click="btnclick(day.num+'7','1')">×</span>
                  <input type="hidden" v-bind:name="'join-'+day.num+'7'" v-bind:id="'join-'+day.num+'7'" value="0">
                </td>
              </tr>
              <tr>
                <td nowrap>20:30-22:00</td>
                <td nowrap class="rline" style="height:36px;"><span class="btnsp btnna" v-bind:id="day.num+'83'" @Click="btnclick(day.num+'8','3')">◯</span><span class="btnsp btnna" v-bind:id="day.num+'82'" @Click="btnclick(day.num+'8','2')">△</span><span class="btnsp btnna" v-bind:id="day.num+'81'" @Click="btnclick(day.num+'8','1')">×</span>
                  <input type="hidden" v-bind:name="'join-'+day.num+'8'" v-bind:id="'join-'+day.num+'8'" value="0">
                </td>
              </tr>
            </table>
          </div>
          <!--休日なら-->
          <div v-else v-bind:class="'regist '+day.day"> <!-- id="regdiv"> -->
            <table _fixedhead="rows:1; cols:1; div-auto-size:width; border-color:black; border-style:solid; border-width:2px;" cellspacing="0" class="listtbl" v-bind:id="'listtable'+day.num">
              <tr>
                <td> </td>
                <td class="rline" nowrap>
                  <div align="center">{{day.day}}<input type="hidden" name="membername" v-bind:value="day.day+'曜日'" /></div>
                </td>
              </tr>
              <tr>
                <td nowrap>9:00-11:00</td>
                <td nowrap class="rline" style="height:36px;"><span class="btnsp btnna" v-bind:id="day.num+'13'" @Click="btnclick(day.num+'1','3')">◯</span><span class="btnsp btnna" v-bind:id="day.num+'12'" @Click="btnclick(day.num+'1','2')">△</span><span class="btnsp btnna" v-bind:id="day.num+'11'" @Click="btnclick(day.num+'1','1')">×</span>
                  <input type="hidden" v-bind:name="'join-'+day.num+'1'" v-bind:id="'join-'+day.num+'1'" value="0">
                </td>
              </tr>
              <tr>
                <td nowrap>11:00-13:00</td>
                <td nowrap class="rline" style="height:36px;"><span class="btnsp btnna" v-bind:id="day.num+'23'" @Click="btnclick(day.num+'2','3')">◯</span><span class="btnsp btnna" v-bind:id="day.num+'22'" @Click="btnclick(day.num+'2','2')">△</span><span class="btnsp btnna" v-bind:id="day.num+'21'" @Click="btnclick(day.num+'2','1')">×</span>
                  <input type="hidden" v-bind:name="'join-'+day.num+'2'" v-bind:id="'join-'+day.num+'2'" value="0">
                </td>
              </tr>
              <tr>
                <td nowrap>13:00-15:00</td>
                <td nowrap class="rline" style="height:36px;"><span class="btnsp btnna" v-bind:id="day.num+'33'" @Click="btnclick(day.num+'3','3')">◯</span><span class="btnsp btnna" v-bind:id="day.num+'32'" @Click="btnclick(day.num+'3','2')">△</span><span class="btnsp btnna" v-bind:id="day.num+'31'" @Click="btnclick(day.num+'3','1')">×</span>
                  <input type="hidden" v-bind:name="'join-'+day.num+'3'" v-bind:id="'join-'+day.num+'3'" value="0">
                </td>
              </tr>
              <tr>
                <td nowrap>15:00-17:00</td>
                <td nowrap class="rline" style="height:36px;"><span class="btnsp btnna" v-bind:id="day.num+'43'" @Click="btnclick(day.num+'4','3')">◯</span><span class="btnsp btnna" v-bind:id="day.num+'42'" @Click="btnclick(day.num+'4','2')">△</span><span class="btnsp btnna" v-bind:id="day.num+'41'" @Click="btnclick(day.num+'4','1')">×</span>
                  <input type="hidden" v-bind:name="'join-'+day.num+'4'" v-bind:id="'join-'+day.num+'4'" value="0">
                </td>
              </tr>
              <tr>
                <td nowrap>17:00-19:00</td>
                <td nowrap class="rline" style="height:36px;"><span class="btnsp btnna" v-bind:id="day.num+'53'" @Click="btnclick(day.num+'5','3')">◯</span><span class="btnsp btnna" v-bind:id="day.num+'52'" @Click="btnclick(day.num+'5','2')">△</span><span class="btnsp btnna" v-bind:id="day.num+'51'" @Click="btnclick(day.num+'5','1')">×</span>
                  <input type="hidden" v-bind:name="'join-'+day.num+'5'" v-bind:id="'join-'+day.num+'5'" value="0">
                </td>
              </tr>
            </table>
          </div>
        </div>

        <br /> コメント：<input type="text" name="comment" placeholder="コメントを入力" v-model="userComment" style="width:680px;" /><br />
        <button type="submit" class="btn btn-primary">登録</button>  <a href="/">登録せずに戻る</a>
      </form>
    </div>
  </div>
</template>

<script>

import router from '../router/index.js'

export default {
  name: 'Schedule',
  data () {
    return {
      weekData: [],
      userComment: ''
    }
  },
  created () {
    const config = {
      headers: {
        Authorization: 'Bearer ' + this.$cookies.get('jwt_token')
      }
    }
    this.$axios
      .get('/api/schedule', config)
      .then(res => {
        this.weekData = res.data.week_data
        this.userComment = res.data.comment
      })
      .catch(error => {
        console.log(error)
        window.alert('もう一度ログインしてから試してください')
        router.push({ name: 'Home' }) // 強制的にルートページへ遷移
      })
  },
  methods: {
    bulkchange: function (id, key) {
      if (document.getElementById('join-' + id).value > 0 && document.inputform.bulkflag.checked === true) {} else {
        for (var i = 1; i <= 4; i++) {
          if (i === parseInt(key)) {
            document.getElementById(id + i).className = 'btnsp btnac' + key
            document.getElementById('join-' + id).value = key
          } else {
            if (document.getElementById(id + i) != null) {
              document.getElementById(id + i).className = 'btnsp btnna'
            }
          }
        }
      }
    },
    btnclick: function (id, key) {
      console.log('btnclick 入ったよー')
      for (var i = 1; i <= 4; i++) {
        console.log(String(i) + '回目')
        if (i === parseInt(key)) {
          console.log('if入ったよー')
          if (document.getElementById('join-' + id).value === key) {
            document.getElementById(id + i).className = 'btnsp btnna'
            document.getElementById('join-' + id).value = '0'
            console.log('value = 0')
          } else {
            document.getElementById(id + i).className = 'btnsp btnac' + key
            document.getElementById('join-' + id).value = key
            console.log('value = key')
          }
        } else {
          if (document.getElementById(id + i) != null) {
            document.getElementById(id + i).className = 'btnsp btnna'
          }
        }
      }
    },
    bulkclick: function (key) {
      // １週間すべてに適用できるように変更
      for (var day = 1; day <= 7; day++) {
        var inputTags = document.getElementById('listtable' + String(day)).getElementsByTagName('input')
        for (var i = 0; i < inputTags.length; i++) {
          if (inputTags[i].name.substr(0, 4) === 'join') {
            this.bulkchange(inputTags[i].name.substr(5), key)
          }
        }
      }
    },
    bulkview: function () {
      document.getElementById('bulkarea').style.display = 'block'
    },
    updatedata: function () {
      document.inputform.action = 'http://127.0.0.1:5000/' // 'regist?cd=qCkkDBkhvKvbVEbS'
      document.inputform.ai.value = 'u'
      return true
    }
  }
}
</script>

<style>
.btnsp {
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  font-size: 14px;
  display: inline-block;
  border: 1px solid #DDD;
  border-radius: 8px;
  -moz-border-radius: 8px;
  -webkit-border-radius: 8px;
  padding: 10px 6px 2px 6px;
  margin: 0 3px;
  width: 20px;
  height: 20px;
  vertical-align: middle;
}

.btnna {
  background: #EEE;
  background: -moz-linear-gradient(top, #EEE 0%, #DDD);
  background: -webkit-gradient(linear, left top, left bottom, from(#EEE), to(#DDD));
  color: #111;
}

.btnac1 {
  background: #ED145B;
  background: -moz-linear-gradient(top, #F5989D 0%, #ED145B);
  background: -webkit-gradient(linear, left top, left bottom, from(#F5989D), to(#ED145B));
  color: #eee;
}

.btnac2 {
  background: #F7941D;
  background: -moz-linear-gradient(top, #FDC689 0%, #F7941D);
  background: -webkit-gradient(linear, left top, left bottom, from(#FDC689), to(#F7941D));
  color: #eee;
}

.btnac3 {
  background: #007236;
  background: -moz-linear-gradient(top, #3CB878 0%, #007236);
  background: -webkit-gradient(linear, left top, left bottom, from(#3CB878), to(#007236));
  color: #eee;
}

.btnac4 {
  background: #1C20BC;
  background: -moz-linear-gradient(top, #5C60F3 0%, #1C20BC);
  background: -webkit-gradient(linear, left top, left bottom, from(#5C60F3), to(#1C20BC));
  color: #eee;
}
</style>
