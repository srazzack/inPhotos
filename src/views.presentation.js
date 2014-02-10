var presentationView = Backbone.View.extend({
    el: "#cardContainer",
    currentCard: 0,
    templates: {
        cardShow: _.template($("#cardShowTemplate").html())
    },

    initialize: function () {
        //binding keypress to the view
        $(document).bind("keyup", _.bind(this.keypressHandler, this));
        //upon initialization, render the view
        this.render();
    },

    render: function () {
        //we want to render only one photo card at a time
        var model = this.collection.at(this.currentCard);
        this.$el.find("#activeCard").html(this.templates["cardShow"]({
            model: model
        }));
    },

    events: {
        "click #prevCard": "showPrevious",
        "click #pauseCardShow": "pause",
        "click #nextCard": "showNext",
        "click .picture": "pause",
        "click #playCardShow": "play"
    },

    keypressHandler: function (e) {
        console.log(e.keyCode);
        if (e.keyCode === 39) {
            this.showNext();
        } else if (e.keyCode === 37) {
            this.showPrevious();
        } else if (e.keyCode === 190) {
            this.play();
        } else if (e.keyCode === 191) {
            this.pause();
        }
    },

    showPrevious: function () {
        if (this.currentCard > 0 && this.currentCard <= this.collection.length - 1) {
            this.currentCard--;
            this.render();
        }
    },

    showNext: function () {
        this.state = "continue";
        if (this.currentCard < this.collection.length - 1) {
            this.currentCard++;
            this.render();
        } else if (this.currentCard == this.collection.length - 1) {
            clearInterval(this.intervalId);
        }
    },

    playShow: function () {
        if (this.currentCard < this.collection.length - 1 && this.state !== "paused") {
            this.currentCard++;
            this.render();
        } else if (this.currentCard == this.collection.length - 1) {
            clearInterval(this.intervalId);
        } else if (this.state === "paused") {
            clearInterval(this.intervalId);
        }
    },

    play: function () {
        this.state = "play";
        var self = this;

        this.intervalId = setInterval(function () {
            self.playShow();
        }, 1250);

    },
    //if the state is set to "pause", the slideshow should halt
    pause: function () {
        this.state = "paused";
    },

    transition: function () {

    }
});