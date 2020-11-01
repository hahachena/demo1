<template>

<div class="vacation">
    <div class="vacation-title">
        周末去哪儿
    </div>

    <ul>
        <li class="vacation-item" v-for="item in vacationList" :key='item.id'>
            <div class="vacation-img">
                <img :src="item.imgUrl" alt="">
            </div>

            <div class="vacation-msg">
                <p>{{ item.title }}</p>
                <p>{{ item.msg }}</p>
            </div>
        </li>

        
    </ul>

</div>
    
</template>

<script>
export default {
    data(){
        return{
            vacationList:[
                {
                    id:'01',
                    imgUrl:'//tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/6ff48e0e00432f823bf593deec6d3397.jpg',
                    title:'激流勇进，烧烤露营',
                    msg:'轻松水上漂，任我乐逍遥',
                },
                {
                    id:'02',
                    imgUrl:'//tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/729fced755d522ccfc280ef155f45518.jpg',
                    title:'激流勇进，烧烤露营',
                    msg:'在秘密花园，领略意大利风情',
                },
                {
                    id:'03',
                    imgUrl:'//tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/e86b37fef48851353d6f5ae0090cc974.jpg',
                    title:'激流勇进，烧烤露营',
                    msg:'带着相机去旅行，圆一场青海梦',
                },
                {
                    id:'04',
                    imgUrl:'//tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/24d074328b5a26845ebb92be20b38754.jpg',
                    title:'激流勇进，烧烤露营',
                    msg:'陪你去三亚，陪你去天涯海角',
                },
            ]
        }
    }
    
}
</script>

<style scoped>
.vacation-title{
    font-size: .32rem;
    padding: .24rem;
}

.vacation-item{
    margin-bottom: .1rem;
    background: #fff;
    font-size: .28rem;
}

.vacation-img{
    width: 100%;
    height:0;
    padding-bottom: 37.4375%;
}

.vacation-img img{
    width: 100%;
    height: 3rem;
    
}

.vacation-msg{
    padding:.2rem 0 .2rem .2rem ;
}

.vacation-msg p{
    margin-top: .2rem;
}

.vacation-msg p+p{
    color: #616161;
    font-size: .24rem;
}



</style>