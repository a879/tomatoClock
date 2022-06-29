<template>
  <div>

        <GlobalHeader></GlobalHeader>
        <ColumnList :list=testData></ColumnList>

  </div>
</template>

<script>
import GlobalHeader from '@/views/GlobalHeader'
import ColumnList from '@/components/ColumnList'

const testData = [{
    id: 1,
    title: '东南形胜',
    description: '  东南形胜，三吴都会，钱塘自古繁华。烟柳画桥，风帘翠幕，参差十万人家。云树绕堤沙，怒涛卷霜雪，天堑无涯。市列珠玑，户盈罗绮，竞豪奢。   ',
    avatar: 'http://5b0988e595225.cdn.sohucs.com/images/20170922/ec8359d92d9d42f8ae95bcd113ff84bc.jpeg',
    linkRouteParams: 'clock'
}, {
    id: 2,
    title: '三吴都会',
    description: '重湖叠巘清嘉，有三秋桂子，十里荷花。羌管弄晴，菱歌泛夜，嬉嬉钓叟莲娃。千骑拥高牙，乘醉听箫鼓，吟赏烟霞。异日图将好景，归去凤池夸。',
    avatar: 'http://5b0988e595225.cdn.sohucs.com/images/20170922/e412902b9eb545ababab5d3a2d33e2fa.jpeg',
    linkRouteParams: 'start'
}, {
    id: 3,
    title: '钱塘自古繁华',
    description: '一别都门三改火，天涯踏尽红尘。依然一笑作春温。无波真古井，有节是秋筠。惆怅孤帆连夜发，送行淡月微云。尊前不用翠眉颦。人生如逆旅，我亦是行人',
    avatar: 'http://5b0988e595225.cdn.sohucs.com/images/20170922/42cd27fb27de4612add5be488955622e.jpeg',
    linkRouteParams: 'a'
}, {
    id: 4,
    title: 'Test',
    description: '余幼时即嗜学。家贫，无从致书以观，每假借于藏书之家，手自笔录，计日以还。天大寒，砚冰坚，手指不可屈伸，弗之怠。录毕，走送之，不敢稍逾约。以是人多以书假余',
    avatar: 'http://5b0988e595225.cdn.sohucs.com/images/20170922/8c659df747154b48843a6b1dc5925d6f.jpeg',
    linkRouteParams: 'a'
}, {
    id: 5,
    title: 'LANGyang',
    description: '  东南形胜，三吴都会，钱塘自古繁华。烟柳画桥，风帘翠幕，参差十万人家。云树绕堤沙，怒涛卷霜雪，天堑无涯。市列珠玑，户盈罗绮，竞豪奢。   ',
    avatar: 'http://5b0988e595225.cdn.sohucs.com/images/20170922/ec8359d92d9d42f8ae95bcd113ff84bc.jpeg',
    linkRouteParams: 'todolist'
}
]

export default {
    components: {ColumnList, GlobalHeader},
    data() {
        return {
            testData
        }
    }
}
</script>

<style>
    *{
        margin: 0;
        padding: 0 auto;
    }

    .top {
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: aqua;

    }

    .left_top {
        margin-left: 50px;
    }

    .right_top {
        margin-right: 150px;
        width: 100px;
        display: flex;
        justify-content: space-between;
    }
</style>