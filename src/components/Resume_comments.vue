<template>
    <div class="resume_comments">
        <h1>联系我</h1>
        <div class="comment_content">
            <div class="messages">
                <h3>FELL FREE TO WRITE US</h3>
                <form>
                    <label>
                        <input type="text" placeholder="E-mail">
                        <input type="text" placeholder="Phone">
                        <textarea name="" id="" placeholder="Message"></textarea>
                    </label>
                    <button type="submit">SEND</button>
                </form>
            </div>
             <div class="network">
                <h2>社交信息</h2>
                <ul>
                    <li>邮箱:<Eventable :value="information.email" @edit="onEdit('email',$event)"/></li>
                    <li>QQ:<Eventable :value="information.qq" @edit="onEdit('qq',$event)"/></li>
                    <li>Github:<Eventable :value="information.github" @edit="onEdit('github',$event)"/></li>
                    <li>Wechat:<Eventable :value="information.wechat" @edit="onEdit('wechat',$event)"/></li>
                    <li>个人博客:<Eventable :value="information.Blog" @edit="onEdit('Blog',$event)"/></li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script>
import Eventable from "./Eventable";
export default {
  name: "Resume_comments",
  data() {
    return {
      information: {
        email: "79334424@qq.com",
        qq: 79334424,
        github: 'www.github.fallen158',
        wechat: 13717022872,
        Blog: "myBlog"
      }
    };
  },
  methods: {
    onEdit(key, value) {
      this.information[key] = value;
    }
  },
  components: {
    Eventable
  }
};
</script>


<style lang="scss" scoped>
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
          background: #000;
          color: white;
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
          span{
            margin-left: 5px;
          }
        }
      }
    }
  }
}
</style>
