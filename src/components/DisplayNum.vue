<template>
    <div class="container">
        <div class="row" align="center" style="alignment: left">
            <div class="col-md-4 col-md-offset-3" style="padding-top: 20px">
                <pre>
                    <p>this your calculator: {{Num}}</p>
                    <button @click="AddNum" style="margin-right: 70px"> ADD </button>
                </pre>
            </div>
            <div class="col-md-3" style="text-align: center">
                <pre style="height: 180px"> you add :
                <p style="text-align: left" v-for="value in Numbers" :key="value">
                    {{value}}
                </p>
            </pre>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "DisplayNum",
        data() {
            return {
                Nums: []
            }
        },
        computed: {
            ...mapGetters(['Num', 'Numbers']),

        },
        methods: {
            ...mapActions(['AddNum'])
        }
    }
</script>

<style scoped>

</style>