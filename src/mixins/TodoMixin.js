let filters = {
    all: (items) => {
        return items
    },
    active: (items) => {
        return items.filter((item) => {
            return !item.completed
        })
    },
    completed: (items) => {
        return items.filter((item) => {
            return item.completed
        })
    }
}
export default {
    computed: {
        filterItem() {
            return filters[this.visibility](this.$store.state.items)
        },
        itemCounter() {
            return filters.active(this.$store.state.items).length
        }
    }
}
