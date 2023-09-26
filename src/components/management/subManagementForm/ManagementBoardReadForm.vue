<template>
    <div class="managementBoardReadFormBox">
        <p style="margin: 0px 0px 0px 20px">
            no.<input type="text" :value="board.boardId" readonly/>
        </p>
        <h2 class="managementBoardReadTitle">
            <input type="text" :value="board.boardName" readonly/>
        </h2>
        <div class="managementBoardReadUserThing">
            <div class="managementBoardReaduserMeddleThing">
                <div class="managementBoardReadUserImage"></div>
                <div class="managementBoardReadUserInfo">
                    <div>
                        <input type="text" v-if="board.userId" :value="board.userId.nickname" readonly/>
                        <input type="text" v-else value="작성자 정보 없음" readonly/>
                    </div>
                    <div>
                        <input type="text" :value="board.boardRegisterDate" readonly/>
                    </div>
                </div>
            </div>
            <div>
                <input type="text" :value="board.category" readonly/>
            </div>
        </div>
        <p class="managementBoardReadFormLine"></p>
        <div class="managementBoardReadContent">
            <div class="scrollable-content">
                <textarea :value="board.content" class="testDiv" readonly/>
            </div>
        </div>
        <button class="managementBoardReadBackBtn">
            <router-link class="returnBtn" :to="{ name: 'ManagementPage' }" style="text-decoration: none; color: white;"> 돌아가기 </router-link>
        </button>
    </div>
</template>

<script>
// import '@/assets/css/management/managementBoardRead.css'
import '@/assets/css/management/managementBoardRead2.css'

export default {
    name: "ManagementBoardReadForm",
    props: {
        board: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style lang="scss" scoped></style>