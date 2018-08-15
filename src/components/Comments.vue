<template>
    <div class="resume_comments">
      <h1>联系我</h1>
        <div class="comment_content">
            <div class="messages">
                <h3>FELL FREE TO WRITE US</h3>
                <form @submit.prevent="onMessage" class="buttonStlye">
                    <label>
                        <input type="text" placeholder="E-mail" v-model="messages.Email">
                        <input type="text" placeholder="Phone" v-model="messages.Phone">
                        <textarea name="" id="" placeholder="Message" v-model="messages.content"></textarea>
                    </label>
                    <button type="submit">SEND</button>
                </form>
            </div>
             <div class="network">
                <h2>社交信息</h2>
                <ul>
                    <li>邮箱:<Eventable :mode="mode" :value="contact.email" @edit="onEdit('email',$event)"/></li>
                    <li>QQ:<Eventable :mode="mode" :value="contact.qq" @edit="onEdit('qq',$event)"/></li>
                    <li>Github:<Eventable :mode="mode"  :value="contact.github" @edit="onEdit('github',$event)"/></li>
                    <li>Wechat:<Eventable :mode="mode" :value="contact.wechat" @edit="onEdit('wechat',$event)"/></li>
                    <li>个人博客:<Eventable :mode="mode" :value="contact.Blog" @edit="onEdit('Blog',$event)"/></li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script>
import Eventable from "./Eventable";
export default {
  name: "Resume_comments",
  props:['contact',"mode"],
  data() {
    return {
      messages: {
        Email: "",
        Phone: "",
        content: ""
      },
    };
  },
  methods: {
    onEdit(key, value) {
      this.contact[key] = value;
    },
    onMessage() {
      var Todo = AV.Object.extend("Todo");
      var todo = new Todo();
      todo.save({
        email: this.messages.Email,
        phone: this.messages.Phone,
        message: this.messages.content
      }).then(
          (todo)=>{
          this.messages.Email = '';
          this.messages.Phone = ''
          this.messages.content = ''
          alert('留言成功');
        },
        function(error) {
          console.log(error)
        }
      );
    }
  },
  components: {
    Eventable
  }
};
</script>


<style lang="scss" scoped>
@media print{
  .comment_content{
    width: 700px;
  }
  .network{
    margin-left: 80px;
  }
  h1{
    width: 700px;
    display: block;
    text-align: center;
    margin: -30px 0 30px 0;
  }
}
.resume_comments {
  width: 960px;
  margin: 0 auto;
  h1 {

    text-align: center;
  }
  .comment_content {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    .messages {
      width: 470px;
      height: 370px;
      border: 1px solid #e7e7e7;
      border-radius: 5px;
      text-align: center;
      padding-top: 30px;
      h3 {
        font-weight: 400;
      }
      form {
        input {
          width: 320px;
          height: 30px;
          margin-top: 20px;
          padding-left: 10px;
          font-weight: 100;
          color: #909090;
        }
        textarea {
          width: 320px;
          height: 130px;
          font-weight: 100;
          color: #909090;
          margin: 20px 0;
          resize: none;
          border: 1px solid #e1e1e1;
          padding: 5px 0 0 10px;
        }
        button {
          width: 330px;
          height: 30px;
          background: #e6686a;
          color: white;
          border: 1px solid #e6686a
        }
      }
    }
    .network {
      width: 400px;
      padding-top: 40px;
      font-size: 15px;
      h2 {
        font-size: 24px;
        font-weight: 300;
      }
      ul {
        margin-top: 30px;
        li {
          margin-top: 10px;
          span {
            margin-left: 5px;
          }
        }
      }
    }
  }
}
</style>
