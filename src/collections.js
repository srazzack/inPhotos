var CardsCollection = Backbone.Collection.extend({
    model: Card,

    moveUp: function (model) {
        var index = this.indexOf(model);
        if (index > 0) {
            this.remove(model);
            this.add(model, {
                at: index - 1
            });
        }
    },

    moveDown: function (model) {
        var index = this.indexOf(model);
        if (index < this.models.length) {
            this.remove(model);
            this.add(model, {
                at: index + 1
            });
        }
    }
});