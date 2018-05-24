<template>
    <div class="component-home">
        <div class="center">
            <div class="wrapper">
                <div class="avatar"><img class='hero' src="../images/head.jpg" alt=""></div>
                <div class="card">
                    <div class="bio">
                        <div class="head">
                            <span>
                            {{ front.title }}
                          </span>
                        </div>
                        <div class="info">
                            <span>
                            {{ front.description }}
                          </span>
                        </div>
                        <div class="description">
                            <div class="button-wrapper">
                                <el-button v-for="item in nav" round :key="item.text" @click="handlerClick(item)">
                                    {{ item.text }}
                                </el-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        front() {
            return this.$site
        },

        nav() {
            console.log()
            return this.$site.themeConfig.nav.filter(function(index) {
              return index.text!='首页';
            }) || ['文档']
        }
    },

    methods: {
        handlerClick({ link = '' }) {
            if (/^http/.test(link)) {
                window.open(link)
            } else {
                this.$router.push(link)
            }
        }
    }
}
</script>
<style>
.component-home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: #909399;
}

.component-home .center {
    height: 50%;
    text-align: center;
    width: 80%
}


.component-home .center .button-wrapper {
    display: flex;
    justify-content:center;
}


.wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.wrapper .avatar {
    position: relative;
    z-index: 1;
}

.wrapper .avatar img {
    display: block;
    width: 140px;
    height: 120px;
    border: 6px solid #e6ecf0;
    border-radius: 50%;
}

.wrapper .card {
    max-width: 600px;
    width: 40%;
    position: relative;
    top: -75px;
    padding-top: 75px;
    margin-left: auto;
    margin-right: auto;
    background:rgba(255,255,255,.4);
    box-shadow: 0 4px 8px 4px rgba(0, 0, 0, .2);
    border-radius: .3rem;
    text-align: center;
}

.wrapper .card .bio {
    padding: 1rem;
}

.wrapper .card .bio .head {
    font-weight: 700;
    font-size: 1.3rem;
}

.wrapper .card .bio .info {
    padding: .5rem;
    font-size: 1rem;
    color: rgba(0, 0, 0, .4);
    border-bottom: 1px solid #ccc;
    margin: 1rem auto;
    width: 40%;
}

.description {
    margin-bottom: 10px;
    padding: 4px 0;
    text-align: justify;
}
</style>
