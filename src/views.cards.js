var cardsView = Backbone.View.extend({
    el: "body",

    intialize: function () {
        this.render();
    },

    render: function () {
        var Obj = {};
        var locationPreSet = {
            lattitude: 40.7142,
            longitude: 74.0064
        };
        this.retrieveCards(Obj, locationPreSet);
    },

    events: {
        "click #sf": "retrieveCards",
        "click #la": "retrieveCards",
        "click #ny": "retrieveCards",
        "click #lv": "retrieveCards",
        "click #sd": "retrieveCards",
        "click #rc": "retrieveCards",
        "click #sj": "retrieveCards"
    },

    retrieveCards: function (evt, locationPreSet) {
        var location = locationPreSet || {
            lattitude: evt.currentTarget.attributes[2].nodeValue,
            longitude: evt.currentTarget.attributes[3].nodeValue
        };
        var source_url = "https://api.instagram.com/v1/media/search?lat=" + location.lattitude + "&lng=" + location.longitude + "&client_id=04749b851e434b999944fca756d8f3a5&callback=JSON_CALLBACK";
        $.ajax({
            type: "GET",
            dataType: "jsonp",
            url: source_url,
            data: {}
        }).done(this.dataHandler);
    },

    dataHandler: function (data) {
        var cc = new CardsCollection();
        cc.add(data.data);
        console.log(data.data);
        var view = new presentationView({
            collection: cc
        });
    }
});

var cv = new cardsView();
cv.intialize();