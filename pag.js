const pagination = {
    limit: 20,
    skip: 0,
    total: null,
    page: 1,

    next() {
        this.skip += this.limit;
        this.page++;
    },
    prev() {
        if (this.page <= 1) return;

        this.skip -= this.limit;
        this.page--;
    }
}