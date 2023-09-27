<template>
    <v-container style="width: 1100px;">
        <hr style="color: black;" />
        <div class="container"
            style="color: black; display: flex; justify-content: flex-start; margin: 0; padding-bottom: 20px; padding-top: 20px; align-items: flex-end;">
            <div class="item" style="width: 5%;">
                No.{{ board.boardId }}
            </div>
            <div class="item" style="width: 10%; margin-right:5px;">
                <h2>[{{ board.category }}]</h2>
            </div>
            <div class="item" style="width: 70%;">
                <h2>{{ board.boardName }}</h2>
            </div>
            <div class="item" style="width: 15%;">
                {{ board.boardRegisterDate }}
            </div>
        </div>
        <hr style="color: black;" />
        <div id="mypageboardviewer" style="min-height: 500px; margin-top: 50px;"></div>
        <hr style="color: black;" />
    </v-container>
</template>
<script>
import Viewer from "@toast-ui/editor/dist/toastui-editor-viewer";
export default {
    data() {
        return {
            mypageboardviewer: null,
        };
    },
    props: {
        board: {
            type: Object,
            required: true
        },
        nickname: {
            type: String,
            required: true
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.mypageboardviewer = new Viewer({
                el: document.querySelector("#mypageboardviewer"),
                height: "500px",
                initialValue: this.board.content,
            });
        });
    },
    watch: {
        board(newValue) {
            if (this.mypageboardviewer) {
                this.mypageboardviewer.setMarkdown(newValue.content)
            }
        }
    },
}
</script>
<style>
.BoardReadTr {
    height: 50px;
}
</style>