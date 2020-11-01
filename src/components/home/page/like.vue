<template>
<div class="like">
    <div class="like-top">
        <img src="https://picbed.qunarzz.com/83af731055e121a3251690b225327b56.png" alt="">
        猜你喜欢
    </div>

    <ul>
        <li class="like-item border-bottom" v-for="item in likeList" :key='item.id'>
            <div class="like-img">
                <img :src="item.imgUrl" alt="">
            </div>

            <div class="like-text">
                <div class="like-title">
                    {{ item.title }}
                </div>
                <div class="like-message">
                    {{ item.message }}
                </div>
                <div class="like-map">
                    <span class="like-mark">¥<b>{{ item.prise }}</b></span>起
                    <span class="like-right">{{ item.map }}</span>
                </div>
            </div>
        </li>     
    </ul>
   
</div>
    
</template>

<script>
export default {
    data(){
        return{
            likeList:[
                {
                    id:'01',
                    imgUrl:'//tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/7d9b233c71cad13ded0013f9c9cec635.jpg',
                    title:'金海湖风景区',
                    message:'1341条评论',
                    prise:'18.8',
                    map:'平谷区',
                },
                {
                    id:'02',
                    imgUrl:'//tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/fd16ccffb2e2376ff370bda3bebebd71.jpg',
                    title:'丽江古城',
                    message:'1981条评论',
                    prise:'133',
                    map:'丽江市',
                },
            ]
        }
    }
    
}
</script>

<style scoped>
.like{
    margin-top: .2rem;
    font-size: .28rem;
    background-color: #fff;
    padding: 0 0.2rem;
}

.like-top{
    padding: .2rem 0;
    font-size: .32rem;
}

.like-top img{
    width: .3rem;
    height: .3rem;
}

.like-item{
    padding: .2rem 0;
    position: relative;
    overflow: hidden;
}

.like-img{
    float: left;
}

.like-img img{
    width: 2rem;
    height: 2rem;
}

.like-text{
    overflow: hidden;
    padding-left: .2rem;
}

.like-title{
    font-size: .36rem;
    color: #212121;
    margin-top: .4rem;

}

.like-message{
    font-size: .24rem;
    color: #616161;
    margin-top: .3rem;
}

.like-map{
    color: #616161;
    margin-top: .3rem;
    position: relative;
}

.like-map .like-mark{
    color: #ff8300;
}

.like-map .like-mark b{
    font-size: .4rem;
}

.like-right{
    font-size: .24rem;
    position: absolute;
    right: 0;
}


</style>